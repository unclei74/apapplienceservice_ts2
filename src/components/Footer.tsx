import { SERVICE_AREAS, SITE } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <strong>{SITE.name}</strong> <span className="tiny">• {SITE.city}</span><br />
          <span className="tiny">
            Hours: {SITE.hours} • Phone: <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> • Email:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </span>
          <br />
          <span className="tiny">Appliance repair serving {SERVICE_AREAS.join(", ")}, NV</span>
        </div>
        <div className="tiny">© {year} {SITE.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
