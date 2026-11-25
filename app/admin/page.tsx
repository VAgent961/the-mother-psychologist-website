import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin | The Mother Psychologist', robots: { index: false, follow: false } };

export default async function AdminPage() {
  let messages: any[] = [];
  let error = '';

  if (hasDb) {
    try {
      messages = await sql`
        select * from contact_messages 
        order by created_at desc 
        limit 100
      `;
    } catch (err) {
      console.error('Admin Fetch Error:', err);
      error = 'Could not load messages from the database.';
    }
  }

  return (
    <div className="min-h-screen bg-surface text-ink font-body">
      <header className="bg-white border-b border-secondary/15 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-margin h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-heading text-xl text-primary">The Mother Psychologist</h1>
            <span className="px-2 py-0.5 bg-secondary/15 text-muted text-xs rounded-full uppercase tracking-wider">Admin</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-margin py-10">
        {!hasDb ? (
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-heading mb-2">Database Not Connected</h2>
            <p className="text-muted">The Neon database is not connected yet. Once connected, messages will appear here.</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl">Appointment Inquiries</h2>
                <span className="text-sm text-muted">{messages.length} total</span>
              </div>

              {messages.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-secondary/10 shadow-sm">
                  <p className="text-muted">No messages received yet.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className="bg-white rounded-2xl p-6 border border-secondary/10 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">{msg.name}</span>
                          <span className="text-xs text-muted bg-secondary/10 px-2 py-0.5 rounded-full">
                            {new Date(msg.created_at).toLocaleDateString('en-LB', { 
                              month: 'short', 
                              day: 'numeric', 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                        <a href={`mailto:${msg.email}`} className="text-primary text-sm hover:underline">{msg.email}</a>
                        <p className="text-ink mt-2 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                      </div>
                      <div className="shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          msg.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-muted'
                        }`}>
                          {msg.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
