export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin lg:px-margin-desktop flex items-center justify-between">
          <a className="font-heading text-2xl text-ink" data-path="home" href="/">The Mother Psychologist</a>
          <div className="flex items-center gap-space-lg">
            <nav className="hidden md:flex items-center gap-space-lg">
              <a className="px-space-sm py-space-xs font-body text-sm text-muted hover:text-ink transition-colors" data-path="home" href="/">Home</a>
              <a className="px-space-sm py-space-xs font-body text-sm text-muted hover:text-ink transition-colors" data-path="services" href="/services">Services</a>
              <a className="px-space-sm py-space-xs font-body text-sm text-muted hover:text-ink transition-colors" data-path="about" href="/about">About</a>
              <a className="px-space-sm py-space-xs font-body text-sm text-muted hover:text-ink transition-colors" data-path="contact" href="/contact">Contact</a>
            </nav>
            <a className="bg-primary text-background hover:bg-primary/15 hover:text-ink px-space-lg py-space-sm rounded-xl font-body text-sm transition-colors" data-path="book-an-appointment" href="/contact">Book an appointment</a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-background text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
