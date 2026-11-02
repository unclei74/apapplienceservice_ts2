// src/data.ts
export const SITE = {
  name: "AP Appliance Service",
  city: "Las Vegas, NV",
  phone: "123-456-7890",
  phoneTel: "1234567890",
  email: "service@apapplianceservice.com",
  hours: "Mon–Sat 8:00 AM – 5:00 PM",
} as const;

// This helps images work across Cloudflare/GitHub Pages depending on your Vite base:
export const BASE = import.meta.env.BASE_URL;

export const SERVICE_AREAS = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "North Las Vegas",
  "Spring Valley",
  "Enterprise",
  "Paradise",
] as const;

// Services (explicit files = no guessing)
export const SERVICES = [
  {
    name: "Washing Machines",
    file: "washer.svg",
    alt: "Washing machine repair in Las Vegas",
    desc: "Washer repair in Las Vegas for machines that won't spin, won't drain, leak, or shake. Front-load and top-load washers.",
  },
  {
    name: "Dryers",
    file: "dryer.svg",
    alt: "Dryer repair in Las Vegas",
    desc: "Dryer repair for gas and electric dryers that won't heat, take too long to dry, squeal, or won't start.",
  },
  {
    name: "Ovens",
    file: "oven.svg",
    alt: "Oven repair in Las Vegas",
    desc: "Oven repair for ovens that won't heat, heat unevenly, or show error codes, including wall ovens and range ovens.",
  },
  {
    name: "Refrigerators",
    file: "fridge.svg",
    alt: "Refrigerator repair in Las Vegas",
    desc: "Refrigerator repair in Las Vegas for fridges that aren't cooling, are leaking water, or making loud noises. Built-in and French-door models.",
  },
  {
    name: "Dishwashers",
    file: "dishwasher.svg",
    alt: "Dishwasher repair in Las Vegas",
    desc: "Dishwasher repair for units that won't drain, leave dishes dirty, leak, or won't start.",
  },
  {
    name: "Freezers",
    file: "freezer.svg",
    alt: "Freezer repair in Las Vegas",
    desc: "Freezer repair for upright and chest freezers that aren't freezing, frost up, or run constantly.",
  },
  {
    name: "Microwaves",
    file: "microwave.svg",
    alt: "Microwave repair in Las Vegas",
    desc: "Over-the-range and built-in microwave repair for units that won't heat, spark, or won't turn on.",
  },
  {
    name: "Ice Makers",
    file: "icemaker.svg",
    alt: "Ice maker repair in Las Vegas",
    desc: "Ice maker repair when your refrigerator ice maker stops making ice, leaks, or makes small or hollow cubes.",
  },
  {
    name: "Stoves",
    file: "stove.svg",
    alt: "Stove and range repair in Las Vegas",
    desc: "Stove, range, and cooktop repair for burners that won't light or heat, gas or electric.",
  },
] as const;

// Brands (explicit mapping so filenames always match)
export const BRANDS = [
  { name: "Amana", file: "amana.svg" },
  { name: "Admiral", file: "admiral.svg" },
  { name: "Bosch", file: "bosch.svg" },
  { name: "Frigidaire", file: "frigidaire.svg" },
  { name: "Whirlpool", file: "whirlpool.svg" },
  { name: "KitchenAid", file: "kitchenaid.svg" },
  { name: "Samsung", file: "samsung.svg" },
  { name: "LG", file: "lg.svg" },
  { name: "GE", file: "ge.svg" },
  { name: "Viking", file: "viking.svg" },
  { name: "Sub Zero", file: "sub_zero.svg" },
  { name: "Thermador", file: "thermador.svg" },
  { name: "Kenmore", file: "kenmore.svg" },
  { name: "Electrolux", file: "electrolux.svg" },
  { name: "Maytag", file: "maytag.svg" },
  { name: "Miele", file: "miele.svg" },
  { name: "Magic Chef", file: "magic_chef.svg" },
  { name: "Dacor", file: "dacor.svg" },
  { name: "Wolf", file: "wolf.svg" },
] as const;

export const imgService = (file: string) => `${BASE}services/${file}`;
export const imgBrand = (file: string) => `${BASE}brands/${file}`;
export const imgLogo = () => `${BASE}logo.svg`;
export const imgHero = () => `${BASE}hero.svg`;