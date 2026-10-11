'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageSquare, Search, Plus, Send, Paperclip, ChevronRight, X } from 'lucide-react'

const DEMO_CONVERSATIONS = [
  { id: '1', contractor: 'Meridian Build & Renovate', project: 'Side Return Extension', avatar: 'MB', lastMessage: 'Thanks for reaching out. We can visit Thursday at 2pm — does that work?', time: '2h ago', unread: 2,
    thread: [
      { from: 'me', text: 'Hi, I\'d like to discuss our planned rear extension. Are you available this week for a site visit?', time: '10:12' },
      { from: 'them', text: 'Hi! Yes, we are available this week.', time: '11:30' },
      { from: 'them', text: 'Thanks for reaching out. We can visit Thursday at 2pm — does that work?', time: '11:31' },
    ],
  },
  { id: '2', contractor: 'Highfield Construction Ltd', project: 'Side Return Extension', avatar: 'HC', lastMessage: 'Our quote is attached. Happy to go through it on a call.', time: 'Yesterday', unread: 0,
    thread: [
      { from: 'me', text: 'Could you send us a quote for the scope of works I shared?', time: '09:00' },
      { from: 'them', text: 'Our quote is attached. Happy to go through it on a call.', time: '16:45' },
    ],
  },
  { id: '3', contractor: 'Blueprint Build Ltd', project: 'Side Return Extension', avatar: 'BB', lastMessage: 'We have reviewed the drawings and have a few questions.', time: '3 days ago', unread: 1,
    thread: [{ from: 'them', text: 'We have reviewed the drawings and have a few questions about the structural opening.', time: '14:22' }],
  },
]

export default function MessagesPage() {
  const [activeConv, setActiveConv] = useState<string | null>('1')
  const [newMessage, setNewMessage] = useState('')
  const [showCompose, setShowCompose] = useState(false)

  const conv = DEMO_CONVERSATIONS.find((c) => c.id === activeConv)

  function handleSend() { if (!newMessage.trim()) return; setNewMessage('') }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '10px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
            <Link href="/dashboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Dashboard</Link>
            <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
            <span style={{ color: 'var(--color-text)' }}>Messages</span>
          </div>
          <button onClick={() => setShowCompose(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '7px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: '0.82rem' }}>
            <Plus className="w-3.5 h-3.5" /> New message
          </button>
        </div>
      </div>
      <div className="container mx-auto" style={{ padding: '1.5rem 0', height: 'calc(100vh - 100px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', height: '100%', border: '1px solid var(--color-border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', background: 'var(--color-bg-surface)', overflowY: 'auto' }}>
            <div style={{ padding: '12px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '7px 10px' }}>
                <Search style={{ color: 'var(--color-text-muted)' }} className="w-3.5 h-3.5 flex-shrink-0" />
                <input type="text" placeholder="Search conversations..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text)', fontSize: '0.82rem', width: '100%' }} />
              </div>
            </div>
            {DEMO_CONVERSATIONS.map((c) => (
              <button key={c.id} onClick={() => setActiveConv(c.id)} style={{ padding: '12px 14px', textAlign: 'left', border: 'none', borderBottom: '1px solid var(--color-border)', background: activeConv === c.id ? 'var(--amber-subtle)' : 'transparent', cursor: 'pointer', position: 'relative' }}>
                {activeConv === c.id && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'var(--amber)', borderRadius: '0 2px 2px 0' }} />}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-bg-raised)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, color: 'var(--amber)' }}>{c.avatar}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                      <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.82rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 140 }}>{c.contractor}</p>
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', flexShrink: 0 }}>{c.time}</span>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: '0 0 3px' }}>{c.project}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.78rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}>{c.lastMessage}</p>
                      {c.unread > 0 && <span style={{ background: 'var(--amber)', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '1px 6px', borderRadius: 20, flexShrink: 0 }}>{c.unread}</span>}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
            {!conv ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
                <MessageSquare style={{ color: 'var(--color-text-muted)' }} className="w-10 h-10" />
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Select a conversation</p>
              </div>
            ) : (
              <>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-bg-raised)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, color: 'var(--amber)' }}>{conv.avatar}</div>
                  <div>
                    <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{conv.contractor}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: 0 }}>{conv.project}</p>
                  </div>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {conv.thread.map((msg, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'me' ? 'flex-end' : 'flex-start' }}>
                      <div style={{ maxWidth: '70%' }}>
                        <div style={{ background: msg.from === 'me' ? 'var(--amber)' : 'var(--color-bg-surface)', color: msg.from === 'me' ? '#fff' : 'var(--color-text)', padding: '10px 14px', borderRadius: msg.from === 'me' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', fontSize: '0.85rem', lineHeight: 1.5, border: msg.from === 'them' ? '1px solid var(--color-border)' : 'none' }}>{msg.text}</div>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', margin: '3px 0 0', textAlign: msg.from === 'me' ? 'right' : 'left' }}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', textAlign: 'center', marginTop: 8 }}>Illustrative conversation — messaging goes live at platform launch</p>
                </div>
                <div style={{ padding: '12px 16px', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                    <div style={{ flex: 1, background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." rows={1} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text)', fontSize: '0.875rem', resize: 'none', lineHeight: 1.5 }} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }} />
                      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: 0, flexShrink: 0 }}><Paperclip className="w-4 h-4" /></button>
                    </div>
                    <button onClick={handleSend} style={{ background: 'var(--amber)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Send className="w-4 h-4" /></button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {showCompose && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem' }}>
          <div style={{ background: 'var(--color-bg-surface)', borderRadius: 14, padding: '1.5rem', width: '100%', maxWidth: 480, border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', margin: 0 }}>New message</h2>
              <button onClick={() => setShowCompose(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: 0 }}><X className="w-5 h-5" /></button>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>To: Contractor or professional</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '9px 12px' }}>
                <Search style={{ color: 'var(--color-text-muted)' }} className="w-4 h-4 flex-shrink-0" />
                <input type="text" placeholder="Search contractors or professionals..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text)', fontSize: '0.875rem', width: '100%' }} />
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Message</label>
              <textarea rows={4} placeholder="Write your message..." style={{ width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 12px', color: 'var(--color-text)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button onClick={() => setShowCompose(false)} style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 8, padding: '8px 16px', color: 'var(--color-text-secondary)', cursor: 'pointer', fontSize: '0.875rem' }}>Cancel</button>
              <button onClick={() => setShowCompose(false)} style={{ background: 'var(--amber)', border: 'none', borderRadius: 8, padding: '8px 16px', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
