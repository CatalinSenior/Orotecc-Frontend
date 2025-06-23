// components/icons/LucideIconMap.tsx
import React from "react";
import {
  LayoutDashboard, // Corresponds to 'Dashboard'
  Receipt, // Corresponds to 'Bills'
  CreditCard, // Corresponds to 'Payments'
  Landmark, // Corresponds to 'Credits' (like a bank/financial institution)
  Settings, // Corresponds to 'Payment Preferences'
  FileText, // Corresponds to 'Billing Preferences'
  Home, // For the Home icon in the active Dashboard link
} from "lucide-react";

interface LucideIconMapProps {
  name: string;
  className?: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  Dashboard: LayoutDashboard,
  Bills: Receipt,
  Payments: CreditCard,
  Credits: Landmark, // Changed from 💰 to a more fitting financial icon
  "Payment Preferences": Settings,
  "Billing Preferences": FileText, // Changed from 📝 to a more fitting document icon
  Home: Home, // For the custom Home icon as seen in the image
};

export const LucideIcon: React.FC<LucideIconMapProps> = ({
  name,
  className,
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in LucideIconMap.`);
    return null; // Or return a default icon
  }

  return <IconComponent className={className} />;
};
