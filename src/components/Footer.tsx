"use client";

import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  ShoppingBag,
  Shield,
  Truck,
  Clock,
  Heart,
  Sparkles
} from "lucide-react";
import ContactButton from "./ContactButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow principal - ajustado para no mostrar blanco */}
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-red-600/20 to-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 blur-3xl" />
        
        {/* Fondo sólido para evitar transparencias */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        
        {/* Patrón de chiles */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
              }}
            >
              🌶️
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
              <Sparkles className="h-4 w-4 text-red-400" />
              <span className="text-sm font-semibold text-red-300">¡ÚNETE A NUESTRA COMUNIDAD!</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Recibe ofertas exclusivas y <span className="text-red-400">nuevos sabores</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold
                hover:from-red-700 hover:to-orange-600 hover:shadow-xl transition-all duration-300">
                Suscribirme
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Prometemos no enviar spam. Solo sabor y picante.
            </p>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-4 mb-16">
          
          {/* BRAND - VERSIÓN CORREGIDA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contenedor del logo corregido */}
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                {/* Contenedor para el efecto de borde */}
                <div className="relative p-1 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 animate-pulse">
                  {/* Fondo interno */}
                  <div className="relative bg-gray-900 rounded-lg p-0.5">
                    {/* Contenedor del logo con dimensiones fijas */}
                    <div className="relative h-14 w-14 md:h-16 md:w-16">
                      <Image
                        src="/enchiladitos-logo.jpeg"
                        alt="Enchiladitos"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 56px, 64px"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                  Enchiladitos
                </h3>
                <p className="text-sm text-gray-400">Dulces que pican y endulzan</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Creando experiencias de sabor únicas desde 2020. Dulces enchilados artesanales con el balance perfecto entre tradición e innovación.
            </p>

            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, color: "hover:bg-blue-600", href: "#" },
                { icon: InstagramIcon, color: "hover:bg-gradient-to-r from-pink-500 to-purple-600", href: "#" },
                { icon: Mail, color: "hover:bg-orange-500", href: "mailto:info@enchiladitos.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  className={`p-3 rounded-xl bg-gray-800 ${social.color} transition-all duration-300
                  backdrop-blur-sm border border-gray-700`}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ENLACES RÁPIDOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-red-500" />
              Productos
            </h4>
            
            <ul className="space-y-3">
              {[
                { label: "Mangos Enchilados", href: "#productos" },
                { label: "Gomitas Picantes", href: "#productos" },
                { label: "Mix Especial", href: "#productos" },
                { label: "Nuevos Sabores", href: "#productos" },
                { label: "Edición Limitada", href: "#productos" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300
                    flex items-center gap-2 group"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-600 group-hover:bg-red-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Phone className="h-5 w-5 text-red-500" />
              Contacto
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-1">
                  <Phone className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Teléfono</p>
                  <p className="text-white font-medium">+52 123 456 7890</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="mt-1">
                  <Mail className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Email</p>
                  <p className="text-white font-medium">info@enchiladitos.com</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="mt-1">
                  <MapPin className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Ubicación</p>
                  <p className="text-white font-medium">Ciudad de México, MX</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* HORARIOS Y BOTÓN CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-red-500" />
              Horarios
            </h4>
            
            <div className="space-y-3">
              {[
                { days: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM" },
                { days: "Sábados", hours: "10:00 AM - 6:00 PM" },
                { days: "Domingos", hours: "11:00 AM - 4:00 PM" },
              ].map((schedule, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors">
                  <span className="text-gray-300">{schedule.days}</span>
                  <span className="text-white font-medium">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <ContactButton 
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700
                text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Ordenar ahora</span>
                </div>
              </ContactButton>
              
              <p className="text-center text-sm text-gray-400">
                ¡Respondemos en menos de 5 minutos!
              </p>
            </div>
          </motion.div>
        </div>

        {/* GARANTÍAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 pt-12 border-t border-gray-800"
        >
          {[
            { icon: Truck, title: "Envío Express", desc: "24-48 horas en CDMX" },
            { icon: Shield, title: "Garantía", desc: "30 días de satisfacción" },
            { icon: Sparkles, title: "Calidad", desc: "Ingredientes premium" },
            { icon: Heart, title: "Hecho con amor", desc: "Recetas artesanales" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10">
                <feature.icon className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{feature.title}</p>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FOOTER BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-red-400 font-semibold">Enchiladitos</span>. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs text-gray-500">
              <Link href="#" className="hover:text-red-400 transition-colors">Términos y condiciones</Link>
              <span>•</span>
              <Link href="#" className="hover:text-red-400 transition-colors">Política de privacidad</Link>
              <span>•</span>
              <Link href="#" className="hover:text-red-400 transition-colors">Aviso legal</Link>
            </div>
          </div>

          {/* Botón scroll to top */}
          <motion.button
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 
            text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300
            flex items-center gap-2"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            <span>Volver arriba</span>
            
            {/* Efecto de brillo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.button>
        </motion.div>

        {/* Créditos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-600">
            Hecho con 🌶️ en México • #HechoEnMexico • Orgullosamente artesanal
          </p>
        </motion.div>
      </div>

      {/* Fondo extra que se extiende hasta el final de la página */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-gray-900 to-black" />
    </footer>
  );
}