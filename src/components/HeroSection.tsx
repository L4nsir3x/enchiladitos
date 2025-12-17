"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Sparkles, Flame, Zap } from "lucide-react";
import ContactButton from "./ContactButton";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function HeroSection() {
  const images = [
    "/productos/chiles.jpg",
    "/productos/gomitas.jpg",
    "/productos/mangos.jpg",
    "/productos/papas.jpg",
    "/productos/tamarindo.jpg",
    "/productos/salsas.jpg",
    "/productos/chicles.jpg",
    "/productos/jarabe.jpg",
    "/productos/mezcla.jpg",
    "/productos/dulces1.jpg",
    "/productos/dulces2.jpg",
    "/productos/dulces3.jpg",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ===== 3D MARQUEE BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-red-950/30 to-black">
        {/* En móvil, reducir opacidad para mejor legibilidad */}
        <div className="hidden lg:block">
          <ThreeDMarquee images={images} className="h-full opacity-90" />
        </div>
        
        {/* En móvil, mostrar fondo simple */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-black via-red-950/40 to-black">
          {/* Grid estático de imágenes para móvil */}
          <div className="grid grid-cols-3 gap-2 p-4 opacity-30">
            {images.slice(0, 6).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Gradientes mejorados para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        
        {/* Efecto de partículas/brillo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center justify-center lg:justify-start py-8 lg:py-0">

          {/* TEXTO CON ESTILOS MEJORADOS - PRIMERO EN MÓVIL */}
          <div className="order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
            <Badge className="mb-6 bg-gradient-to-r from-red-600 to-orange-500 text-white border-0 animate-pulse shadow-lg inline-flex items-center mx-auto lg:mx-0">
              <Sparkles className="mr-2 h-3 w-3" />
              ¡Sabor explosivo en cada bocado!
            </Badge>

            {/* TÍTULO CON GRADIENTE */}
            <h1 className="mb-4 lg:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                Dulces que
              </span>
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent mt-1 lg:mt-2">
                PICAN Y ENDULZAN
              </span>
            </h1>

            {/* DESCRIPCIÓN CON ESTILO */}
            <div className="mb-6 lg:mb-8 relative max-w-xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed backdrop-blur-sm bg-black/30 p-4 sm:p-6 rounded-2xl border border-white/10">
                En <span className="font-bold text-red-400">Enchiladitos</span>{" "}
                creamos la combinación perfecta entre el picante y lo dulce.
              </p>
              
              {/* Elementos decorativos - solo desktop */}
              <div className="hidden lg:block absolute -top-2 -right-2">
                <Flame className="h-6 w-6 text-orange-500 animate-bounce" />
              </div>
              <div className="hidden lg:block absolute -bottom-2 -left-2">
                <Zap className="h-6 w-6 text-yellow-500 animate-pulse" />
              </div>
            </div>

            {/* BOTONES CON ESTILOS MEJORADOS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <ContactButton 
                size="lg" 
                className="w-full sm:w-auto justify-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Ordenar por WhatsApp
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </ContactButton>

              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto justify-center bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver catálogo completo
              </Button>
            </div>

            {/* ESTADÍSTICAS/FEATURES - RESPONSIVE */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-8 lg:mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-3 lg:p-4 backdrop-blur-sm bg-black/20 rounded-xl border border-white/10">
                <div className="text-xl lg:text-2xl font-bold text-red-400">50+</div>
                <div className="text-xs lg:text-sm text-white/70">Productos únicos</div>
              </div>
              <div className="text-center p-3 lg:p-4 backdrop-blur-sm bg-black/20 rounded-xl border border-white/10">
                <div className="text-xl lg:text-2xl font-bold text-orange-400">🔥</div>
                <div className="text-xs lg:text-sm text-white/70">Picor personalizado</div>
              </div>
              <div className="hidden lg:block text-center p-4 backdrop-blur-sm bg-black/20 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-yellow-400">🚚</div>
                <div className="text-sm text-white/70">Envío rápido</div>
              </div>
            </div>
          </div>

          {/* IMAGEN PRODUCTO DESTACADO CON ESTILOS MEJORADOS - PRIMERO EN MÓVIL */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-none">
              
              {/* Contenedor 3D para desktop */}
              <div className="hidden lg:block perspective-[2000px]">
                <div className="relative h-[400px] w-[400px] xl:h-[500px] xl:w-[500px] rounded-3xl bg-gradient-to-br from-white/5 to-white/15 backdrop-blur-xl shadow-2xl border border-white/20 transform-gpu">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <img
                        src="/productos/mangos.jpg"
                        alt="Mix Enchiladitos"
                        className="w-64 xl:w-72 h-64 xl:h-72 object-cover rounded-2xl shadow-2xl border-4 border-white/30 transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300"
                      />
                      <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                        ¡NUEVO!
                      </div>
                    </div>
                  </div>
                  
                  {/* Productos secundarios orbitando - solo desktop */}
                  <div className="absolute top-10 left-10">
                    <img
                      src="/productos/gomitas.jpg"
                      alt="Gomitas enchiladas"
                      className="w-24 h-24 xl:w-32 xl:h-32 object-cover rounded-xl shadow-lg border-2 border-orange-400/50"
                    />
                  </div>
                  
                  <div className="absolute bottom-10 right-10">
                    <img
                      src="/productos/chiles.jpg"
                      alt="Chiles enchilados"
                      className="w-24 h-24 xl:w-32 xl:h-32 object-cover rounded-xl shadow-lg border-2 border-red-400/50"
                    />
                  </div>

                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-orange-500/10 rounded-3xl" />
                </div>

                {/* Texto descriptivo flotante - solo desktop */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-full whitespace-nowrap shadow-xl">
                  <span className="flex items-center">
                    <Flame className="mr-2 h-4 w-4 animate-pulse" />
                    ¡La mezcla perfecta de sabores!
                    <Flame className="ml-2 h-4 w-4 animate-pulse" />
                  </span>
                </div>
              </div>

              {/* Imagen simple para móvil */}
              <div className="lg:hidden relative">
                <div className="relative h-64 w-64 mx-auto rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-1">
                  <img
                    src="/productos/mangos.jpg"
                    alt="Mix Enchiladitos"
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    POPULAR
                  </div>
                </div>
                
                {/* Indicadores para móvil */}
                <div className="flex justify-center mt-4 space-x-2">
                  {[1, 2, 3].map((dot) => (
                    <div 
                      key={dot} 
                      className={`h-2 w-2 rounded-full ${dot === 1 ? 'bg-red-500' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR SOLO DESKTOP */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white/50 text-sm">Desliza para descubrir</div>
        <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent mx-auto mt-2" />
      </div>

      {/* MENSAJE FLOTANTE PARA MÓVIL */}
      <div className="lg:hidden fixed bottom-4 left-0 right-0 px-4 z-20">
        <div className="bg-gradient-to-r from-red-600/90 to-orange-500/90 backdrop-blur-sm text-white text-center py-3 px-4 rounded-xl shadow-xl animate-pulse border border-white/20">
          <span className="flex items-center justify-center text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            ¡Envíos en 24 horas!
          </span>
        </div>
      </div>
    </section>
  );
}