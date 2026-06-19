"use client";

import { MapPin } from "lucide-react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { RegisterMarks } from "@/components/ui/RegisterMarks";
import { CONTACT } from "@/lib/content";

const QUERY = encodeURIComponent(`${CONTACT.street}, ${CONTACT.city}`);
const MAP_SRC = `https://www.google.com/maps?q=${QUERY}&output=embed`;

export function MapEmbed() {
  const { consent, accept } = useConsent();

  if (consent === "granted") {
    return (
      <div className="relative border border-line">
        <RegisterMarks color="border-blue" />
        <iframe
          title={`Standort der ${"HSF-Gebäudereinigung"} auf Google Maps`}
          src={MAP_SRC}
          className="block aspect-[4/3] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="placeholder-stripe relative flex aspect-[4/3] flex-col justify-end border border-line p-5">
      <RegisterMarks color="border-blue" />
      <div className="relative">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-grey-2">
          <MapPin className="h-4 w-4 text-blue" />
          Anfahrt · {CONTACT.street}
        </p>
        <p className="mt-2 max-w-[42ch] text-[13px] leading-relaxed text-grey-2">
          Die Google-Maps-Karte wird aus Datenschutzgründen erst nach Ihrer
          Zustimmung geladen.
        </p>
        <button
          type="button"
          onClick={accept}
          className="mt-3 inline-flex items-center gap-2 bg-blue px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-dark"
        >
          Karte laden
        </button>
      </div>
    </div>
  );
}
