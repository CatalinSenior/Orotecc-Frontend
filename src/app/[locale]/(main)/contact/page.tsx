"use client";

import Hero from "@/components/Hero";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container";
import { useTranslations } from 'next-intl';

function ContactPage() {
  const t = useTranslations('Contact');

  const contactSchema = z.object({
    firstName: z.string().min(1, t('firstNameRequired')),
    lastName: z.string().min(1, t('lastNameRequired')),
    email: z.string().email(t('invalidEmail')),
    mobile: z
      .string()
      .min(1, t('mobileRequired'))
      .refine((value) => value && isValidPhoneNumber(value), {
        message: t('invalidPhone'),
      }),
    message: z.string().min(1, t('messageRequired')),
  });

  type ContactForm = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <main>
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bannerImage="/Layer_1.png"
        bannerAlt="Conversation Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"
      />
      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto mt-20 mb-20">
        <h2 className="font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center mb-4">
          {t('getInTouch')}
        </h2>
        <p className="text-center text-[#686E7B] mb-8 lg:text-lg">
          {t('formDescription')}
        </p>
        <form
          className="py-6 space-y-10"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-semibold mb-2">
                {t('firstName')} *
              </label>
              <input
                {...register("firstName")}
                type="text"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">
                {t('lastName')} *
              </label>
              <input
                {...register("lastName")}
                type="text"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-semibold mb-2">
                {t('email')} *
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">
                {t('phone')} *
              </label>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international={true}
                    id="mobile"
                    placeholder={t('phonePlaceholder')}
                    className="w-full border border-[#E5E7EB] py-0.5 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400 ring-0  "
                  />
                )}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-base font-semibold mb-2">
              {t('message')} *
            </label>
            <textarea
              {...register("message")}
              className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none h-[100px]"
              rows={4}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="">
            <button
              type="submit"
              className="px-6 py-3 rounded-[32px] font-bold text-white cursor-pointer w-fit bg-[#764af1] hover:bg-[#6a3fd5] transition-all duration-700 ease-in-out transform  origin-right hover:origin-left"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitting') : t('sendMessage')}
            </button>
            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm mt-2">
                {t('successMessage')}
              </p>
            )}
          </div>
        </form>
      </section>

      <Container>
        <Separator className="mt-12 mb-20" />
      </Container>
      {/* Contact Details Section */}
      <section className=" ">
        <h3 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">
          {t('contactDetails')}
        </h3>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-lg text-center tracking-[0] leading-[27px] mt-4">
          {t('reachUs')}
        </p>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">{t('headquarter')}</h4>
            <div className="flex gap-3">
              <span className="w-[18px] h-[18px]">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M16.4548 7.5C16.4548 12.75 9.70483 17.25 9.70483 17.25C9.70483 17.25 2.95483 12.75 2.95483 7.5C2.95483 5.70979 3.66599 3.9929 4.93186 2.72703C6.19773 1.46116 7.91462 0.75 9.70483 0.75C11.495 0.75 13.2119 1.46116 14.4778 2.72703C15.7437 3.9929 16.4548 5.70979 16.4548 7.5Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.70483 9.75C10.9475 9.75 11.9548 8.74264 11.9548 7.5C11.9548 6.25736 10.9475 5.25 9.70483 5.25C8.46219 5.25 7.45483 6.25736 7.45483 7.5C7.45483 8.74264 8.46219 9.75 9.70483 9.75Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </span>
              <p className="text-[#3B3F48}">
                {t('addressText')}
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">{t('phoneContact')}</h4>
            <div className="flex gap-3">
              <span className="w-[18px] h-[18px]">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M16.4548 7.5C16.4548 12.75 9.70483 17.25 9.70483 17.25C9.70483 17.25 2.95483 12.75 2.95483 7.5C2.95483 5.70979 3.66599 3.9929 4.93186 2.72703C6.19773 1.46116 7.91462 0.75 9.70483 0.75C11.495 0.75 13.2119 1.46116 14.4778 2.72703C15.7437 3.9929 16.4548 5.70979 16.4548 7.5Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.70483 9.75C10.9475 9.75 11.9548 8.74264 11.9548 7.5C11.9548 6.25736 10.9475 5.25 9.70483 5.25C8.46219 5.25 7.45483 6.25736 7.45483 7.5C7.45483 8.74264 8.46219 9.75 9.70483 9.75Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </span>
              <p className="text-[#3B3F48}">
                +971 556677555
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">{t('emailContact')}</h4>
            <div className="flex gap-3">
              <span className="w-[18px] h-[18px]">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M16.4548 7.5C16.4548 12.75 9.70483 17.25 9.70483 17.25C9.70483 17.25 2.95483 12.75 2.95483 7.5C2.95483 5.70979 3.66599 3.9929 4.93186 2.72703C6.19773 1.46116 7.91462 0.75 9.70483 0.75C11.495 0.75 13.2119 1.46116 14.4778 2.72703C15.7437 3.9929 16.4548 5.70979 16.4548 7.5Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.70483 9.75C10.9475 9.75 11.9548 8.74264 11.9548 7.5C11.9548 6.25736 10.9475 5.25 9.70483 5.25C8.46219 5.25 7.45483 6.25736 7.45483 7.5C7.45483 8.74264 8.46219 9.75 9.70483 9.75Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </span>
              <p className="text-[#3B3F48}">
                info@orotecc.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">{t('followUs')}</h4>
            <div className="flex gap-3">
              <span className="w-[18px] h-[18px]">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M16.4548 7.5C16.4548 12.75 9.70483 17.25 9.70483 17.25C9.70483 17.25 2.95483 12.75 2.95483 7.5C2.95483 5.70979 3.66599 3.9929 4.93186 2.72703C6.19773 1.46116 7.91462 0.75 9.70483 0.75C11.495 0.75 13.2119 1.46116 14.4778 2.72703C15.7437 3.9929 16.4548 5.70979 16.4548 7.5Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.70483 9.75C10.9475 9.75 11.9548 8.74264 11.9548 7.5C11.9548 6.25736 10.9475 5.25 9.70483 5.25C8.46219 5.25 7.45483 6.25736 7.45483 7.5C7.45483 8.74264 8.46219 9.75 9.70483 9.75Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </span>
              <p className="text-[#3B3F48}">
                {t('socialMedia')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
