import { NextResponse } from 'next/server';
import { sql, hasDb } from '@/lib/db';
import { clean, isEmail, asText, whatsappLink, notifyOwner } from '@/lib/notify';

export async function POST(req: Request) {
  let wa = '';
  try {
    const body = await req.json();
    const name = clean(body.name, 100);
    const email = clean(body.email, 100);
    const message = clean(body.message, 1000);

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Please fill in all fields.' }, { status: 400 });
    }

    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const fields = [
      { label: 'Name', value: name },
      { label: 'Email', value: email },
      { label: 'Message', value: message }
    ];

    const subject = 'New Appointment Inquiry';
    wa = whatsappLink(asText(subject, fields));

    if (!hasDb) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Online booking is not connected yet. Please contact us on WhatsApp.', 
        whatsapp: wa 
      }, { status: 503 });
    }

    await sql`
      insert into contact_messages (name, email, message) 
      values (${name}, ${email}, ${message})
    `;

    await notifyOwner(subject, fields);

    return NextResponse.json({ ok: true, whatsapp: wa });
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json({ 
      ok: false, 
      error: 'Something went wrong. Please try again or contact us on WhatsApp.', 
      whatsapp: wa 
    }, { status: 500 });
  }
}
