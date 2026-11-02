import { SERVICE_AREAS, SITE, imgHero } from "../data";
import { SEO, useSeo } from "../seo";

export default function Home() {
  useSeo(SEO.home.title, SEO.home.description, SEO.home.keywords);

  return (
    <main className="container">
      <section className="hero">
        <div className="copy">
          <h1>Fast, Reliable Appliance Repair in {SITE.city}</h1>
          <p>
            Same-day and next-day appliance repair in Las Vegas for most calls. We fix refrigerators, washers, dryers,
            ovens, stoves, and dishwashers with honest diagnostics and clear pricing.
          </p>

          <ul className="bullets">
            <li><span className="dot" /><span><strong>Local & family-owned:</strong> service you can trust, backed by real people who live here.</span></li>
            <li><span className="dot" /><span><strong>Experienced techs:</strong> trained to diagnose quickly and fix it right the first time.</span></li>
            <li><span className="dot" /><span><strong>Explain before we repair:</strong> you’ll know the issue, the options, and the estimate.</span></li>
            <li><span className="dot" /><span><strong>Working hours:</strong> {SITE.hours}.</span></li>
          </ul>

          <div className="ctaRow">
            <a className="btn primary" href="#/contact">Request Service</a>
            <a className="btn secondary" href="#/services">View Services</a>
            <a className="btn secondary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
          </div>

          <div className="note">
            <strong>Need help today?</strong> Call <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> or send a request—our team will respond ASAP.
          </div>
        </div>

        <div className="heroArt">
          <img src={imgHero()} alt="Las Vegas skyline and appliance icons" />
        </div>
      </section>

      <div className="sectionTitle">
        <h2>Why Choose {SITE.name}?</h2>
        <p>Simple, professional, no surprises.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Clear Communication</h3>
          <p>We explain the problem in plain English and give you options before starting work.</p>
        </article>
        <article className="card">
          <h3>Respect for Your Home</h3>
          <p>Shoe covers, careful handling, and a clean workspace. We treat your home like it’s ours.</p>
        </article>
        <article className="card">
          <h3>Quality Parts & Workmanship</h3>
          <p>We use reliable replacement parts when available and stand behind our work.</p>
        </article>
      </section>

      <div className="sectionTitle">
        <h2>Appliance Repair Across the Las Vegas Valley</h2>
        <p>Local technicians serving {SERVICE_AREAS.join(", ")}.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Refrigerator & Freezer Repair</h3>
          <p>Fridge not cooling, leaking, or making noise? We repair refrigerators, freezers, and ice makers fast, before food spoils.</p>
        </article>
        <article className="card">
          <h3>Washer & Dryer Repair</h3>
          <p>Washers that won't spin or drain and dryers that won't heat. We repair all major laundry brands in your home.</p>
        </article>
        <article className="card">
          <h3>Oven, Stove & Dishwasher Repair</h3>
          <p>Ovens and ranges that won't heat, burners that won't light, and dishwashers that won't clean or drain.</p>
        </article>
      </section>
    </main>
  );
}
