export default function AboutSection1() {
  return (
    <>
      <div className="flex flex-col w-full">
      <section className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-margin lg:px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-center">
      <div className="lg:col-span-5 flex flex-col justify-center">
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm bg-surface">
      <img alt="Serene, professional portrait of a clinical psychologist in a softly" className="w-full h-full object-cover" src="/images/stitch-2.jpg" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent pointer-events-none"></div>
      </div>
      </div>
      <div className="lg:col-span-7 flex flex-col lg:pl-space-xl">
      <div className="bg-surface rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col gap-space-lg">
      <h1 className="font-heading text-5xl text-primary tracking-tight">
                    About the practitioner
                  </h1>
      <p className="font-body text-lg text-ink leading-relaxed">
                    I am a psychologist dedicated to providing a safe and professional environment for my clients. With an MSc in Psychology from the UK and membership in the British Psychological Society, I integrate somatic and cognitive techniques to support teens and adults. My goal is to provide an unhurried space where you can explore your challenges and work toward healing.
                  </p>
      <div className="pt-space-md flex flex-wrap items-center gap-space-md text-muted font-body text-sm">
      <span className="inline-flex items-center gap-space-xs">
      <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
      <span>British Psychological Society (BPS)</span>
      </span>
      <span className="inline-flex items-center gap-space-xs">
      <span className="material-symbols-outlined text-primary text-[20px]">school</span>
      <span>MSc Psychology (UK)</span>
      </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="w-full pb-24">
      <div className="max-w-[1200px] mx-auto px-margin lg:px-margin-desktop">
      <div className="bg-surface rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
      <div className="flex items-center gap-space-md">
      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-ink shrink-0">
      <span className="material-symbols-outlined">calendar_today</span>
      </div>
      <div className="flex flex-col">
      <span className="font-body text-base text-ink">
                    Ready to start your healing journey?
                  </span>
      </div>
      </div>
      <a className="inline-flex items-center justify-center bg-primary text-background hover:bg-primary/15 hover:text-ink transition-colors px-space-lg py-space-sm rounded-xl font-body text-sm shadow-sm shrink-0" data-path="book-an-appointment" href="/contact">
                Book an appointment
              </a>
      </div>
      </div>
      </section>
      </div>
    </>
  );
}
