'use client';

import { useState } from 'react';

const labelStyle: React.CSSProperties = {
  color: '#1A2340',
  fontSize: '0.875rem',
  fontWeight: 600,
  letterSpacing: '0.01em',
};

const inputStyle: React.CSSProperties = {
  border: '1.5px solid #EDE8DC',
  borderRadius: 8,
  padding: '12px 14px',
  fontSize: '0.95rem',
  color: '#1A2340',
  background: '#ffffff',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
};

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch('https://formspree.io/f/xpwzepnb', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        background: '#ffffff',
        borderRadius: 16,
        padding: '64px 40px',
        textAlign: 'center',
        border: '1px solid #EDE8DC',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}>
        <div style={{ fontSize: 56, marginBottom: 24, color: '#C4773B' }}>✓</div>
        <h2 style={{ color: '#1A2340', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 16px' }}>
          Thank you!
        </h2>
        <p style={{ color: '#4A5568', fontSize: '1.1rem', margin: 0, lineHeight: 1.7 }}>
          We&apos;ll be in touch within 2 hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#ffffff',
        borderRadius: 16,
        padding: '48px 40px',
        border: '1px solid #EDE8DC',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 32px' }}>
        Tell us about your project
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Full Name *</label>
          <input name="name" type="text" required placeholder="Jane Smith" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Email Address *</label>
          <input name="email" type="email" required placeholder="jane@example.com" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Phone Number</label>
          <input name="phone" type="tel" placeholder="07700 000000" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Property Address *</label>
          <input name="address" type="text" required placeholder="12 High Street, London" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Project Type *</label>
          <select name="project_type" required style={inputStyle}>
            <option value="">Select project type</option>
            <option value="Rear Extension">Rear Extension</option>
            <option value="Loft Conversion">Loft Conversion</option>
            <option value="Full Refurbishment">Full Refurbishment</option>
            <option value="Extension + Loft">Extension + Loft</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Budget Range *</label>
          <select name="budget" required style={inputStyle}>
            <option value="">Select budget range</option>
            <option value="Under £50k">Under £50k</option>
            <option value="£50k–£100k">£50k–£100k</option>
            <option value="£100k–£200k">£100k–£200k</option>
            <option value="£200k–£500k">£200k–£500k</option>
            <option value="£500k+">£500k+</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <label style={{ ...labelStyle, display: 'block', marginBottom: 12 }}>Do you have drawings?</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Yes – planning only',
            'Yes – technical drawings',
            'No – starting from scratch',
          ].map((opt) => (
            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', color: '#4A5568', fontSize: '0.95rem' }}>
              <input type="radio" name="drawings" value={opt} style={{ accentColor: '#C4773B', width: 16, height: 16 }} />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle}>Additional Information</label>
        <textarea
          name="additional_info"
          rows={4}
          placeholder="Tell us anything else that would help us understand your project…"
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: 32,
          width: '100%',
          background: '#C4773B',
          color: '#ffffff',
          border: 'none',
          borderRadius: 10,
          padding: '16px 32px',
          fontSize: '1.05rem',
          fontWeight: 700,
          cursor: 'pointer',
          letterSpacing: '0.01em',
        }}
      >
        Request My Quote →
      </button>
    </form>
  );
}
