"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ContactButtonProps extends React.ComponentProps<typeof Button> {
  phoneNumber?: string;
  message?: string;
}

export default function ContactButton({ 
  phoneNumber = "5211234567890", 
  message = "Hola, me interesan los dulces enchilados de Enchiladitos",
  children,
  ...props 
}: ContactButtonProps) {
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button onClick={handleClick} {...props}>
      <Phone className="mr-2 h-4 w-4" />
      {children || "Contactar por WhatsApp"}
    </Button>
  );
}