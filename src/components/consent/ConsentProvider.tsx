"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Consent = "granted" | "denied" | null;

type ConsentContextValue = {
  consent: Consent;
  ready: boolean;
  accept: () => void;
  decline: () => void;
  reset: () => void;
};

const KEY = "hsf:cookie-consent";
const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      /* localStorage nicht verfügbar */
    }
    setReady(true);
  }, []);

  function persist(value: Consent) {
    setConsent(value);
    try {
      if (value) localStorage.setItem(KEY, value);
      else localStorage.removeItem(KEY);
    } catch {
      /* ignorieren */
    }
  }

  return (
    <ConsentContext.Provider
      value={{
        consent,
        ready,
        accept: () => persist("granted"),
        decline: () => persist("denied"),
        reset: () => persist(null),
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent muss innerhalb von ConsentProvider genutzt werden");
  }
  return ctx;
}
