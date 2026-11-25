# Backend Documentation - The Mother Psychologist

This website is equipped with a working contact form and a private admin dashboard.

## Database Schema
The website uses a Neon Postgres database with the following table:

### `contact_messages`
Stores all inquiries from the contact form.
- `id`: Unique identifier.
- `created_at`: Timestamp of the inquiry.
- `name`: Client's name.
- `email`: Client's email address.
- `message`: The inquiry or booking request.
- `status`: 'new' (default) or 'done'.

## API Routes
- `POST /api/contact`: Handles form submissions, saves to the database, and notifies the owner.

## Admin Dashboard
The owner can view all inquiries at `/admin`.
- **Login**: Use the `ADMIN_PASSWORD` set in the environment variables.
- **Features**: View the latest 100 inquiries, formatted for mobile and desktop.

## Environment Variables
To enable all features, set the following variables in the Vercel project settings:

- `DATABASE_URL`: Neon Postgres connection string (set automatically).
- `ADMIN_PASSWORD`: Password for the `/admin` page.
- `ADMIN_SECRET`: Secret for admin sessions (set automatically).
- `WHATSAPP_NUMBER`: `9613937162` (for WhatsApp links).
- `TELEGRAM_BOT_TOKEN` & `TELEGRAM_CHAT_ID`: (Optional) To receive instant notifications on Telegram.
- `RESEND_API_KEY`: (Optional) To receive email notifications.
- `NOTIFY_EMAIL`: The owner's email for notifications.

## Later Features
- **Patient Portal**: Not included in this version.
- **Online Scheduling**: Currently handled via the contact form and manual follow-up.
