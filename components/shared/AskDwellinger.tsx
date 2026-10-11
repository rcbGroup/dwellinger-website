'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

type Msg = { role: 'user' | 'assistant'; content: string }

const WELCOME = `Hi! I'm AskDwellinger 👋 Ask me anything about construction costs, finding contractors, or how the platform works.`

const SUGGESTIONS = [
  'How much does an extension cost?',
  'What is a Builder Score?',
  'How do I post a job?',
  'What does a loft conversion cost?',
]

export function AskDwellinger() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ role: 'assistant', content: WELCOME }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = async (text?: string) => {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    const next: Msg[] = [...msgs, { role: 'user', content: msg }]
    setMsgs(next)
    setLoading(true)
    try {
      const res = await fetch('/api/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: msg, history: msgs }) })
      const data = await res.json()
      setMsgs([...next, { role: 'assistant', content: data.reply }])
    } catch {
      setMsgs([...next, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} aria-label='Ask Dwellinger AI'
          style={{ position: 'fixed', bottom: 24, right: 24, width: 54, height: 54, borderRadius: '50%', background: '#C4773B', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(196,119,59,0.45)', zIndex: 9999 }}>
          <MessageCircle size={22} color='#fff' />
        </button>
      )}

      {open && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, width: 'min(375px, calc(100vw - 32px))', height: 510, background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, display: 'flex', flexDirection: 'column', zIndex: 9999, boxShadow: '0 8px 40px rgba(0,0,0,0.7)' }}>
          {/* Header */}
          <div style={{ padding: '13px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(196,119,59,0.1)', borderRadius: '16px 16px 0 0', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#C4773B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={15} color='#fff' />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>AskDwellinger</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>AI assistant · usually instant</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', padding: 4, display: 'flex', alignItems: 'center' }}>
              <X size={17} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 13px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '84%', padding: '9px 12px', borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px', background: m.role === 'user' ? '#C4773B' : 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.83rem', lineHeight: 1.55 }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '9px 14px', borderRadius: '12px 12px 12px 2px', background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', letterSpacing: 2 }}>···</div>
              </div>
            )}
            {msgs.length === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 4 }}>
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => send(s)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 7, padding: '7px 11px', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', cursor: 'pointer', textAlign: 'left' }}>{s}</button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '11px 13px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 7, flexShrink: 0 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder='Ask anything…'
              style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '9px 12px', color: '#fff', fontSize: '0.83rem', outline: 'none' }}
            />
            <button onClick={() => send()} disabled={loading || !input.trim()}
              style={{ background: '#C4773B', border: 'none', borderRadius: 8, padding: '0 13px', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer', opacity: loading || !input.trim() ? 0.4 : 1, display: 'flex', alignItems: 'center' }}>
              <Send size={15} color='#fff' />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
