export interface Country {
  iso: string;
  name: string;
  dial: string;
}

export const DEFAULT_COUNTRY_ISO = "us";

export const countries: Country[] = [
  { iso: "af", name: "Afghanistan", dial: "93" },
  { iso: "al", name: "Albania", dial: "355" },
  { iso: "dz", name: "Algeria", dial: "213" },
  { iso: "as", name: "American Samoa", dial: "1" },
  { iso: "ad", name: "Andorra", dial: "376" },
  { iso: "ao", name: "Angola", dial: "244" },
  { iso: "ai", name: "Anguilla", dial: "1" },
  { iso: "ag", name: "Antigua and Barbuda", dial: "1" },
  { iso: "ar", name: "Argentina", dial: "54" },
  { iso: "am", name: "Armenia", dial: "374" },
  { iso: "aw", name: "Aruba", dial: "297" },
  { iso: "au", name: "Australia", dial: "61" },
  { iso: "at", name: "Austria", dial: "43" },
  { iso: "az", name: "Azerbaijan", dial: "994" },
  { iso: "bs", name: "Bahamas", dial: "1" },
  { iso: "bh", name: "Bahrain", dial: "973" },
  { iso: "bd", name: "Bangladesh", dial: "880" },
  { iso: "bb", name: "Barbados", dial: "1" },
  { iso: "by", name: "Belarus", dial: "375" },
  { iso: "be", name: "Belgium", dial: "32" },
  { iso: "bz", name: "Belize", dial: "501" },
  { iso: "bj", name: "Benin", dial: "229" },
  { iso: "bm", name: "Bermuda", dial: "1" },
  { iso: "bt", name: "Bhutan", dial: "975" },
  { iso: "bo", name: "Bolivia", dial: "591" },
  { iso: "ba", name: "Bosnia and Herzegovina", dial: "387" },
  { iso: "bw", name: "Botswana", dial: "267" },
  { iso: "br", name: "Brazil", dial: "55" },
  { iso: "vg", name: "British Virgin Islands", dial: "1" },
  { iso: "bn", name: "Brunei", dial: "673" },
  { iso: "bg", name: "Bulgaria", dial: "359" },
  { iso: "bf", name: "Burkina Faso", dial: "226" },
  { iso: "bi", name: "Burundi", dial: "257" },
  { iso: "kh", name: "Cambodia", dial: "855" },
  { iso: "cm", name: "Cameroon", dial: "237" },
  { iso: "ca", name: "Canada", dial: "1" },
  { iso: "cv", name: "Cape Verde", dial: "238" },
  { iso: "ky", name: "Cayman Islands", dial: "1" },
  { iso: "cf", name: "Central African Republic", dial: "236" },
  { iso: "td", name: "Chad", dial: "235" },
  { iso: "cl", name: "Chile", dial: "56" },
  { iso: "cn", name: "China", dial: "86" },
  { iso: "co", name: "Colombia", dial: "57" },
  { iso: "km", name: "Comoros", dial: "269" },
  { iso: "cg", name: "Congo", dial: "242" },
  { iso: "cd", name: "Congo (DRC)", dial: "243" },
  { iso: "ck", name: "Cook Islands", dial: "682" },
  { iso: "cr", name: "Costa Rica", dial: "506" },
  { iso: "ci", name: "Côte d'Ivoire", dial: "225" },
  { iso: "hr", name: "Croatia", dial: "385" },
  { iso: "cu", name: "Cuba", dial: "53" },
  { iso: "cw", name: "Curaçao", dial: "599" },
  { iso: "cy", name: "Cyprus", dial: "357" },
  { iso: "cz", name: "Czechia", dial: "420" },
  { iso: "dk", name: "Denmark", dial: "45" },
  { iso: "dj", name: "Djibouti", dial: "253" },
  { iso: "dm", name: "Dominica", dial: "1" },
  { iso: "do", name: "Dominican Republic", dial: "1" },
  { iso: "ec", name: "Ecuador", dial: "593" },
  { iso: "eg", name: "Egypt", dial: "20" },
  { iso: "sv", name: "El Salvador", dial: "503" },
  { iso: "gq", name: "Equatorial Guinea", dial: "240" },
  { iso: "er", name: "Eritrea", dial: "291" },
  { iso: "ee", name: "Estonia", dial: "372" },
  { iso: "sz", name: "Eswatini", dial: "268" },
  { iso: "et", name: "Ethiopia", dial: "251" },
  { iso: "fo", name: "Faroe Islands", dial: "298" },
  { iso: "fj", name: "Fiji", dial: "679" },
  { iso: "fi", name: "Finland", dial: "358" },
  { iso: "fr", name: "France", dial: "33" },
  { iso: "gf", name: "French Guiana", dial: "594" },
  { iso: "pf", name: "French Polynesia", dial: "689" },
  { iso: "ga", name: "Gabon", dial: "241" },
  { iso: "gm", name: "Gambia", dial: "220" },
  { iso: "ge", name: "Georgia", dial: "995" },
  { iso: "de", name: "Germany", dial: "49" },
  { iso: "gh", name: "Ghana", dial: "233" },
  { iso: "gi", name: "Gibraltar", dial: "350" },
  { iso: "gr", name: "Greece", dial: "30" },
  { iso: "gl", name: "Greenland", dial: "299" },
  { iso: "gd", name: "Grenada", dial: "1" },
  { iso: "gp", name: "Guadeloupe", dial: "590" },
  { iso: "gu", name: "Guam", dial: "1" },
  { iso: "gt", name: "Guatemala", dial: "502" },
  { iso: "gn", name: "Guinea", dial: "224" },
  { iso: "gw", name: "Guinea-Bissau", dial: "245" },
  { iso: "gy", name: "Guyana", dial: "592" },
  { iso: "ht", name: "Haiti", dial: "509" },
  { iso: "hn", name: "Honduras", dial: "504" },
  { iso: "hk", name: "Hong Kong", dial: "852" },
  { iso: "hu", name: "Hungary", dial: "36" },
  { iso: "is", name: "Iceland", dial: "354" },
  { iso: "in", name: "India", dial: "91" },
  { iso: "id", name: "Indonesia", dial: "62" },
  { iso: "ir", name: "Iran", dial: "98" },
  { iso: "iq", name: "Iraq", dial: "964" },
  { iso: "ie", name: "Ireland", dial: "353" },
  { iso: "il", name: "Israel", dial: "972" },
  { iso: "it", name: "Italy", dial: "39" },
  { iso: "jm", name: "Jamaica", dial: "1" },
  { iso: "jp", name: "Japan", dial: "81" },
  { iso: "jo", name: "Jordan", dial: "962" },
  { iso: "kz", name: "Kazakhstan", dial: "7" },
  { iso: "ke", name: "Kenya", dial: "254" },
  { iso: "ki", name: "Kiribati", dial: "686" },
  { iso: "xk", name: "Kosovo", dial: "383" },
  { iso: "kw", name: "Kuwait", dial: "965" },
  { iso: "kg", name: "Kyrgyzstan", dial: "996" },
  { iso: "la", name: "Laos", dial: "856" },
  { iso: "lv", name: "Latvia", dial: "371" },
  { iso: "lb", name: "Lebanon", dial: "961" },
  { iso: "ls", name: "Lesotho", dial: "266" },
  { iso: "lr", name: "Liberia", dial: "231" },
  { iso: "ly", name: "Libya", dial: "218" },
  { iso: "li", name: "Liechtenstein", dial: "423" },
  { iso: "lt", name: "Lithuania", dial: "370" },
  { iso: "lu", name: "Luxembourg", dial: "352" },
  { iso: "mo", name: "Macau", dial: "853" },
  { iso: "mg", name: "Madagascar", dial: "261" },
  { iso: "mw", name: "Malawi", dial: "265" },
  { iso: "my", name: "Malaysia", dial: "60" },
  { iso: "mv", name: "Maldives", dial: "960" },
  { iso: "ml", name: "Mali", dial: "223" },
  { iso: "mt", name: "Malta", dial: "356" },
  { iso: "mh", name: "Marshall Islands", dial: "692" },
  { iso: "mq", name: "Martinique", dial: "596" },
  { iso: "mr", name: "Mauritania", dial: "222" },
  { iso: "mu", name: "Mauritius", dial: "230" },
  { iso: "yt", name: "Mayotte", dial: "262" },
  { iso: "mx", name: "Mexico", dial: "52" },
  { iso: "fm", name: "Micronesia", dial: "691" },
  { iso: "md", name: "Moldova", dial: "373" },
  { iso: "mc", name: "Monaco", dial: "377" },
  { iso: "mn", name: "Mongolia", dial: "976" },
  { iso: "me", name: "Montenegro", dial: "382" },
  { iso: "ms", name: "Montserrat", dial: "1" },
  { iso: "ma", name: "Morocco", dial: "212" },
  { iso: "mz", name: "Mozambique", dial: "258" },
  { iso: "mm", name: "Myanmar", dial: "95" },
  { iso: "na", name: "Namibia", dial: "264" },
  { iso: "nr", name: "Nauru", dial: "674" },
  { iso: "np", name: "Nepal", dial: "977" },
  { iso: "nl", name: "Netherlands", dial: "31" },
  { iso: "nc", name: "New Caledonia", dial: "687" },
  { iso: "nz", name: "New Zealand", dial: "64" },
  { iso: "ni", name: "Nicaragua", dial: "505" },
  { iso: "ne", name: "Niger", dial: "227" },
  { iso: "ng", name: "Nigeria", dial: "234" },
  { iso: "kp", name: "North Korea", dial: "850" },
  { iso: "mk", name: "North Macedonia", dial: "389" },
  { iso: "mp", name: "Northern Mariana Islands", dial: "1" },
  { iso: "no", name: "Norway", dial: "47" },
  { iso: "om", name: "Oman", dial: "968" },
  { iso: "pk", name: "Pakistan", dial: "92" },
  { iso: "pw", name: "Palau", dial: "680" },
  { iso: "ps", name: "Palestine", dial: "970" },
  { iso: "pa", name: "Panama", dial: "507" },
  { iso: "pg", name: "Papua New Guinea", dial: "675" },
  { iso: "py", name: "Paraguay", dial: "595" },
  { iso: "pe", name: "Peru", dial: "51" },
  { iso: "ph", name: "Philippines", dial: "63" },
  { iso: "pl", name: "Poland", dial: "48" },
  { iso: "pt", name: "Portugal", dial: "351" },
  { iso: "pr", name: "Puerto Rico", dial: "1" },
  { iso: "qa", name: "Qatar", dial: "974" },
  { iso: "re", name: "Réunion", dial: "262" },
  { iso: "ro", name: "Romania", dial: "40" },
  { iso: "ru", name: "Russia", dial: "7" },
  { iso: "rw", name: "Rwanda", dial: "250" },
  { iso: "kn", name: "Saint Kitts and Nevis", dial: "1" },
  { iso: "lc", name: "Saint Lucia", dial: "1" },
  { iso: "vc", name: "Saint Vincent and the Grenadines", dial: "1" },
  { iso: "ws", name: "Samoa", dial: "685" },
  { iso: "sm", name: "San Marino", dial: "378" },
  { iso: "st", name: "São Tomé and Príncipe", dial: "239" },
  { iso: "sa", name: "Saudi Arabia", dial: "966" },
  { iso: "sn", name: "Senegal", dial: "221" },
  { iso: "rs", name: "Serbia", dial: "381" },
  { iso: "sc", name: "Seychelles", dial: "248" },
  { iso: "sl", name: "Sierra Leone", dial: "232" },
  { iso: "sg", name: "Singapore", dial: "65" },
  { iso: "sx", name: "Sint Maarten", dial: "1" },
  { iso: "sk", name: "Slovakia", dial: "421" },
  { iso: "si", name: "Slovenia", dial: "386" },
  { iso: "sb", name: "Solomon Islands", dial: "677" },
  { iso: "so", name: "Somalia", dial: "252" },
  { iso: "za", name: "South Africa", dial: "27" },
  { iso: "kr", name: "South Korea", dial: "82" },
  { iso: "ss", name: "South Sudan", dial: "211" },
  { iso: "es", name: "Spain", dial: "34" },
  { iso: "lk", name: "Sri Lanka", dial: "94" },
  { iso: "sd", name: "Sudan", dial: "249" },
  { iso: "sr", name: "Suriname", dial: "597" },
  { iso: "se", name: "Sweden", dial: "46" },
  { iso: "ch", name: "Switzerland", dial: "41" },
  { iso: "sy", name: "Syria", dial: "963" },
  { iso: "tw", name: "Taiwan", dial: "886" },
  { iso: "tj", name: "Tajikistan", dial: "992" },
  { iso: "tz", name: "Tanzania", dial: "255" },
  { iso: "th", name: "Thailand", dial: "66" },
  { iso: "tl", name: "Timor-Leste", dial: "670" },
  { iso: "tg", name: "Togo", dial: "228" },
  { iso: "to", name: "Tonga", dial: "676" },
  { iso: "tt", name: "Trinidad and Tobago", dial: "1" },
  { iso: "tn", name: "Tunisia", dial: "216" },
  { iso: "tr", name: "Turkey", dial: "90" },
  { iso: "tm", name: "Turkmenistan", dial: "993" },
  { iso: "tc", name: "Turks and Caicos Islands", dial: "1" },
  { iso: "tv", name: "Tuvalu", dial: "688" },
  { iso: "vi", name: "U.S. Virgin Islands", dial: "1" },
  { iso: "ug", name: "Uganda", dial: "256" },
  { iso: "ua", name: "Ukraine", dial: "380" },
  { iso: "ae", name: "United Arab Emirates", dial: "971" },
  { iso: "gb", name: "United Kingdom", dial: "44" },
  { iso: "us", name: "United States", dial: "1" },
  { iso: "uy", name: "Uruguay", dial: "598" },
  { iso: "uz", name: "Uzbekistan", dial: "998" },
  { iso: "vu", name: "Vanuatu", dial: "678" },
  { iso: "va", name: "Vatican City", dial: "39" },
  { iso: "ve", name: "Venezuela", dial: "58" },
  { iso: "vn", name: "Vietnam", dial: "84" },
  { iso: "ye", name: "Yemen", dial: "967" },
  { iso: "zm", name: "Zambia", dial: "260" },
  { iso: "zw", name: "Zimbabwe", dial: "263" },
];

