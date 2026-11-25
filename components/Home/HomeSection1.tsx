export default function HomeSection1() {
  return (
    <>
      <div className="flex flex-col w-full">
      <div className="flex flex-col gap-[48px] md:gap-[64px] lg:gap-section-gap pb-section-gap">
      <section className="relative w-full overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-surface to-surface pointer-events-none"></div>
      <div className="relative max-w-[1200px] mx-auto px-margin lg:px-margin-desktop flex flex-col items-center text-center">
      <h1 className="font-heading text-6xl text-ink max-w-3xl">
                Professional psychological support in the Chouf area
              </h1>
      <p className="mt-space-lg font-body text-lg text-muted max-w-2xl">
                Providing a safe, private space for teens and adults to navigate trauma, stress, and emotional well-being.
              </p>
      <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md">
      <a className="bg-primary text-background hover:bg-primary/15 hover:text-ink px-space-xl py-3 rounded-xl font-body text-sm shadow-sm transition-all duration-200 hover:shadow-md" data-path="book-an-appointment" href="/contact">
                  Book an appointment
                </a>
      <a className="bg-secondary/15 text-ink hover:bg-secondary/15 hover:text-ink px-space-xl py-3 rounded-xl font-body text-sm transition-colors duration-200" href="https://wa.me/9613937162" rel="noopener noreferrer" target="_blank">
                  Contact via WhatsApp
                </a>
      </div>
      </div>
      </section>
      <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-margin lg:px-margin-desktop">
      <div className="max-w-2xl">
      <h2 className="font-heading text-5xl text-ink">
                  Therapeutic approaches
                </h2>
      <p className="mt-space-md font-body text-lg text-muted">
                  I offer evidence-based therapy tailored to your individual needs, focusing on healing and emotional regulation.
                </p>
      </div>
      <div className="mt-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      <div className="bg-surface rounded-full p-space-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
      <div className="w-12 h-12 rounded-xl bg-secondary/15 text-ink flex items-center justify-center mb-space-lg">
      <span className="material-symbols-outlined text-[24px]">self_improvement</span>
      </div>
      <h3 className="font-heading text-2xl text-ink">
                      Somatic Trauma Healing
                    </h3>
      <p className="mt-space-sm font-body text-base text-muted">
                      A body-centered approach to processing and releasing trauma
                    </p>
      </div>
      </div>
      <div className="bg-surface rounded-full p-space-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
      <div className="w-12 h-12 rounded-xl bg-secondary/15 text-ink flex items-center justify-center mb-space-lg">
      <span className="material-symbols-outlined text-[24px]">psychology</span>
      </div>
      <h3 className="font-heading text-2xl text-ink">
                      Cognitive Behavioral Therapy (CBT)
                    </h3>
      <p className="mt-space-sm font-body text-base text-muted">
                      Practical tools to manage thoughts, feelings, and behaviors
                    </p>
      </div>
      </div>
      <div className="bg-surface rounded-full p-space-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1">
      <div>
      <div className="w-12 h-12 rounded-xl bg-secondary/15 text-ink flex items-center justify-center mb-space-lg">
      <span className="material-symbols-outlined text-[24px]">neurology</span>
      </div>
      <h3 className="font-heading text-2xl text-ink">
                      Neuro-Linguistic Programming (NLP)
                    </h3>
      <p className="mt-space-sm font-body text-base text-muted">
                      Techniques to improve communication and personal patterns
                    </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-margin lg:px-margin-desktop">
      <div className="bg-surface rounded-full p-space-xl lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      <div className="lg:col-span-7">
      <h2 className="font-heading text-5xl text-ink">
                    Professional expertise
                  </h2>
      <p className="mt-space-md font-body text-lg text-muted">
                    With an MSc in Psychology from the UK and membership in the British Psychological Society, I provide clinical care grounded in international standards and compassionate practice.
                  </p>
      </div>
      <div className="lg:col-span-5">
      <img alt="Calm, sunlit clinical psychology office" className="w-full h-64 lg:h-72 object-cover rounded-xl shadow-sm" src="/images/stitch-1.jpg" />
      </div>
      </div>
      </div>
      </section>
      <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-margin lg:px-margin-desktop">
      <div className="bg-secondary/60 rounded-full p-space-xl lg:p-12 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-primary text-background flex items-center justify-center mb-space-md">
      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      </div>
      <h2 className="font-heading text-4xl text-ink">
                  Your feedback matters
                </h2>
      <p className="mt-space-md font-body text-base text-muted max-w-xl">
                  If you have visited my clinic, please share your experience to help others in our community find the support they need.
                </p>
      <a className="mt-space-lg bg-primary text-background hover:bg-primary/15 hover:text-ink px-space-xl py-3 rounded-xl font-body text-sm shadow-sm transition-all duration-200" href="https://www.google.com/maps/place/?q=place_id:ChIJQZIX-9YhHxURS70aRcS1XBc" rel="noopener noreferrer" target="_blank">
                  Leave a Google review
                </a>
      </div>
      </div>
      </section>
      <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-margin lg:px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      <div className="lg:col-span-5 flex flex-col items-start">
      <h2 className="font-heading text-5xl text-ink">
                    Visit the clinic
                  </h2>
      <p className="mt-space-md font-body text-lg text-muted">
                    Located in the Noujoum center, Samqaniyeh. I am available for appointments on Mondays, Wednesdays, and Fridays.
                  </p>
      <a className="mt-space-lg bg-primary text-background hover:bg-primary/15 hover:text-ink px-space-xl py-3 rounded-xl font-body text-sm shadow-sm transition-all duration-200 inline-flex items-center gap-space-sm" href="https://www.google.com/maps/place/?q=place_id:ChIJQZIX-9YhHxURS70aRcS1XBc" rel="noopener noreferrer" target="_blank">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
      <span>Open in Google Maps</span>
      </a>
      </div>
      <div className="lg:col-span-7 w-full">
      <div className="w-full h-80 lg:h-96 rounded-full overflow-hidden shadow-sm bg-surface">
      <iframe className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=33.6761862,35.5915216&output=embed"></iframe>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
    </>
  );
}
