"use client";
import { useEffect } from "react";

const GA_ID = "G-96F5G7J5CW";
const GTM_ID = "GTM-T428S42K";
// Fallback: load analytics this long after the page finished loading even if
// the visitor never interacts, so pageviews from passive visitors are kept.
const FALLBACK_DELAY_MS = 10000;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __analyticsLoaded?: boolean;
  }
}

function injectScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadAnalytics() {
  if (window.__analyticsLoaded) return;
  window.__analyticsLoaded = true;

  // Google Analytics (gtag.js)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);

  // Google Tag Manager
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
}

/**
 * Loads Google Analytics + Google Tag Manager after the first user
 * interaction (or a fallback delay after page load) so these heavy
 * third-party scripts never compete with the initial render.
 */
const DeferredAnalytics = () => {
  useEffect(() => {
    if (window.__analyticsLoaded) return;

    const events = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"];
    let timer: ReturnType<typeof setTimeout> | undefined;

    const trigger = () => {
      cleanup();
      loadAnalytics();
    };
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      window.removeEventListener("load", startFallback);
      if (timer) clearTimeout(timer);
    };
    const startFallback = () => {
      timer = setTimeout(trigger, FALLBACK_DELAY_MS);
    };

    events.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    );
    if (document.readyState === "complete") startFallback();
    else window.addEventListener("load", startFallback);

    return cleanup;
  }, []);

  return null;
};

export default DeferredAnalytics;
