import ContactSection1 from '@/components/Contact/ContactSection1';

export const metadata = { title: 'Contact', description: '' };

export default function ContactPage() {
  return (
    <div className="bg-surface font-body text-base text-ink">
      <ContactSection1 />
    </div>
  );
}
