"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Icon } from "@/lib/icons";
import type { Leistung } from "@/lib/content";

export function Accordion({ items }: { items: Leistung[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-line">
      {items.map((it, i) => {
        const isOpen = i === open;
        return (
          <div key={it.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-6 text-left"
            >
              <span className="w-6 shrink-0 font-mono text-[12px] text-grey">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-blue-tint text-blue">
                <Icon name={it.icon} className="h-5 w-5" />
              </span>
              <span className="flex-1 text-[19px] font-bold text-ink md:text-[22px]">
                {it.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-grey-2 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="pb-9 md:pl-[60px]">
                <p className="max-w-[72ch] text-[16px] leading-relaxed text-ink-2">
                  {it.intro}
                </p>

                <div className="mt-7 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
                  <div>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-grey">
                      Umfang
                    </p>
                    <ul className="space-y-2.5">
                      {it.umfang.map((u) => (
                        <li
                          key={u}
                          className="flex gap-3 text-[15px] text-ink-2"
                        >
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-[3px] border-blue bg-surface p-6">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-blue">
                      Ergebnis
                    </p>
                    <p className="text-[15px] leading-relaxed text-ink">
                      {it.ergebnis}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
