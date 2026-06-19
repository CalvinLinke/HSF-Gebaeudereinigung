import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "link";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-blue px-6 py-3.5 font-semibold text-white hover:bg-blue-dark",
  secondary:
    "border-[1.5px] border-ink bg-white px-6 py-3.5 font-semibold text-ink hover:bg-ink hover:text-white",
  link: "font-semibold text-blue hover:gap-3",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type AsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", className = "", children } = props;
  const cls = `inline-flex items-center justify-center gap-2 text-[15px] transition-all ${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {variant === "link" && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={cls}
      >
        {inner}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as AsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}
