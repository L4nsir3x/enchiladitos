"use client";

import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import ComoSeHacen from "@/components/ComoSeHacen";

import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

import { motion } from "framer-motion";
import { Sparkles, Shield, Truck, Heart, Zap, Award, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <HeroSection />

      {/* CATÁLOGO */}
      <ProductCatalog />

      {/* BENEFICIOS MEJORADOS */}
      <section className="relative py-32 bg-gradient-to-b from-white via-red-50/10 to-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-red-100 to-orange-100 blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Header mejorado */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
                <Sparkles className="h-4 w-4 text-red-500" />
                <span className="text-sm font-semibold text-red-700">NUESTRAS VENTAJAS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
                ¿Por qué{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                    Enchiladitos
                  </span>
                  <span className="absolute -top-2 -right-4">
                    <Star className="h-6 w-6 text-yellow-500 fill-yellow-500 animate-spin-slow" />
                  </span>
                </span>{" "}
                es diferente?
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                No solo vendemos dulces enchilados, creamos experiencias de sabor que 
                <span className="font-bold text-red-600"> te harán volver por más.</span>
              </p>
            </motion.div>

            {/* Tarjetas de beneficios */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">

              {[
                {
                  icon: <Zap className="h-8 w-8 text-red-500" />,
                  title: "Picante Perfectamente Calibrado",
                  text: "Cada producto pasa por 3 pruebas de sabor para lograr el equilibrio ideal entre picante y dulce. Nuestro sistema de niveles (1-5) garantiza que encuentres tu punto perfecto.",
                  gradient: "from-red-500/10 to-orange-500/10",
                  border: "border-red-100",
                  bgIcon: "bg-gradient-to-br from-red-500 to-orange-500",
                  stats: "98% satisfacción",
                  delay: 0
                },
                {
                  icon: <Heart className="h-8 w-8 text-green-500" />,
                  title: "100% Natural y Artesanal",
                  text: "Sin conservadores, colorantes artificiales ni químicos. Trabajamos con ingredientes frescos y procesos tradicionales que respetan el sabor auténtico mexicano.",
                  gradient: "from-green-500/10 to-emerald-500/10",
                  border: "border-green-100",
                  bgIcon: "bg-gradient-to-br from-green-500 to-emerald-500",
                  stats: "Ingredientes certificados",
                  delay: 0.1
                },
                {
                  icon: <Truck className="h-8 w-8 text-blue-500" />,
                  title: "Entrega Express & Ecológica",
                  text: "Recibe tus pedidos en menos de 24h en CDMX y 48h nacional. Usamos empaques biodegradables y rutas optimizadas para reducir nuestra huella de carbono.",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  border: "border-blue-100",
                  bgIcon: "bg-gradient-to-br from-blue-500 to-cyan-500",
                  stats: "24-48h envío",
                  delay: 0.2
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-500" />,
                  title: "Garantía de Frescura Total",
                  text: "Cada lote se prepara bajo pedido y se sella al vacío. Si no estás 100% satisfecho, te devolvemos tu dinero sin preguntas. Tu satisfacción es nuestra prioridad.",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  border: "border-purple-100",
                  bgIcon: "bg-gradient-to-br from-purple-500 to-pink-500",
                  stats: "Garantía 30 días",
                  delay: 0.3
                },
                {
                  icon: <Award className="h-8 w-8 text-yellow-500" />,
                  title: "Recetas Exclusivas y Premium",
                  text: "Nuestras mezclas de chiles y especias son secretos familiares perfeccionados por años. Ofrecemos productos que no encontrarás en ningún otro lugar.",
                  gradient: "from-yellow-500/10 to-amber-500/10",
                  border: "border-yellow-100",
                  bgIcon: "bg-gradient-to-br from-yellow-500 to-amber-500",
                  stats: "50+ productos únicos",
                  delay: 0.4
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-pink-500" />,
                  title: "Experiencia Personalizada",
                  text: "¿Quieres más picante? ¿Menos sal? ¡Lo personalizamos! Nuestro equipo trabaja contigo para crear el producto perfecto según tus preferencias.",
                  gradient: "from-pink-500/10 to-rose-500/10",
                  border: "border-pink-100",
                  bgIcon: "bg-gradient-to-br from-pink-500 to-rose-500",
                  stats: "Personalización total",
                  delay: 0.5
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="w-full h-full"
                >
                  <CardContainer containerClassName="w-full h-full">
                    <CardBody
                      className={`
                        relative h-full min-h-[360px] w-full
                        rounded-2xl bg-white
                        flex flex-col items-start p-8
                        transition-all duration-500
                        hover:shadow-2xl hover:-translate-y-2
                        border ${item.border}
                        group
                      `}
                    >
                      {/* Efecto de fondo gradiente */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                      
                      {/* Icono circular */}
                      <CardItem translateZ={60}>
                        <div className={`relative h-16 w-16 rounded-2xl ${item.bgIcon} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                          {/* Punto animado */}
                          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white animate-ping" />
                        </div>
                      </CardItem>

                      {/* Título */}
                      <CardItem translateZ={80} className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {item.title}
                        </h3>
                      </CardItem>

                      {/* Texto */}
                      <CardItem translateZ={50} className="mb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </CardItem>

                      {/* Línea decorativa */}
                      <div className="h-1 w-12 bg-gradient-to-r from-gray-300 to-transparent rounded-full mb-4 group-hover:w-24 transition-all duration-300" />

                      {/* Stats */}
                      <CardItem translateZ={40} className="mt-auto">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm font-semibold text-gray-500">
                            {item.stats}
                          </span>
                          <div className="h-2 w-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-red-300 group-hover:to-orange-300 transition-all duration-300" />
                        </div>
                      </CardItem>

                      {/* Efecto de esquina */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white to-gray-100 border border-gray-200 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse" />
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}

            </div>

            {/* CTA intermedio */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-20 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-lg max-w-2xl">
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="h-6 w-6 text-green-500" />
                  <span className="text-lg font-semibold">Compra con confianza</span>
                </div>
                <p className="text-gray-600">
                  Más de 5,000 clientes satisfechos nos respaldan. ¿Qué esperas para unirte?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CÓMO SE HACEN */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <ComoSeHacen />
        </div>
      </section>

      {/* CTA FINAL MEJORADO */}
      <section className="relative py-32 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-gradient-to-r from-red-400 to-orange-400 blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 blur-3xl opacity-30" />
          {/* Patrón de chiles */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                🌶️
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">¡OFERTA ESPECIAL!</span>
            </div>

            {/* Título principal */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">¿Listo para</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                PROBAR LA DIFERENCIA?
              </span>
            </h2>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              No solo compras dulces enchilados, inviertes en una{" "}
              <span className="font-bold text-yellow-300">experiencia de sabor premium</span>{" "}
              que tu paladar nunca olvidará.
            </motion.p>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              {[
                { text: "✅ Envío gratis +$300", icon: "🚚" },
                { text: "✅ Productos frescos", icon: "🍃" },
                { text: "✅ Soporte 24/7", icon: "💬" },
                { text: "✅ Garantía total", icon: "🛡️" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Botón principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://wa.me/524423338026?text=Hola%2C+quiero+hacer+un+pedido+de+Enchiladitos"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-white to-gray-100 px-10 py-5
                         font-bold text-red-600 shadow-2xl hover:shadow-3xl transition-all duration-300
                         border-2 border-white overflow-hidden"
              >
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Contenido */}
                <span className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl animate-bounce">🌶️</span>
                  <span className="relative">
                    ¡ORDENAR AHORA!
                    <span className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                </span>
                
                {/* Flecha animada */}
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>

                {/* Badge de oferta */}
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold animate-pulse">
                  -20% HOY
                </div>
              </a>
            </motion.div>

            {/* Texto pequeño */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-sm text-white/70"
            >
              ⏰ Oferta válida por tiempo limitado • 📞 Soporte por WhatsApp 24/7
            </motion.p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}