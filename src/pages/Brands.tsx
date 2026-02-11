import { BRANDS, brandImg } from "../data";

export default function Brands() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Brands We Service</h2>
        <p>We service many major appliance brands. If you don’t see yours, ask—we likely service it.</p>
      </div>

      <section className="brandGrid">
        {BRANDS.map((b) => (
          <div key={b} className="brandTile">
            <img src={brandImg(b)} alt={b} />
            <span>{b}</span>
          </div>
        ))}
      </section>
    </main>
  );
}