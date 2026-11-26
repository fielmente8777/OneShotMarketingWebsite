"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { postContact } from "@/lib/postContact";

const DOMAIN = "oneshotmarketing";
const RETRY_COOLDOWN_MS = 2000;
const SUCCESS_LOCK_MS = 5000;

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  description: string;
  extra?: Record<string, unknown>;
};

type Options = {
  onSuccess?: () => void;
  redirectTo?: string | null;
};

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
    isSubmitted,
    isBusy: isSubmitting || isSubmitted,
  };
}
