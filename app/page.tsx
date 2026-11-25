import HomeSection1 from '@/components/Home/HomeSection1';

export const metadata = { title: 'Home', description: '' };

export default function HomePage() {
  return (
    <div className="bg-surface font-body text-base text-ink">
      <HomeSection1 />
    </div>
  );
}
