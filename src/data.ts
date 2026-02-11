export const SITE = {
  name: "AP Appliance Service",
  city: "Las Vegas, NV",
  phone: "123-456-7890",
  phoneTel: "1234567890",
  email: "service@applianceservice.com",
  hours: "Mon–Sat 8:00 AM – 5:00 PM",
} as const;

const BASE = import.meta.env.BASE_URL; // IMPORTANT ✅

export const SERVICES = [
  { name: "Washing Machines", img: `${BASE}services/washer.svg`, alt: "Washing machine repair" },
  { name: "Dryers", img: `${BASE}services/dryer.svg`, alt: "Dryer repair" },
  { name: "Ovens", img: `${BASE}services/oven.svg`, alt: "Oven repair" },
  { name: "Refrigerators", img: `${BASE}services/fridge.svg`, alt: "Refrigerator repair" },
  { name: "Dishwashers", img: `${BASE}services/dishwasher.svg`, alt: "Dishwasher repair" },
  { name: "Freezers", img: `${BASE}services/freezer.svg`, alt: "Freezer repair" },
  { name: "Microwaves", img: `${BASE}services/microwave.svg`, alt: "Microwave repair" },
  { name: "Ice Makers", img: `${BASE}services/icemaker.svg`, alt: "Ice maker repair" },
  { name: "Stoves", img: `${BASE}services/stove.svg`, alt: "Stove repair" },
] as const;

export const BRANDS = [
  "Amana","Admiral","Bosch","Frigidaire","Whirlpool","KitchenAid","Samsung","LG","GE","Viking",
  "Sub Zero","Thermador","Kenmore","Electrolux","Maytag","Miele","Magic Chef","Dacor","Wolf",
] as const;

// helper for brand image path ✅
export function brandImg(brand: string) {
  return `${BASE}brands/${brand.toLowerCase().replaceAll(" ", "_")}.svg`;
}