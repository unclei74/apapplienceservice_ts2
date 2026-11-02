import { SERVICES, SITE, imgService } from "../data";
import { SEO, useSeo } from "../seo";

export default function Services() {
  useSeo(SEO.services.title, SEO.services.description, SEO.services.keywords);

  return (
    <main className="container">
      <div className="sectionTitle">
        <h1>Appliance Repair Services in Las Vegas</h1>
        <p>Professional repair for the most common household appliances, in your home across the Las Vegas Valley.</p>
      </div>

      <section className="grid">
        {SERVICES.map((s) => (
          <article key={s.name} className="card">
            <div className="iconBox">
              <img src={imgService(s.file)} alt={s.alt} />
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <p>
              Diagnosis, parts replacement, and performance testing. Call us during <strong>{SITE.hours}</strong>.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
