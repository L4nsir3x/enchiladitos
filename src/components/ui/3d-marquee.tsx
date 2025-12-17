"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Aumentar el número de columnas para mayor cobertura
  const columns = 8; // Aumentado de 6 a 8
  const chunkSize = Math.ceil(images.length / columns);
  
  // Duplicar imágenes para efecto continuo
  const duplicatedImages = [...images, ...images];
  
  const chunks = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return duplicatedImages.slice(start, start + chunkSize);
  });

  return (
    <div className={cn("h-full w-full overflow-visible", className)}>
      <div className="flex justify-center items-center h-full w-full">
        {/* Contenedor más grande y ajustes de perspectiva */}
        <div
          className="grid grid-cols-8 gap-6 origin-center scale-125" // Aumentado a grid-cols-8
          style={{ 
            transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            width: "150%", // Aumentar el ancho
            height: "150%", // Aumentar la altura
          }}
        >
          {chunks.map((subarray, colIndex) => (
            <motion.div
              key={colIndex}
              animate={{ 
                y: colIndex % 2 === 0 ? 200 : -200 // Aumentar el rango de movimiento
              }}
              transition={{
                duration: colIndex % 2 === 0 ? 15 : 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              className="flex flex-col items-center gap-6"
            >
              {subarray.map((image, imageIndex) => (
                <motion.img
                  key={`${colIndex}-${imageIndex}`}
                  src={image}
                  alt={`Image ${imageIndex + 1}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-60 h-40 rounded-lg object-cover ring-2 ring-white/10 shadow-2xl hover:shadow-3xl hover:ring-white/20"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};