// Mappt die Icon-Namen aus content.ts auf lucide-react Komponenten.
// Verwendung:
//   import { Icon } from "@/lib/icons";
//   <Icon name={leistung.icon} className="h-6 w-6" />
import {
  Building2, Building, Stethoscope, Briefcase, HardHat, Layers,
  ShieldCheck, HandCoins, MapPin, Repeat, Zap, MessagesSquare,
  Users, KeyRound, Clock, PhoneCall, UserCheck, CalendarCheck,
  GraduationCap, Phone, Mail, ArrowRight, Check, ChevronDown,
  Smartphone, Map as MapIcon, AlertCircle, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Building2, Building, Stethoscope, Briefcase, HardHat, Layers,
  ShieldCheck, HandCoins, MapPin, Repeat, Zap, MessagesSquare,
  Users, KeyRound, Clock, PhoneCall, UserCheck, CalendarCheck,
  GraduationCap, Phone, Mail, ArrowRight, Check, ChevronDown,
  Smartphone, Map: MapIcon, AlertCircle,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Building2;
  return <Cmp className={className} strokeWidth={2} />;
}

export default MAP;