const byIso = new Map(countries.map((c) => [c.iso, c]));

export const getCountry = (iso: string | null | undefined): Country =>
  byIso.get((iso || "").toLowerCase()) ?? byIso.get(DEFAULT_COUNTRY_ISO)!;

const PHONE_LENGTHS: Record<string, [number, number]> = {
  af: [9, 9], al: [8, 9], dz: [8, 9], ad: [6, 9], ao: [9, 9], ar: [10, 11],
  am: [8, 8], aw: [7, 7], au: [9, 9], at: [7, 13], az: [9, 9], bh: [8, 8],
  bd: [8, 10], by: [9, 9], be: [8, 9], bz: [7, 7], bj: [8, 10], bt: [7, 8],
  bo: [8, 8], ba: [8, 9], bw: [7, 8], br: [10, 11], bn: [7, 7], bg: [7, 9],
  bf: [8, 8], bi: [8, 8], kh: [8, 9], cm: [9, 9], cv: [7, 7], cf: [8, 8],
  td: [8, 8], cl: [9, 9], cn: [10, 11], co: [10, 10], km: [7, 7], cg: [9, 9],
  cd: [9, 9], ck: [5, 5], cr: [8, 8], ci: [10, 10], hr: [8, 9], cu: [8, 8],
  cw: [7, 8], cy: [8, 8], cz: [9, 9], dk: [8, 8], dj: [8, 8], ec: [8, 9],
  eg: [9, 10], sv: [8, 8], gq: [9, 9], er: [7, 7], ee: [7, 8], sz: [8, 8],
  et: [9, 9], fo: [6, 6], fj: [7, 7], fi: [6, 10], fr: [9, 9], gf: [9, 9],
  pf: [8, 8], ga: [7, 8], gm: [7, 7], ge: [9, 9], de: [6, 11], gh: [9, 9],
  gi: [8, 8], gr: [10, 10], gl: [6, 6], gp: [9, 9], gt: [8, 8], gn: [9, 9],
  gw: [9, 9], gy: [7, 7], ht: [8, 8], hn: [8, 8], hk: [8, 8], hu: [8, 9],
  is: [7, 7], in: [10, 10], id: [9, 12], ir: [10, 10], iq: [10, 10],
  ie: [7, 9], il: [8, 9], it: [6, 11], jp: [9, 10], jo: [8, 9], kz: [10, 10],
  ke: [9, 9], ki: [8, 8], xk: [8, 8], kw: [8, 8], kg: [9, 9], la: [8, 10],
  lv: [8, 8], lb: [7, 8], ls: [8, 8], lr: [7, 9], ly: [9, 9], li: [7, 7],
  lt: [8, 8], lu: [6, 9], mo: [8, 8], mg: [9, 9], mw: [7, 9], my: [9, 10],
  mv: [7, 7], ml: [8, 8], mt: [8, 8], mh: [7, 7], mq: [9, 9], mr: [8, 8],
  mu: [7, 8], yt: [9, 9], mx: [10, 10], fm: [7, 7], md: [8, 8], mc: [8, 9],
  mn: [8, 8], me: [8, 8], ma: [9, 9], mz: [8, 9], mm: [8, 10], na: [8, 9],
  nr: [7, 7], np: [8, 10], nl: [9, 9], nc: [6, 6], nz: [8, 10], ni: [8, 8],
  ne: [8, 8], ng: [8, 10], kp: [8, 10], mk: [8, 8], no: [8, 8], om: [8, 8],
  pk: [9, 10], pw: [7, 7], ps: [9, 9], pa: [7, 8], pg: [7, 8], py: [9, 9],
  pe: [8, 9], ph: [8, 10], pl: [9, 9], pt: [9, 9], qa: [8, 8], re: [9, 9],
  ro: [9, 9], ru: [10, 10], rw: [9, 9], ws: [5, 7], sm: [6, 10], st: [7, 7],
  sa: [9, 9], sn: [9, 9], rs: [8, 10], sc: [7, 7], sl: [8, 8], sg: [8, 8],
  sk: [9, 9], si: [8, 8], sb: [7, 7], so: [7, 9], za: [9, 9], kr: [8, 10],
  ss: [9, 9], es: [9, 9], lk: [9, 9], sd: [9, 9], sr: [6, 7], se: [7, 9],
  ch: [9, 9], sy: [8, 9], tw: [8, 9], tj: [9, 9], tz: [9, 9], th: [8, 9],
  tl: [7, 8], tg: [8, 8], to: [5, 7], tn: [8, 8], tr: [10, 10], tm: [8, 8],
  tv: [5, 6], ug: [9, 9], ua: [9, 9], ae: [8, 9], gb: [9, 10], uy: [8, 8],
  uz: [9, 9], vu: [5, 7], va: [6, 11], ve: [10, 10], vn: [9, 10],
  ye: [7, 9], zm: [9, 9], zw: [9, 9],
};

