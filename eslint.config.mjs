import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["src/components/analytics/DeferredAnalytics.tsx"],
    rules: { "prefer-rest-params": "off" },
  },
  {
    files: ["src/components/forms/CountryCodeSelect.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
];

export default eslintConfig;
