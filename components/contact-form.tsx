'use client';

import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://46.202.141.45:4500';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/v1/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setMsg(data.message || 'Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMsg('Failed to send. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#94a3b8]">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          className="glass-input"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#94a3b8]">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
          className="glass-input"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#94a3b8]">Message</label>
        <textarea
          id="message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          className="glass-input resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <p className="text-green-400">{msg}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <p className="text-red-400">{msg}</p>
        </div>
      )}
    </form>
  );
}
