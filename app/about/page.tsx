import AboutSection1 from '@/components/About/AboutSection1';

export const metadata = { title: 'About', description: '' };

export default function AboutPage() {
  return (
    <div className="bg-surface font-body text-base text-ink">
      <AboutSection1 />
    </div>
  );
}
