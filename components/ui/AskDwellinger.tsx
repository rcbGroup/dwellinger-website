'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED = [
  'How does Builder Score™ work?',
  'How much does a rear extension cost?',
  'How do I find a verified contractor?',
  'What\'s a Project Passport?',
  'How do I know a contractor is insured?',
]

export function AskDwellinger() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m the Dwellinger assistant. I can help you understand project costs, find the right contractor, or explain how the platform works. What do you need?',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [open, messages])

  async function handleSend(text?: string) {
    const userInput = text || input.trim()
    if (!userInput || loading) return

    const userMessage: Message = { role: 'user', content: userInput }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    const assistantMessage: Message = { role: 'assistant', content: '' }
    setMessages(prev => [...prev, assistantMessage])

    try {
      const response = await fetch('/api/ask-dwellinger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) throw new Error('Response failed')

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value)
          setMessages(prev => {
            const updated = [...prev]
            updated[updated.length - 1] = {
              role: 'assistant',
              content: updated[updated.length - 1].content + chunk,
            }
            return updated
          })
        }
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Sorry, I had trouble connecting. Please try again or contact support@dwellinger.co.uk.',
        }
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Ask Dwellinger"
        style={{
          display: open ? 'none' : 'flex',
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--amber)',
          border: 'none',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(196,119,59,0.4)',
        }}
      >
        <MessageCircle style={{ width: 24, height: 24, color: '#0A0A0A' }} />
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 360,
          maxWidth: 'calc(100vw - 32px)',
          height: 500,
          maxHeight: 'calc(100vh - 48px)',
          borderRadius: 16,
          background: 'var(--color-bg-surface)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--color-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'var(--amber)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MessageCircle style={{ width: 16, height: 16, color: '#0A0A0A' }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)' }}>Ask Dwellinger</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Property & construction guide</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: 4 }}>
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '9px 12px',
                  borderRadius: msg.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                  background: msg.role === 'user' ? 'var(--amber)' : 'var(--color-bg)',
                  color: msg.role === 'user' ? '#0A0A0A' : 'var(--color-text)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  {msg.content || (loading && i === messages.length - 1 ? <Loader2 style={{ width: 14, height: 14, animation: 'spin 1s linear infinite' }} /> : '')}
                </div>
              </div>
            ))}

            {/* Suggested questions — only show if only 1 message (opening) */}
            {messages.length === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                {SUGGESTED.map(q => (
                  <button key={q} onClick={() => handleSend(q)}
                    style={{
                      textAlign: 'left', background: 'var(--color-bg)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 8, padding: '7px 10px', cursor: 'pointer',
                      fontSize: 12, color: 'var(--color-text-secondary)',
                      transition: 'border-color 0.15s ease',
                    }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '10px 12px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--color-bg)',
            display: 'flex',
            gap: 8,
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="Ask me anything..."
              style={{
                flex: 1, background: 'var(--color-bg-surface)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '8px 12px',
                color: 'var(--color-text)', fontSize: 13,
                outline: 'none',
              }}
            />
            <button onClick={() => handleSend()} disabled={!input.trim() || loading}
              style={{
                background: 'var(--amber)', border: 'none', borderRadius: 8,
                padding: '8px 12px', cursor: 'pointer',
                opacity: (!input.trim() || loading) ? 0.5 : 1,
              }}>
              <Send style={{ width: 16, height: 16, color: '#0A0A0A' }} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
