"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useQuery } from "@tanstack/react-query";
import { getAllAwsPartners } from "@/lib/api";

const PartnerSkeleton = () => (
  <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 2xl:w-1/6 px-4 md:px-6 lg:px-8">
    <div className="relative w-full h-[160px] 2xl:h-[176px] flex flex-col items-center justify-center">
      <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
    </div>
  </div>
);

export const AWSPartnerCarousel: React.FC = () => {
  const { data: partnerBadges, isLoading } = useQuery<ApiResponse<AwsPartner[]>>({
    queryKey: ["partners"],
    queryFn: getAllAwsPartners,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps", duration: 50 },
    [Autoplay({ delay: 4000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

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
        <div className="flex">
          {isLoading
            ? // Show skeleton loading state
              Array.from({ length: 6 }).map((_, index) => (
                <PartnerSkeleton key={index} />
              ))
            : partnerBadges?.data.map((badge: AwsPartner) => (
                <div
                  className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 2xl:w-1/6 px-4 md:px-6 lg:px-8"
                  key={badge.id}
                >
                  <div className="relative w-full h-[160px] 2xl:h-[176px] flex flex-col items-center justify-center">
                    <Image
                      src={badge.image}
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
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -translate-y-1/2 -left-[3rem] z-10"
          aria-label="Previous slide"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-[#764af1]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isLoading}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="absolute top-1/2 -translate-y-1/2 -right-[3rem] z-10"
          aria-label="Next slide"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
