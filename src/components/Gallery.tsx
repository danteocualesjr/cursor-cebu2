"use client";

import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    alt: "Workshop opening — Jan 17, 2025",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 2,
    alt: "Hands-on Cursor session",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    id: 3,
    alt: "Speaker presentation",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    id: 4,
    alt: "Community networking",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
  },
  {
    id: 5,
    alt: "Pair programming session",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: 6,
    alt: "Group photo",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-xs font-medium tracking-widest text-white/40 uppercase sm:mb-3 sm:text-sm">
            Gallery
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Moments from
            <br />
            <span className="text-white/50">our community.</span>
          </h2>
        </div>

        {/* Gallery grid - 3 columns */}
        <div className="grid grid-cols-2 gap-3 min-[640px]:grid-cols-3 sm:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5 sm:rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Caption on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-2 transition-transform duration-300 group-hover:translate-y-0 sm:p-4">
                <p className="text-xs font-medium text-white sm:text-sm">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[10px] text-white/30 sm:mt-6 sm:text-sm">
          Photos from the Cursor Community Cebu Launch Workshop — January 17, 2025
        </p>
      </div>
    </section>
  );
}
