import type { ReactNode } from "react";
import type { NavKey } from "@/lib/content";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({
  active = "",
  children,
}: {
  active?: NavKey | "";
  children: ReactNode;
}) {
  return (
    <>
      <Header active={active} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
