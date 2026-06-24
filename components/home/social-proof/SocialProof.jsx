"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel/Carousel";

const logos = [
  { id: "1", src: "/images/logos/aerov.webp", alt: "AeroVironment" },
  {
    id: "2",
    src: "/images/logos/bearing-point.webp",
    alt: "BearingPoint",
    h: "max-h-16",
  },
  {
    id: "3",
    src: "/images/logos/wendy.webp",
    alt: "Wendy's",
    h: "max-h-16",
  },
  { id: "4", src: "/images/logos/autsmus.webp", alt: "AUTØMUS", h: "max-h-8" },
  {
    id: "5",
    src: "/images/logos/trinamix.webp",
    alt: "trinamiX",
    h: "max-h-16",
  },
  // Duplicated for seamless loop
  { id: "6", src: "/images/logos/aerov.webp", alt: "AeroVironment" },
  {
    id: "7",
    src: "/images/logos/bearing-point.webp",
    alt: "BearingPoint",
    h: "max-h-16",
  },
  {
    id: "8",
    src: "/images/logos/wendy.webp",
    alt: "Wendy's",
    h: "max-h-16",
  },
  { id: "9", src: "/images/logos/autsmus.webp", alt: "AUTØMUS", h: "max-h-8" },
  {
    id: "10",
    src: "/images/logos/trinamix.webp",
    alt: "trinamiX",
    h: "max-h-16",
  },
];

export default function SocialProof() {
  return (
    <section className="pt-4 pb-8 md:pb-10 bg-white">
      <p
        className="text-center text-grey-1 font-medium tracking-wide mb-5"
        style={{ fontSize: "16px" }}
      >
        Trusted by Leading Enterprises
      </p>

      <div className="relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-0 flex justify-center"
              >
                <div className="mx-8 md:mx-12 flex items-center justify-center py-2">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={48}
                    className={`w-auto ${logo.h ?? "max-h-10"} object-contain grayscale opacity-80 select-none`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
