"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface PartnerBadge {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const partnerBadges: PartnerBadge[] = [
  { id: 1, src: "/image_16.png", alt: "AWS Partner - Advertising and Marketing Technology", description: "Advertising and Marketing Technology" },
  { id: 2, src: "/image_18.png", alt: "AWS Partner - SAP Services Competency", description: "SAP Services Competency" },
  { id: 3, src: "/image_18.png", alt: "AWS Partner - Amazon EMR Delivery", description: "Amazon EMR Delivery" },
  { id: 4, src: "/image_16.png", alt: "AWS Partner - IoT Services Competency", description: "IoT Services Competency" },
  { id: 5, src: "/image_16.png", alt: "AWS Partner - Amazon CloudFront Delivery", description: "Amazon CloudFront Delivery" },
  { id: 6, src: "/image_16.png", alt: "AWS Partner - AWS Control Tower Delivery", description: "AWS Control Tower Delivery" },
  { id: 7, src: "/image_16.png", alt: "AWS Partner - Data & Analytics Competency", description: "Data & Analytics Competency" },
  { id: 8, src: "/image_18.png", alt: "AWS Partner - Machine Learning Competency", description: "Machine Learning Competency" },
];

export const AWSPartnerCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', duration: 50 },
    [Autoplay({ delay: 4000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onResize = () => setScrollSnaps(emblaApi.scrollSnapList());
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onResize);
    emblaApi.on("resize", onResize);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onResize);
      emblaApi.off("resize", onResize);
    };
  }, [emblaApi]);

  return (
    <section className="relative py-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8" style={{ marginLeft: '-1rem' }}>
          {partnerBadges.map((badge) => (
            <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pl-4" key={badge.id}>
                <div className="relative w-full h-[160px] flex flex-col items-center justify-center">
                    <Image
                        src={badge.src}
                        alt={badge.alt}
                        width={176}
                        height={176}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-8 gap-6">
        <button onClick={scrollPrev} className="absolute top-1/2 -translate-y-1/2 -left-[3rem] z-10 " aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === selectedIndex ? "bg-[#764af1] " : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

        <button onClick={scrollNext} className="absolute top-1/2 -translate-y-1/2 -right-[3rem] z-10 " aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
      </div>
    </section>
  );
};
