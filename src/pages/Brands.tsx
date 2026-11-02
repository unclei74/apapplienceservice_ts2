import { BRANDS, imgBrand } from "../data";
import { SEO, useSeo } from "../seo";

export default function Brands() {
  useSeo(SEO.brands.title, SEO.brands.description, SEO.brands.keywords);

  return (
    <main className="container">
      <div className="sectionTitle">
        <h1>Appliance Brands We Repair in Las Vegas</h1>
        <p>We service many major appliance brands. If you don’t see yours, ask—we likely service it.</p>
      </div>

      <section className="brandGrid">
        {BRANDS.map((b) => (
          <div key={b.name} className="brandTile">
            <img src={imgBrand(b.file)} alt={`${b.name} appliance repair in Las Vegas`} />
            <span>{b.name}</span>
          </div>
        ))}
      </section>

      <div className="sectionTitle">
        <h2>Everyday and Luxury Brands</h2>
        <p>From popular brands to high-end built-ins.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Samsung, LG & GE Repair</h3>
          <p>Refrigerator, washer, dryer, and range repair for Samsung, LG, and GE appliances, including ice maker and error-code problems.</p>
        </article>
        <article className="card">
          <h3>Whirlpool, Maytag & KitchenAid Repair</h3>
          <p>Whirlpool, Maytag, KitchenAid, Kenmore, Amana, and Frigidaire repair for laundry and kitchen appliances.</p>
        </article>
        <article className="card">
          <h3>Sub-Zero, Viking, Wolf & Thermador Repair</h3>
          <p>Careful repair for high-end built-in refrigerators, ranges, and cooktops from Sub-Zero, Viking, Wolf, Thermador, Dacor, Miele, and Bosch.</p>
        </article>
      </section>
    </main>
  );
}
