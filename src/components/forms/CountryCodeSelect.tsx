"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { countries, Country, getCountry } from "@/data/countries";
import { detectCountry } from "@/lib/detectCountry";
import useClickOutside from "@/hooks/useClickOutside";

/**
 * Selected country for a phone field. Starts as the default (so server and
 * client HTML match), then switches to the visitor's detected country after
 * mount, unless the visitor has already picked one.
 */
export function useCountry() {
  const [country, setCountryState] = useState<Country>(() => getCountry(null));
  const touched = useRef(false);

  useEffect(() => {
    if (!touched.current) setCountryState(getCountry(detectCountry()));
  }, []);

  const setCountry = (c: Country) => {
    touched.current = true;
    setCountryState(c);
  };

  return [country, setCountry] as const;
}

/** Small lazy-loaded flag image (emoji flags don't render on Windows). */
export const Flag = ({ iso, name }: { iso: string; name?: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`https://flagcdn.com/w20/${iso}.png`}
    srcSet={`https://flagcdn.com/w40/${iso}.png 2x`}
    width={20}
    height={15}
    alt={name ? `${name} flag` : ""}
    loading="lazy"
    decoding="async"
    className="w-5 h-[15px] shrink-0 rounded-[2px] object-cover bg-gray-200"
  />
);

type Props = {
  value: Country;
  onChange: (c: Country) => void;
  /** Colour scheme of the surrounding field */
  variant?: "light" | "dark";
  /** Open the list above the button (e.g. in the chatbot footer) */
  placement?: "top" | "bottom";
  className?: string;
  id?: string;
};

const CountryCodeSelect = ({
  value,
  onChange,
  variant = "light",
  placement = "bottom",
  className = "",
  id,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useClickOutside(rootRef, () => open && setOpen(false));

  useEffect(() => {
    if (open) searchRef.current?.focus();
    else setQuery("");
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dial.startsWith(q) ||
        c.iso === q
    );
  }, [query]);

  const select = (c: Country) => {
    onChange(c);
    setOpen(false);
  };

  const dark = variant === "dark";

  return (
    <div
      ref={rootRef}
      className={`relative shrink-0 ${className}`}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${value.name} +${value.dial}`}
        className={`h-full flex items-center gap-1.5 px-2 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
          dark ? "text-white" : "text-[#333333]"
        }`}
      >
        <Flag iso={value.iso} />
        <span className="text-sm tabular-nums">+{value.dial}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute left-0 z-50 w-72 max-w-[80vw] bg-white text-black rounded-lg shadow-xl border border-gray-200 ${
            placement === "top" ? "bottom-full mb-1" : "top-full mt-1"
          }`}
        >
          <div className="p-2 border-b border-gray-100">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (filtered[0]) select(filtered[0]);
                }
              }}
              placeholder="Search country or code"
              aria-label="Search country or code"
              autoComplete="off"
              className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-secondary"
            />
          </div>
          <ul role="listbox" aria-label="Country codes" className="max-h-60 overflow-y-auto py-1">
            {filtered.map((c) => {
              const active = c.iso === value.iso;
              return (
                <li key={c.iso} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => select(c)}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${
                      active ? "font-semibold bg-gray-50" : ""
                    }`}
                  >
                    <Flag iso={c.iso} />
                    <span className="flex-1 truncate">{c.name}</span>
                    <span className="text-gray-500 tabular-nums">+{c.dial}</span>
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelect;
