"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { postContact } from "@/lib/postContact";

const DOMAIN = "oneshotmarketing";
/** Minimum gap between two submit attempts (guards double clicks / Enter spam) */
const RETRY_COOLDOWN_MS = 2000;
/** When not redirecting, how long the form stays locked after a successful lead */
const SUCCESS_LOCK_MS = 5000;

export type ContactPayload = {
  name: string;
  email: string;
  /** Already formatted with the dial code, e.g. "+91 9876543210" */
  phone: string;
  description: string;
  /** Any extra fields the contacts API accepts (check_in, created_from, ...) */
  extra?: Record<string, unknown>;
};

type Options = {
  /** Runs after a successful submit, before the redirect (e.g. close a popup) */
  onSuccess?: () => void;
  /** Where to go after a successful submit; null to stay on the page */
  redirectTo?: string | null;
};

/**
 * Submits any enquiry form on the site to the Eazotel contacts API.
 * The form validates its own fields, then calls `submit(payload)`;
 * this hook handles the request, loading state, errors and the redirect.
 *
 * Duplicate leads are blocked: a synchronous lock drops any submit fired
 * while one is in flight (React state alone is too slow for double clicks),
 * failed attempts have a short cooldown, and after a success the form stays
 * locked while the visitor is redirected.
 */
export default function useContactSubmit({
  onSuccess,
  redirectTo = "/thank-you",
}: Options = {}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lockRef = useRef(false);
  const lastAttemptRef = useRef(0);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    },
    []
  );

  const submit = useCallback(
    async ({ name, email, phone, description, extra }: ContactPayload) => {
      const now = Date.now();
      if (lockRef.current || now - lastAttemptRef.current < RETRY_COOLDOWN_MS) {
        return false; // a submit is already running, or the user just tried
      }
      lockRef.current = true;
      lastAttemptRef.current = now;
      setIsSubmitting(true);

      let ok = false;
      try {
        const data = await postContact({
          Domain: DOMAIN,
          Name: name.trim(),
          email: email.trim(),
          Contact: phone,
          Description: description,
          ...extra,
        });

        if (!data.Status) {
          alert("Submission failed. Please try again.");
          return false;
        }

        ok = true;
        setIsSubmitted(true);
        onSuccess?.();
        if (redirectTo) {
          router.push(redirectTo); // stay locked; the page is about to change
        } else {
          unlockTimer.current = setTimeout(() => {
            lockRef.current = false;
            setIsSubmitted(false);
          }, SUCCESS_LOCK_MS);
        }
        return true;
      } catch (error) {
        console.error("Contact form submission error:", error);
        alert("Something went wrong. Please try again later.");
        return false;
      } finally {
        if (!ok) lockRef.current = false;
        setIsSubmitting(false);
      }
    },
    [onSuccess, redirectTo, router]
  );

  return {
    submit,
    isSubmitting,
    /** True after a successful lead until the redirect (or the lock expires) */
    isSubmitted,
    /** Use for the submit button's `disabled` */
    isBusy: isSubmitting || isSubmitted,
  };
}
