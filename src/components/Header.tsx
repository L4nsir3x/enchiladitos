"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ShoppingBag, Sparkles, Flame } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "#productos" },
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-red-100"
          : "bg-gradient-to-r from-white via-red-50/20 to-white backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        
        {/* LOGO CON GRADIENTE */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-0.5">
              <div className="h-full w-full rounded-full bg-white p-0.5">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/enchiladitos-logo.jpeg"
                    alt="Enchiladitos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="48px"
                  />
                </div>
              </div>
            </div>
            {/* Punto animado */}
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse">
              <Flame className="h-2 w-2 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent tracking-tight">
              Enchiladitos
            </span>
            <span className="text-xs font-medium text-gray-500 -mt-1">
              Dulces que pican y endulzan
            </span>
          </div>
        </Link>

        {/* NAV DESKTOP MEJORADO */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-6 py-3 font-semibold text-gray-700 transition-all duration-300
              hover:text-red-600 group/nav"
            >
              <span className="relative z-10">{item.label}</span>
              {/* Efecto de fondo hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-50 to-orange-50 opacity-0 
                group-hover/nav:opacity-100 transition-opacity duration-300 -z-10" />
              {/* Indicador activo */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full 
                bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover/nav:opacity-100 
                group-hover/nav:w-8 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTONS DESKTOP */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#productos"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 
            text-gray-700 font-semibold hover:from-red-100 hover:to-orange-100 transition-all duration-300 
            border border-red-100 hover:border-red-200 group/catalog"
          >
            <ShoppingBag className="h-4 w-4 group-hover/catalog:rotate-12 transition-transform" />
            Catálogo
          </Link>
          
          <a
            href="https://wa.me/5211234567890?text=Hola,%20me%20interesan%20los%20dulces%20enchilados%20de%20Enchiladitos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 
            px-6 py-3 text-white font-bold hover:from-green-600 hover:to-emerald-700 
            hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/whatsapp"
          >
            <div className="relative">
              <Phone className="h-5 w-5" />
              <Sparkles className="absolute -top-1 -right-1 h-2 w-2 text-yellow-300 animate-ping" />
            </div>
            <span className="whitespace-nowrap">Ordenar ahora</span>
          </a>
        </div>

        {/* MENU MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative rounded-xl p-3 bg-gradient-to-r from-red-50 to-orange-50 
          hover:from-red-100 hover:to-orange-100 transition-all duration-300 group"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? (
            <X className="h-6 w-6 text-red-600 group-hover:rotate-90 transition-transform" />
          ) : (
            <Menu className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform" />
          )}
          {/* Punto de notificación */}
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
        </button>
      </div>

      {/* MOBILE NAV MEJORADO */}
      {open && (
        <div className="lg:hidden border-t border-red-100 bg-gradient-to-b from-white to-red-50/30 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative py-4 px-6 text-lg font-semibold text-gray-800 hover:text-red-600 
                transition-all duration-300 border-b border-red-50 last:border-b-0"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-0 
                    group-hover:opacity-100 transition-opacity" />
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 to-orange-50/0 
                  group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300 rounded-xl -z-10" />
              </Link>
            ))}

            {/* CTA MOBILE */}
            <div className="mt-6 px-4 space-y-4">
              <Link
                href="#productos"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 
                py-4 text-gray-700 font-semibold hover:from-red-100 hover:to-orange-100 transition-all 
                border border-red-100"
              >
                <ShoppingBag className="h-5 w-5" />
                Ver catálogo completo
              </Link>
              
              <a
                href="https://wa.me/5211234567890?text=Hola,%20me%20interesan%20los%20dulces%20enchilados%20de%20Enchiladitos"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 
                py-4 text-white font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Ordenar por WhatsApp</span>
                <Sparkles className="h-4 w-4 text-yellow-300" />
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* BANNER PROMOCIONAL */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 py-2 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm font-medium text-white animate-pulse">
            🚚 <span className="font-bold">¡ENVÍO GRATIS!</span> En compras mayores a $300 MXN
          </p>
        </div>
      </div>
    </header>
  );
}