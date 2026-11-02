import { useEffect } from "react";

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function useSeo(title: string, description: string, keywords: readonly string[]) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("keywords", keywords.join(", "));
  }, [title, description, keywords]);
}

export const SEO = {
  home: {
    title: "Appliance Repair Las Vegas, NV | Same-Day Service | AP Appliance Service",
    description:
      "Family-owned appliance repair in Las Vegas, Henderson & Summerlin. Same-day refrigerator, washer, dryer, oven & dishwasher repair. Call for an appointment.",
    keywords: [
      "appliance repair Las Vegas",
      "appliance repair Las Vegas NV",
      "same day appliance repair Las Vegas",
      "appliance repair near me",
      "appliance repair Henderson NV",
      "appliance repair Summerlin",
      "local appliance repair Las Vegas",
    ],
  },
  services: {
    title: "Refrigerator, Washer, Dryer & Oven Repair in Las Vegas | AP Appliance Service",
    description:
      "Refrigerator, washer, dryer, dishwasher, oven, stove, freezer, microwave and ice maker repair in Las Vegas, NV. Honest diagnostics and clear pricing.",
    keywords: [
      "refrigerator repair Las Vegas",
      "washer repair Las Vegas",
      "dryer repair Las Vegas",
      "dishwasher repair Las Vegas",
      "oven repair Las Vegas",
      "stove repair Las Vegas",
      "freezer repair Las Vegas",
      "microwave repair Las Vegas",
      "ice maker repair Las Vegas",
      "refrigerator not cooling Las Vegas",
    ],
  },
  brands: {
    title: "Samsung, LG, GE, Whirlpool & Sub-Zero Repair in Las Vegas | AP Appliance Service",
    description:
      "We repair Samsung, LG, GE, Whirlpool, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Wolf, Thermador and more in Las Vegas, NV.",
    keywords: [
      "Samsung appliance repair Las Vegas",
      "LG appliance repair Las Vegas",
      "GE appliance repair Las Vegas",
      "Whirlpool appliance repair Las Vegas",
      "Sub-Zero repair Las Vegas",
      "Viking appliance repair Las Vegas",
      "Bosch dishwasher repair Las Vegas",
    ],
  },
  about: {
    title: "About Us | Family-Owned Appliance Repair in Las Vegas | AP Appliance Service",
    description:
      "AP Appliance Service is a local, family-owned appliance repair company serving Las Vegas, Henderson, Summerlin, North Las Vegas and Spring Valley.",
    keywords: [
      "family owned appliance repair Las Vegas",
      "appliance repair technician Las Vegas",
      "appliance repair North Las Vegas",
      "appliance repair Spring Valley NV",
    ],
  },
  contact: {
    title: "Schedule Appliance Repair in Las Vegas | Contact AP Appliance Service",
    description:
      "Request appliance repair in Las Vegas, NV. Call or send us your appliance type, brand and symptoms and we'll get back to you quickly.",
    keywords: ["schedule appliance repair Las Vegas", "appliance repair appointment Las Vegas"],
  },
} as const;
