"use client";

import Hero from "@/components/Hero";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container";

const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .min(1, "Mobile Number is required")
    .refine((value) => value && isValidPhoneNumber(value), {
      message: "Invalid phone number",
    }),
  message: z.string().min(1, "Message is required"),
});

type ContactForm = z.infer<typeof contactSchema>;

function ContactPage() {
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
        title="Let's Start a Conversation"
        subtitle="Have a question, project in mind, or just want to connect? We're here to help."
        bannerImage="/Layer_1.png"
        bannerAlt="Conversation Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"
      />
      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto mt-20 mb-20">
        <h2 className="font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-[#686E7B] mb-8 lg:text-lg">
          Fill out the form below and our team will get back to you within 24
          hours.
        </p>
        <form
          className="py-6 space-y-10"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-semibold mb-2">
                First Name *
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
                Last Name *
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
                Email address *
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
                Mobile Number *
              </label>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-base font-semibold mb-2">
              Message *
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
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm mt-2">
                Thank you! Your message has been sent.
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
          Contact Details
        </h3>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-lg text-center tracking-[0] leading-[27px] mt-4">
          Reach us through any of the following channels below.
        </p>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">HEADQUARTER</h4>
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
                Al Manera Tower, Office 2313,
                {/* <br /> */}
                Business Bay, Dubai
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">CALL US</h4>
            <div className="flex gap-3">
              <span className="w-[18px] h-[18px]">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" clipPath="url(#clip0_2924_1276)">
                    <path d="M11.9924 4.25C12.725 4.39292 13.3982 4.75119 13.926 5.27895C14.4537 5.80671 14.812 6.47995 14.9549 7.2125M11.9924 1.25C13.5144 1.41908 14.9336 2.10063 16.0171 3.18276C17.1006 4.26488 17.7839 5.68326 17.9549 7.205M17.2049 13.19V15.44C17.2058 15.6489 17.163 15.8556 17.0793 16.047C16.9956 16.2384 16.8729 16.4102 16.719 16.5514C16.565 16.6926 16.3833 16.8001 16.1855 16.867C15.9876 16.9339 15.7779 16.9588 15.5699 16.94C13.262 16.6892 11.0452 15.9006 9.09741 14.6375C7.28528 13.486 5.74891 11.9496 4.59741 10.1375C3.32989 8.1809 2.54109 5.95325 2.29491 3.635C2.27616 3.4276 2.30081 3.21857 2.36728 3.02122C2.43375 2.82387 2.54058 2.64252 2.68098 2.48872C2.82138 2.33491 2.99226 2.21203 3.18275 2.12789C3.37324 2.04375 3.57916 2.0002 3.78741 2H6.03741C6.40139 1.99642 6.75425 2.12531 7.03023 2.36265C7.3062 2.59999 7.48646 2.92959 7.53741 3.29C7.63237 4.01005 7.80849 4.71705 8.06241 5.3975C8.16331 5.66594 8.18515 5.95769 8.12534 6.23816C8.06552 6.51863 7.92655 6.77608 7.72491 6.98L6.77241 7.9325C7.84007 9.81016 9.39475 11.3648 11.2724 12.4325L12.2249 11.48C12.4288 11.2784 12.6863 11.1394 12.9667 11.0796C13.2472 11.0198 13.539 11.0416 13.8074 11.1425C14.4879 11.3964 15.1949 11.5725 15.9149 11.6675C16.2792 11.7189 16.612 11.9024 16.8498 12.1831C17.0877 12.4638 17.214 12.8222 17.2049 13.19Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2924_1276">
                      <rect width="18" height="18" fill="white" transform="translate(0.704834 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="text-[#3B3F48}">+971 556677555</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">EMAIL US</h4>
            <div className="flex gap-3">
              <span className="w-[18px] h-[18px]">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M3.70483 3.5H15.7048C16.5298 3.5 17.2048 4.175 17.2048 5V14C17.2048 14.825 16.5298 15.5 15.7048 15.5H3.70483C2.87983 15.5 2.20483 14.825 2.20483 14V5C2.20483 4.175 2.87983 3.5 3.70483 3.5Z" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.2048 5L9.70483 10.25L2.20483 5" stroke="#764af1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </span>
              <p className="text-[#3B3F48}">info@orotecc.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#3B3F48]">JOIN OUR NETWORK</h4>
            <div className="flex gap-3  mb-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-[#764af1] rounded-full flex items-center justify-center transition-colors hover:bg-purple-700"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 bg-[#764af1] rounded-full flex items-center justify-center transition-colors hover:bg-purple-700"
              >
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-[#764af1] rounded-full flex items-center justify-center transition-colors hover:bg-purple-700"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
