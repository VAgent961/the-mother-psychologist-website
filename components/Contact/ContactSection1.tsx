'use client';

import { useState } from 'react';

export default function ContactSection1() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (data.whatsapp) setWhatsapp(data.whatsapp);

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message);
      setStatus('error');
    }
  }

  return (
    <>
      <div className="flex flex-col w-full">
      <section className="w-full max-w-[1200px] mx-auto px-margin lg:px-margin-desktop py-space-xl lg:py-[96px]">
      <div className="flex flex-col gap-space-md max-w-2xl mb-space-xl lg:mb-[64px]">
      <h1 className="font-heading text-5xl lg:text-6xl text-ink tracking-tight">
              Book an appointment
            </h1>
      <p className="font-body text-lg text-muted max-w-xl">
              Please reach out to schedule a session or to inquire about my services.
            </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-start">
      <div className="lg:col-span-7 bg-surface rounded-xl p-space-lg lg:p-space-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
      {status === 'success' ? (
        <div className="flex flex-col gap-space-md py-space-xl text-center">
          <div className="w-16 h-16 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <h3 className="font-heading text-2xl text-ink">Thank you!</h3>
          <p className="font-body text-muted">Your message has been sent. I will get back to you as soon as possible.</p>
          {whatsapp && (
            <a 
              href={whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-space-md inline-flex items-center justify-center gap-space-sm bg-[#25D366] text-white px-space-xl py-space-sm rounded-xl font-body text-sm shadow-sm hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              Send it on WhatsApp too
            </a>
          )}
          <button 
            onClick={() => setStatus('idle')}
            className="text-primary font-body text-sm hover:underline mt-space-sm"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-space-xs">
            <label className="font-body text-sm text-ink" htmlFor="name">Name</label>
            <input 
              className="w-full bg-surface text-ink px-space-md py-space-sm rounded-xl outline-none focus:ring-2 focus:ring-primary text-base transition-all shadow-sm" 
              id="name" 
              name="name" 
              required 
              type="text" 
              disabled={status === 'sending'}
            />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label className="font-body text-sm text-ink" htmlFor="email">Email</label>
            <input 
              className="w-full bg-surface text-ink px-space-md py-space-sm rounded-xl outline-none focus:ring-2 focus:ring-primary text-base transition-all shadow-sm" 
              id="email" 
              name="email" 
              required 
              type="email" 
              disabled={status === 'sending'}
            />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label className="font-body text-sm text-ink" htmlFor="message">Message</label>
            <textarea 
              className="w-full bg-surface text-ink px-space-md py-space-sm rounded-xl outline-none focus:ring-2 focus:ring-primary text-base transition-all resize-y shadow-sm" 
              id="message" 
              name="message" 
              required 
              rows={5}
              disabled={status === 'sending'}
            ></textarea>
          </div>
          
          {status === 'error' && (
            <div className="p-space-md bg-red-50 text-red-600 rounded-xl text-sm font-body flex flex-col gap-2">
              <p>{error}</p>
              {whatsapp && (
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                  Contact via WhatsApp instead
                </a>
              )}
            </div>
          )}

          <div className="pt-space-xs">
            <button 
              className="bg-primary text-background hover:bg-primary/15 hover:text-ink px-space-xl py-space-sm rounded-xl font-body text-sm transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      )}
      </div>
      <div className="lg:col-span-5 flex flex-col gap-space-lg">
      <div className="bg-surface rounded-xl p-space-lg lg:p-space-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] flex flex-col gap-space-lg">
      <div className="flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-ink text-[20px]">location_on</span>
      </div>
      <div className="flex flex-col">
      <span className="font-body text-xs text-muted uppercase tracking-wider">Address</span>
      <p className="font-body text-base text-ink mt-space-xs">
                      1005, Clinic No 7, First Floor, Noujoum center, Samqaniyeh, Lebanon
                    </p>
      </div>
      </div>
      <div className="flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-ink text-[20px]">schedule</span>
      </div>
      <div className="flex flex-col">
      <span className="font-body text-xs text-muted uppercase tracking-wider">Hours</span>
      <p className="font-body text-base text-ink mt-space-xs">
                      Mon, Wed, Fri: 9 AM–2 PM
                    </p>
      </div>
      </div>
      <div className="flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-ink text-[20px]">call</span>
      </div>
      <div className="flex flex-col">
      <span className="font-body text-xs text-muted uppercase tracking-wider">Phone</span>
      <p className="font-body text-base text-ink mt-space-xs">
                      +961 3 937 162
                    </p>
      </div>
      </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] bg-surface">
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuA8sGhQJqi6FtHegTqhpeE-O5AidNzeHYHN21YvuM-JZYl79DxFdil7Ah7yVqnnaVe-yeJpWx0VdjUp8O488olWfa_qTjzfZFzuBklR1A0fbv4th2fY-reb8YzrpXmeIdAHUoYiVEobKwoBsOCsZ3q6GAcPn93-SYX4oxCp1qdidhE4kmjZcojvHxGj5OA5xTEKr1ImmEfpRIclGKSdVSToZ5zTBhzKza7bmDb3n__foEzC_fa2cxYkzXwOb228avI\')' }}></div>
      </div>
      </div>
      </div>
      </section>
      </div>
    </>
  );
}
