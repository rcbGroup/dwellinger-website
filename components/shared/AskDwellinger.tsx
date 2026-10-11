'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function AskDwellinger() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return
    const next: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/ask-dwellinger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const reply = await res.text()
      setMessages([...next, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Sorry, I could not connect right now. Please try again in a moment.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Ask Dwellinger AI"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: '50%',
          backgroundColor: 'var(--amber, #C4773B)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
          zIndex: 1000,
          transition: 'transform 0.2s, background-color 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 86,
            right: 24,
            width: 340,
            maxHeight: 480,
            backgroundColor: 'var(--color-bg-surface, #1E1E1E)',
            border: '1px solid var(--color-border, #333)',
            borderRadius: 12,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--color-border, #333)',
              background: 'var(--color-bg-raised, #252525)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MessageCircle size={18} style={{ color: 'var(--amber, #C4773B)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text, #fff)' }}>
                Ask Dwellinger
              </p>
              <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--color-text-muted, #aaa)', marginTop: 2 }}>
                AI assistant for construction & costs
              </p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 8px' }}>
            {messages.length === 0 && (
              <p style={{ color: 'var(--color-text-muted, #999)', fontSize: '0.82rem', textAlign: 'center', marginTop: 16 }}>
                Ask me about costs, planning, contractors, or how Dwellinger works.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 10,
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '84%',
                    padding: '8px 12px',
                    borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    background: m.role === 'user' ? 'var(--amber, #C4773B)' : 'var(--color-bg-raised, #252525)',
                    color: m.role === 'user' ? '#fff' : 'var(--color-text, #fff)',
                    fontSize: '0.83rem',
                    lineHeight: 1.5,
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10 }}>
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '14px 14px 14px 4px',
                    background: 'var(--color-bg-raised, #252525)',
                    color: 'var(--color-text-muted, #aaa)',
                    fontSize: '0.83rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '10px 12px',
              borderTop: '1px solid var(--color-border, #333)',
              background: 'var(--color-bg-raised, #252525)',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about costs, planning..."
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid var(--color-border, #444)',
                background: 'var(--color-bg, #0A0A0A)',
                color: 'var(--color-text, #fff)',
                fontSize: '0.85rem',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: input.trim() && !loading ? 'var(--amber, #C4773B)' : 'var(--color-border, #444)',
                border: 'none',
                cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s',
              }}
            >
              <Send size={15} color="#fff" />
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
