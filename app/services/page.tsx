import ServicesSection1 from '@/components/Services/ServicesSection1';

export const metadata = { title: 'Services', description: '' };

export default function ServicesPage() {
  return (
    <div className="bg-surface font-body text-base text-ink">
      <ServicesSection1 />
    </div>
  );
}
