import { countries, DEFAULT_COUNTRY_ISO } from "@/data/countries";

/**
 * Best-guess visitor country, computed on the device (no network request):
 *   1. IANA timezone (e.g. "America/Toronto" -> "ca", "Asia/Kolkata" -> "in")
 *   2. Region of the browser language (e.g. "fr-CA" -> "ca")
 *   3. DEFAULT_COUNTRY_ISO ("us")
 * The result is cached for the page lifetime, so every form shares it.
 */

// Timezone -> country, grouped by country to keep the source small.
const ZONES: Record<string, string> = {
  us: "New_York Chicago Denver Los_Angeles Phoenix Anchorage Detroit Boise Adak Juneau Sitka Nome Yakutat Metlakatla Menominee Honolulu",
  ca: "Toronto Montreal Vancouver Edmonton Winnipeg Halifax St_Johns Regina Moncton Glace_Bay Goose_Bay Whitehorse Dawson Dawson_Creek Fort_Nelson Creston Iqaluit Rankin_Inlet Resolute Cambridge_Bay Inuvik Yellowknife Swift_Current Thunder_Bay Nipigon Rainy_River Atikokan Blanc-Sablon Pangnirtung",
  in: "Kolkata Calcutta",
  cn: "Shanghai Chongqing Chungking Harbin Urumqi Kashgar",
  mx: "Mexico_City Cancun Merida Monterrey Matamoros Chihuahua Ciudad_Juarez Ojinaga Mazatlan Bahia_Banderas Hermosillo Tijuana",
  br: "Sao_Paulo Rio_Branco Manaus Belem Fortaleza Recife Bahia Maceio Cuiaba Campo_Grande Porto_Velho Boa_Vista Araguaina Santarem Noronha Eirunepe",
  au: "Sydney Melbourne Brisbane Perth Adelaide Hobart Darwin Lord_Howe Broken_Hill Lindeman Eucla",
  gb: "London Belfast",
  ie: "Dublin",
  fr: "Paris",
  de: "Berlin Busingen",
  es: "Madrid Canary Ceuta",
  it: "Rome",
  nl: "Amsterdam",
  be: "Brussels",
  ch: "Zurich",
  at: "Vienna",
  se: "Stockholm",
  no: "Oslo",
  dk: "Copenhagen",
  fi: "Helsinki",
  pl: "Warsaw",
  pt: "Lisbon Azores Madeira",
  gr: "Athens",
  tr: "Istanbul",
  ru: "Moscow Kaliningrad Samara Yekaterinburg Omsk Novosibirsk Krasnoyarsk Irkutsk Yakutsk Vladivostok Magadan Kamchatka",
  ua: "Kyiv Kiev",
  ae: "Dubai",
  sa: "Riyadh",
  qa: "Qatar",
  kw: "Kuwait",
  bh: "Bahrain",
  om: "Muscat",
  il: "Jerusalem Tel_Aviv",
  pk: "Karachi",
  bd: "Dhaka",
  lk: "Colombo",
  np: "Kathmandu Katmandu",
  sg: "Singapore",
  my: "Kuala_Lumpur Kuching",
  id: "Jakarta Pontianak Makassar Jayapura",
  th: "Bangkok",
  vn: "Ho_Chi_Minh Saigon",
  ph: "Manila",
  jp: "Tokyo",
  kr: "Seoul",
  hk: "Hong_Kong",
  tw: "Taipei",
  nz: "Auckland Chatham",
  za: "Johannesburg",
  ng: "Lagos",
  ke: "Nairobi",
  eg: "Cairo",
  ma: "Casablanca",
  ar: "Buenos_Aires Cordoba",
  cl: "Santiago",
  co: "Bogota",
  pe: "Lima",
};

const PREFIXES: [string, string][] = [
  ["America/Indiana/", "us"],
  ["America/Kentucky/", "us"],
  ["America/North_Dakota/", "us"],
  ["America/Argentina/", "ar"],
  ["US/", "us"],
  ["Canada/", "ca"],
  ["Australia/", "au"],
  ["Brazil/", "br"],
  ["Mexico/", "mx"],
];

let zoneMap: Map<string, string> | null = null;
let cached: string | null = null;

const fromTimezone = (tz: string): string | null => {
  for (const [prefix, iso] of PREFIXES) if (tz.startsWith(prefix)) return iso;
  if (!zoneMap) {
    zoneMap = new Map();
    for (const iso in ZONES)
      for (const city of ZONES[iso].split(" ")) zoneMap.set(city, iso);
  }
  const city = tz.slice(tz.lastIndexOf("/") + 1);
  return zoneMap.get(city) ?? null;
};

const supported = (iso: string | null | undefined) =>
  !!iso && countries.some((c) => c.iso === iso);

export function detectCountry(): string {
  if (cached) return cached;
  if (typeof window === "undefined") return DEFAULT_COUNTRY_ISO;

  let iso: string | null = null;
  try {
    iso = fromTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
  } catch {}

  if (!supported(iso)) {
    iso = null;
    for (const lang of navigator.languages || [navigator.language]) {
      const region = lang.split("-")[1];
      if (region && region.length === 2 && supported(region.toLowerCase())) {
        iso = region.toLowerCase();
        break;
      }
    }
  }

  cached = supported(iso) ? iso! : DEFAULT_COUNTRY_ISO;
  return cached;
}
