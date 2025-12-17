"use client";

import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChefHat, 
  FlaskConical, 
  Package, 
  Sparkles, 
  Shield, 
  Clock, 
  Flame,
  Leaf,
  Droplets,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

/* ------------------
   Mini carousel interno mejorado
------------------- */
const InnerCarousel = ({ images, step }: { images: string[], step: number }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-2xl group">
      {/* Contenedor principal con efectos */}
      <div className="relative h-56 w-full overflow-hidden rounded-xl">
        <Image
          src={images[index]}
          alt={`Paso ${step}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Badge del paso */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold shadow-lg">
            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-white/20">
              {step}
            </span>
            PASO
          </div>
        </div>
      </div>

      {/* Controles mejorados */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 hover:bg-black/90 
        p-2 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 hover:bg-black/90 
        p-2 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicadores mejorados */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index 
                ? "w-8 bg-gradient-to-r from-red-500 to-orange-500" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Contador de imágenes */}
      <div className="absolute bottom-4 right-4">
        <div className="rounded-full bg-black/60 backdrop-blur-sm px-2 py-1">
          <span className="text-xs text-white font-medium">
            {index + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ------------------
   Tarjeta de proceso mejorada
------------------- */
const ProcessStep = ({ 
  step, 
  title, 
  description, 
  images, 
  icon: Icon,
  duration,
  features 
}: { 
  step: number;
  title: string;
  description: string;
  images: string[];
  icon: React.ElementType;
  duration: string;
  features: string[];
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      
      {/* Efecto de fondo al hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-orange-50/0 to-yellow-50/0 
        group-hover:from-red-50/10 group-hover:via-orange-50/10 group-hover:to-yellow-50/10 transition-all duration-500" />
      
      {/* Header del paso */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 p-0.5">
                <div className="h-full w-full rounded-lg bg-white flex items-center justify-center">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold flex items-center justify-center">
                {step}
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-red-600">PASO {step}</span>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">{duration}</span>
              </div>
            </div>
          </div>
          
          {/* Estrellas de calidad */}
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Sparkles key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Features del paso */}
        <div className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel de imágenes */}
      <div className="px-6 pb-6">
        <InnerCarousel images={images} step={step} />
      </div>

      {/* Sello de calidad */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
          <Shield className="h-3 w-3 text-green-600" />
          <span className="text-xs font-medium text-green-700">CALIDAD VERIFICADA</span>
        </div>
      </div>
    </div>
  );
};

/* ------------------
   Sección principal mejorada
------------------- */
export default function ComoSeHacen() {
  const processSteps = [
    {
      step: 1,
      title: "Selección Premium de Ingredientes",
      description: "Buscamos en mercados locales los ingredientes más frescos y de la mejor calidad. Cada chile, cada fruta y cada especia pasa por nuestro riguroso control de calidad.",
      images: ["/productos/chiles.jpg", "/productos/papas.jpg", "/productos/gomitas.jpg", "/productos/mix.jpg"],
      icon: Leaf,
      duration: "24 horas",
      features: [
        "Chiles orgánicos cultivados localmente",
        "Frutas 100% naturales sin conservadores",
        "Especias seleccionadas a mano",
        "Control de calidad triple verificado"
      ]
    },
    {
      step: 2,
      title: "Elaboración de Nuestras Mezclas Secretas",
      description: "Nuestras recetas familiares combinan tradición e innovación. Cada mezcla de chiles y especias se prepara con precisión milimétrica para el balance perfecto.",
      images: ["/images/paso-2.jpg", "/images/salsa.jpg", "/images/mezcla.jpg", "/productos/mezcla.jpg"],
      icon: FlaskConical,
      duration: "48 horas",
      features: [
        "Mezclas secretas heredadas por generaciones",
        "Balance científico entre picante y dulce",
        "Procesos artesanales sin químicos",
        "Pruebas de sabor cada 30 minutos"
      ]
    },
    {
      step: 3,
      title: "Proceso de Enchilado Artesanal",
      description: "Cada producto se impregna manualmente con nuestras mezclas, garantizando cobertura uniforme y sabor consistente en cada bocado. El reposo es clave.",
      images: ["/images/paso-3.jpg", "/productos/enchilados.jpg", "/productos/salsas.jpg", "/images/final.jpg"],
      icon: ChefHat,
      duration: "72 horas",
      features: [
        "Enchilado manual para cobertura perfecta",
        "Reposo controlado a temperatura ideal",
        "Secado natural sin aditivos",
        "Inspección visual de cada pieza"
      ]
    },
    {
      step: 4,
      title: "Empaque y Control Final",
      description: "Utilizamos empaques biodegradables que mantienen la frescura. Cada lote pasa por pruebas finales antes de salir a tu mesa.",
      images: ["/images/empaque.jpg", "/productos/mix.jpg", "/images/final.jpg", "/productos/dulces1.jpg"],
      icon: Package,
      duration: "12 horas",
      features: [
        "Empaques 100% biodegradables",
        "Sellado al vacío para máxima frescura",
        "Pruebas de sabor finales",
        "Código de lote para trazabilidad"
      ]
    }
  ];

  return (
    <section id="como-se-hacen" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white py-32">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-red-100 to-orange-100 blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 blur-3xl opacity-20" />
        
        {/* Patrón de ingredientes */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            >
              {i % 4 === 0 ? "🌶️" : i % 4 === 1 ? "🍃" : i % 4 === 2 ? "⚗️" : "📦"}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
            <Flame className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-700">NUESTRO PROCESO ARTESANAL</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
            El <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Arte Detrás</span> de Cada Bocado
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre el meticuloso proceso de 4 pasos que transforma ingredientes simples en 
            <span className="font-bold text-red-600"> experiencias de sabor inolvidables.</span>
          </p>
          
          {/* Estadísticas del proceso */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: "100%", label: "Ingredientes Naturales", icon: <Leaf className="h-5 w-5" /> },
              { value: "72h", label: "Tiempo Total", icon: <Clock className="h-5 w-5" /> },
              { value: "4", label: "Pasos Clave", icon: <CheckCircle className="h-5 w-5" /> },
              { value: "0", label: "Conservadores", icon: <Shield className="h-5 w-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-red-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carousel de procesos */}
        <div className="relative">
          <Carousel
            items={processSteps.map((step, index) => (
              <Card 
                key={step.title} 
                card={{
                  src: step.images[0],
                  category: `Paso ${step.step}`,
                  title: step.title,
                  content: (
                    <div className="p-2">
                      <ProcessStep {...step} />
                    </div>
                  ),
                }} 
                index={index} 
                layout 
              />
            ))}
          />
          
          {/* Instrucción de scroll */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 text-gray-500 animate-pulse">
              <div className="h-6 w-px bg-gradient-to-b from-red-500 to-transparent" />
              <span className="text-sm font-medium">Desliza para conocer todo el proceso</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Sello de calidad final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-lg max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Garantía de Calidad Enchiladitos
              </h3>
            </div>
            <p className="text-gray-600">
              Cada paso de nuestro proceso está diseñado para garantizar que recibas productos 
              de la más alta calidad, con sabor consistente y frescura incomparable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Sin conservadores</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                <Droplets className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Hecho a mano</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Calidad premium</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}