const KEEPS_LEADING_ZERO = new Set(["it", "va", "sm", "ci", "ga", "cg"]);

export const sanitizePhoneInput = (value: string) =>
  value.replace(/\D/g, "").slice(0, 15);

export const getPhoneLength = (country: Country): [number, number] =>
  country.dial === "1"
    ? [10, 10]
    : PHONE_LENGTHS[country.iso] ?? [6, 15 - country.dial.length];

export const describePhoneLength = (country: Country) => {
  const [min, max] = getPhoneLength(country);
  if (min === max) return `${min}-digit`;
  if (max - min === 1) return `${min}- or ${max}-digit`;
  return `${min} to ${max} digit`;
};

export const normalizePhone = (country: Country, input: string) => {
  const digits = input.replace(/\D/g, "");
  const [min, max] = getPhoneLength(country);
  const fits = (n: string) => n.length >= min && n.length <= max;
  if (fits(digits)) return digits;

  if (digits.startsWith(country.dial)) {
    const rest = digits.slice(country.dial.length);
    if (fits(rest)) return rest;
  }
  if (digits.startsWith("0") && !KEEPS_LEADING_ZERO.has(country.iso)) {
    const rest = digits.replace(/^0+/, "");
    if (fits(rest)) return rest;
  }
  return digits;
};

export const isValidPhone = (country: Country, input: string) => {
  const national = normalizePhone(country, input);
  const [min, max] = getPhoneLength(country);
  return national.length >= min && national.length <= max;
};

export const getPhoneError = (country: Country, input: string) => {
  if (!input.replace(/\D/g, "")) return "Please enter your phone number.";
  if (isValidPhone(country, input)) return "";
  return `Please enter a valid ${describePhoneLength(country)} phone number for ${country.name}.`;
};

export const formatPhone = (country: Country, input: string) =>
  `+${country.dial} ${normalizePhone(country, input)}`;

const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i;

export const getEmailError = (email: string) => {
  const v = email.trim();
  if (!v) return "Please enter your email address.";
  if (!EMAIL_RE.test(v)) return "Please enter a valid email address (e.g. name@company.com).";
  return "";
};

export const getNameError = (name: string) => {
  const v = name.trim();
  if (!v) return "Please enter your name.";
  if (v.length < 2) return "Please enter your full name.";
  if (!/[A-Za-zÀ-￿]/.test(v)) return "Please enter a valid name.";
  return "";
};
