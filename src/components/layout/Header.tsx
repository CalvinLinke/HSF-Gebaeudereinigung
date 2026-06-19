"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV, CONTACT, type NavKey } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Header({ active = "" }: { active?: NavKey | "" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Mono-Utility-Leiste */}
      <div className="hidden bg-ink text-white lg:block">
        <Container className="flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
          <span className="text-grey">
            Dresden und Umgebung · Familienbetrieb seit 1988
          </span>
          <span className="flex items-center gap-6">
            <a
              href={CONTACT.phoneHref}
              className="text-grey transition-colors hover:text-white"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="text-grey transition-colors hover:text-white"
            >
              {CONTACT.email}
            </a>
          </span>
        </Container>
      </div>

      {/* Hauptleiste */}
      <div className="border-b border-line bg-white">
        <Container className="flex h-[74px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden h-full items-center gap-8 lg:flex">
            {NAV.map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative inline-flex h-full items-center text-[15px] font-medium transition-colors ${
                    isActive ? "text-ink" : "text-grey-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/kontakt">Angebot anfragen</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            className="grid h-11 w-11 place-items-center text-ink lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </Container>
      </div>

      {/* Mobil-Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex h-[74px] items-center justify-between border-b border-line px-6">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="grid h-11 w-11 place-items-center text-ink"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-4 text-2xl font-bold ${
                  item.key === active ? "text-blue" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-line px-6 py-6">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 font-mono text-[15px] text-ink"
            >
              <Phone className="h-5 w-5 text-blue" />
              {CONTACT.phone}
            </a>
            <Button href="/kontakt" className="w-full">
              Angebot anfragen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
