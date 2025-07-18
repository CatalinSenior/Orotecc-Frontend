"use client"

import React, { useState } from 'react'
import Container from '../Container'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { getAllServices } from '@/lib/api';

const Services = () => {
  const t = useTranslations('Services');
  const { data: serviceCards } = useQuery<ApiResponse<Service[]>>({
    queryKey: ['services'],
    queryFn: getAllServices,
  });

  const FlippingIcon = ({ hovered }: { hovered: boolean }) => (
    <span className="relative w-6 h-6 flex items-center justify-center" style={{ perspective: 200 }}>
      <motion.span
        className="absolute inset-0 w-6 h-6 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front face */}
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <ArrowDownRight />
        </span>
        {/* Back face */}
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <ArrowUpRight />
        </span>
      </motion.span>
    </span>
  );

  const ServiceCard = ({ card }: { card: Service }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        className="bg-white rounded-xl border w-full transition-shadow duration-500 hover:shadow-lg relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="p-6">
          <div
            className={`flex w-12 h-12 items-center justify-center ${card.icon} rounded-[30px] mb-4`}
          >
            <Image
              className="w-7 h-7"
              alt={card.title}
              src={card.icon}
              width={28}
              height={28}
            />
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-[#010101] mb-2">
              {card.title}
            </h4>
            <FlippingIcon hovered={hovered} />
          </div>
          <p className="text-[#686e7b]">{card.description}</p>
        </div>
        {/* Animated iconBg bar at the bottom */}
        <motion.div
          className={`absolute left-0 bottom-0 w-full ${card.icon}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            height: hovered ? 12 : 0, // 12px ~ h-3
          }}
          transition={{ duration: 0.5 }}
          style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}
        />
      </div>
    );
  };

  return (
    <section className=" pt-16">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[#764af1] text-xl font-bold tracking-[1.60px] text-left mb-4">
            {t('title').toUpperCase()}
          </h2>
          <h3 className="text-4xl font-semibold text-left text-[#3b3f48]">
            {t('subtitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {serviceCards?.data.map((card: Service, index: number) => (
            <ServiceCard key={index} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services