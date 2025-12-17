"use client";

import React from "react";
import { Carousel, Card as AnimatedCard } from "@/components/ui/apple-cards-carousel";
import { Badge } from "@/components/ui/badge";
import { Flame, ShoppingBag, Zap, Star, TrendingUp, Clock, Shield } from "lucide-react";
import ContactButton from "./ContactButton";

const products = [
  {
    id: 1,
    name: "Mangos Enchilados",
    description: "Tiras de mango deshidratado con chile piquín y limón - La combinación perfecta de dulce y picante que te hará antojar más.",
    price: "$45",
    originalPrice: "$55",
    category: "Frutas Deshidratadas",
    spiceLevel: 3,
    bestSeller: true,
    featured: true,
    deliveryTime: "24h",
    image: "/productos/mangos.jpg",
  },
  {
    id: 2,
    name: "Gomitas Picantes",
    description: "Gomitas de sabores con recubrimiento de chile en polvo - Una explosión de sabor que combina la suavidad de la gomita con el toque picante perfecto.",
    price: "$35",
    originalPrice: "$40",
    category: "Gomitas",
    spiceLevel: 2,
    bestSeller: true,
    featured: false,
    deliveryTime: "24h",
    image: "/productos/gomitas.jpg",
  },
  {
    id: 3,
    name: "Pulparindos Extreme",
    description: "Pulparindos con extra picante y chamoy - Para los valientes que buscan una experiencia intensa de sabores mexicanos.",
    price: "$25",
    category: "Tamarindo",
    spiceLevel: 4,
    bestSeller: false,
    featured: true,
    deliveryTime: "48h",
    image: "/productos/tamarindo.jpg",
  },
  {
    id: 4,
    name: "Mix Enchiladitos",
    description: "Combinación especial de nuestros mejores productos - Lo mejor de cada mundo en un solo paquete.",
    price: "$65",
    originalPrice: "$80",
    category: "Mix Especial",
    spiceLevel: 3,
    bestSeller: true,
    featured: true,
    deliveryTime: "24h",
    image: "/productos/mix.jpg",
  },
];

const renderSpiceLevel = (level: number) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-700">Picante</span>
      <span className="text-sm font-bold text-red-600">{level}/5</span>
    </div>
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            i < level 
              ? "bg-gradient-to-r from-red-500 to-orange-500" 
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-50 p-1 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
    {/* Badges superpuestos */}
    <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
      {product.bestSeller && (
        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg animate-pulse">
          <TrendingUp className="mr-1 h-3 w-3" />
          TOP VENTAS
        </Badge>
      )}
      {product.featured && (
        <Badge className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-0">
          <Star className="mr-1 h-3 w-3" />
          DESTACADO
        </Badge>
      )}
    </div>

    {/* Contador de stock */}
    <div className="absolute right-4 top-4 z-10">
      <div className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 shadow-md">
        <span className="text-xs font-bold text-gray-700">¡Últimas unidades!</span>
      </div>
    </div>

    {/* Imagen del producto */}
    <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>

    {/* Contenido */}
    <div className="p-6">
      {/* Categoría y tiempo de entrega */}
      <div className="mb-3 flex items-center justify-between">
        <Badge variant="outline" className="border-red-200 bg-red-50 text-red-700">
          {product.category}
        </Badge>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span className="font-medium">{product.deliveryTime}</span>
        </div>
      </div>

      {/* Nombre del producto */}
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
        {product.name}
      </h3>

      {/* Descripción */}
      <p className="mb-4 text-gray-600 text-sm line-clamp-2">
        {product.description}
      </p>

      {/* Nivel de picante */}
      <div className="mb-6">
        {renderSpiceLevel(product.spiceLevel)}
      </div>

      {/* Precio y acciones */}
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">MXN • 200g</p>
          </div>
          
          {/* Garantía */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Shield className="h-3 w-3" />
            <span>Garantía</span>
          </div>
        </div>

        {/* Botón de compra */}
        <ContactButton
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 
          text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] 
          transition-all duration-300 group/btn"
          message={`Hola, me interesa el producto: ${product.name}`}
        >
          <div className="flex items-center justify-center gap-2">
            <ShoppingBag className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
            <span>Ordenar ahora</span>
            <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />
          </div>
        </ContactButton>
      </div>
    </div>

    {/* Efecto de brillo al hover */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/0 via-orange-500/0 to-yellow-500/0 
      group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-yellow-500/5 
      transition-all duration-500 pointer-events-none" />
  </div>
);

