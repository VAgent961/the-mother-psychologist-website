create table if not exists contact_messages (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'new'
);

create index if not exists contact_messages_created_at_idx on contact_messages (created_at);
