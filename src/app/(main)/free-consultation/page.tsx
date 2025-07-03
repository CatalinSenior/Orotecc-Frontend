"use client";

import Hero from "@/components/Hero";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const consultationSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .min(1, "Mobile Number is required")
    .refine((value) => value && isValidPhoneNumber(value), {
      message: "Invalid phone number",
    }),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().min(1, "Message is required"),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

const SERVICES = [
  "Cloud Infrastructure",
  "DevOps & Automation",
  "Cloud Apps",
  "Cloud Security",
  "Data Analytics & AI",
  "Multi-Cloud Solutions",
  "AWS Solutions",
  "Managed Cloud",
  "Other",
];

function FreeConsultationPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { services: [] },
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <main>
      <Hero
        title="Free Consultation"
        subtitle="Let's find the right approach together"
        bannerImage="/Layer_1.png"
        bannerAlt="Consultation Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"
      />
      <section className="max-w-3xl mx-auto mt-20 mb-20">
        <h2 className="font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl text-center mb-4">
          Book a free consultation
        </h2>
        <p className="text-center text-[#686E7B] mb-8 lg:text-lg">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
        <form
          className="py-6 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-semibold mb-2">First Name *</label>
              <input
                {...register("firstName")}
                type="text"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">Last Name *</label>
              <input
                {...register("lastName")}
                type="text"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
            <div>
              <label className="block text-base font-semibold mb-2">Company Name</label>
              <input
                {...register("companyName")}
                type="text"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">Email address *</label>
              <input
                {...register("email")}
                type="email"
                className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">Mobile Number *</label>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international={true}
                    id="mobile"
                    placeholder="Enter a phone number"
                    className="w-full border border-[#E5E7EB] py-0.5 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400 ring-0  "
                  />
                )}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
              )}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2.5">Service(s) interested in *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                {SERVICES.map((service) => (
                  <label key={service} className="flex items-center gap-2 text-sm text-[#3B3F48] font-semibold">
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                      className="accent-[#764af1] w-5 h-5 rounded"
                    />
                    {service}
                  </label>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-500 text-xs mt-1">{errors.services.message as string}</p>
              )}
            </div>
          <div>
            <label className="block text-base font-semibold mb-2">Message *</label>
            <textarea
              {...register("message")}
              className="w-full border border-[#E5E7EB] px-3 py-2 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none h-[100px]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 rounded-[32px] font-bold text-white cursor-pointer w-full bg-[#764af1] hover:bg-[#6a3fd5] transition-all duration-700 ease-in-out transform  origin-right hover:origin-left"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>
            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm mt-2">Thank you! Your request has been sent.</p>
            )}
          </div>
        </form>
      </section>

    </main>
  );
}

export default FreeConsultationPage;