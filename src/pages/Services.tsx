import { SERVICES, imgService } from "../data";

export default function Services() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Services</h2>
        <p>Professional Appliance Repair for the most common household units.</p>
      </div>

      <section className="grid">
        {SERVICES.map((s) => (
          <article key={s.name} className="card">
            <div className="iconBox">
              <img src={imgService(s.file)} alt={s.alt} />
            </div>
            <h3>{s.name}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}