export default function ProductCatalog() {
  const cards = products.map((product, index) => (
    <AnimatedCard
      key={product.id}
      index={index}
      card={{
        src: product.image,
        title: product.name,
        category: product.category,
        content: (
          <div className="space-y-6 p-2">
            {/* Header del modal */}
            <div className="flex items-start justify-between">
              <div>
                <Badge className="bg-gradient-to-r from-red-600 to-orange-500 text-white mb-2">
                  {product.category}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
              </div>
              {product.bestSeller && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white animate-pulse">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  MÁS VENDIDO
                </Badge>
              )}
            </div>

            {/* Imagen grande en modal */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Descripción completa */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Especificaciones */}
            <div className="grid grid-cols-2 gap-4 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 p-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Nivel de picante</p>
                <div className="flex items-center gap-2">
                  {renderSpiceLevel(product.spiceLevel)}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Tiempo de entrega</p>
                <div className="flex items-center gap-2 text-gray-800">
                  <Clock className="h-4 w-4" />
                  <span className="font-semibold">{product.deliveryTime}</span>
                </div>
              </div>
            </div>

            {/* Precio y oferta */}
            <div className="rounded-xl border border-red-100 bg-white p-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm text-gray-500">Precio especial</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-xl text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          -{Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%
                        </Badge>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Peso neto: 200g • Envío gratis</p>
                </div>
              </div>
            </div>

            {/* Botón de compra en modal */}
            <ContactButton
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
              text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] 
              transition-all duration-300 text-lg"
              message={`Hola, me interesa el producto: ${product.name}. 
Precio: ${product.price} 
¿Podrías darme más información?`}
            >
              <div className="flex items-center justify-center gap-3">
                <ShoppingBag className="h-6 w-6" />
                <span>Ordenar por WhatsApp</span>
                <Zap className="h-5 w-5 text-yellow-300 animate-pulse" />
              </div>
            </ContactButton>

            {/* Garantía */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="h-4 w-4" />
              <span>Garantía de satisfacción • Envío seguro • Soporte 24/7</span>
            </div>
          </div>
        ),
      }}
      layout
    />
  ));

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-red-50/20 to-white" id="productos">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-r from-red-100 to-orange-100 blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-red-600 to-orange-500 text-white border-0 text-sm py-1 px-4">
            <Flame className="mr-2 h-4 w-4" />
            ¡LOS FAVORITOS!
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Productos Estrella
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra exclusiva selección de dulces enchilados, donde cada bocado es una 
            <span className="font-bold text-red-600"> explosión de sabor</span> que combina perfectamente lo dulce y lo picante.
          </p>
          
          {/* Estadísticas */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-500">Productos únicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">🔥</div>
              <div className="text-sm text-gray-500">Niveles de picante</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">⭐</div>
              <div className="text-sm text-gray-500">Calificación 5/5</div>
            </div>
          </div>
        </div>

        {/* Carousel de productos */}
        <div className="relative">
          <Carousel items={cards} />
          
          {/* Instrucción de scroll */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 text-gray-500 animate-bounce">
              <div className="h-6 w-px bg-gradient-to-b from-red-500 to-transparent" />
              <span className="text-sm font-medium">Desliza para ver más productos</span>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600">
              Tenemos más de 50 productos diferentes. ¡Contáctanos para un catálogo completo!
            </p>
            <ContactButton
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 
              text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl"
              message="Hola, me gustaría ver el catálogo completo de productos"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Ver catálogo completo
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}