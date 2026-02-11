import { BRANDS, imgBrand } from "../data";

export default function Brands() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Brands We Service</h2>
        <p>We service many major appliance brands. If you don’t see yours, ask—we likely service it.</p>
      </div>

      <section className="brandGrid">
        {BRANDS.map((b) => (
          <div key={b.name} className="brandTile">
            <img src={imgBrand(b.file)} alt={b.name} />
            <span>{b.name}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
