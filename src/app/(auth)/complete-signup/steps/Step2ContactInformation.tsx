import React from "react";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const countryOptions = [
  { value: "AE", label: "United Arab Emirates", code: "+971" },
  { value: "US", label: "United States", code: "+1" },
  { value: "GB", label: "United Kingdom", code: "+44" },
  { value: "IN", label: "India", code: "+91" },
];

type Step2ContactInformationProps = {
  onNext: (data: Record<string, unknown>) => void;
  onPrevious: () => void;
};

const Step2ContactInformation = ({ onNext, onPrevious }: Step2ContactInformationProps) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [agree, setAgree] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(countryOptions[0]);
  const usage = watch("usage", "personal");

  const onSubmit = (data: Record<string, unknown>) => {
    onNext(data);
  };

  const handleCountryChange = (val: string) => {
    setSelectedCountry(countryOptions.find((c) => c.value === val) || countryOptions[0]);
  };

  return (
    <div className="min-h-screen  w-full">
      {/* Left side */}
      {/* <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#6a4cff] to-[#764af1]">
        <div className="w-full max-w-xs rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Free Tier offers</h3>
          <p className="text-sm mb-5">All AWS accounts can explore 3 different types of free offers, depending on the product used.</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src="/free.png" alt="Always free" width={32} height={32} />
              <div>
                <div className="font-semibold">Always free</div>
                <div className="text-xs opacity-80">Never expires</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/calendar.png" alt="12 months free" width={32} height={32} />
              <div>
                <div className="font-semibold">12 months free</div>
                <div className="text-xs opacity-80">Start from initial sign-up date</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/timer.png" alt="Trials" width={32} height={32} />
              <div>
                <div className="font-semibold">Trials</div>
                <div className="text-xs opacity-80">Start from service activation date</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Right side */}
      <div className="flex flex-col justify-center items-center py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[520px] p-10 flex flex-col gap-5">
          <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px]">
            Sign up for Orotecc
          </h3>
          <div>
            <h4 className="text-xl font-semibold text-[#222] mb-1">Contact Information</h4>
            <Label className="text-base font-normal text-[#222] mb-2 block">How do you plan to use Orotecc?</Label>
            <RadioGroup
              defaultValue={usage}
              onValueChange={val => setValue("usage", val)}
              className="flex flex-col gap-2 mb-2"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business" className="text-base font-normal text-[#686e7b]">Business - for your work, school, or organization</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal" className="text-base font-normal text-[#686e7b]">Personal - for your own projects</Label>
              </div>
            </RadioGroup>
          </div>
          <Label className="text-base font-normal text-[#686e7b] mb-2 block">Who should we contact about this account?</Label>
          <div>
            <Label htmlFor="fullName" className="block text-base font-semibold text-[#222] mb-1">Full Name</Label>
            <input {...register("fullName")} id="fullName" type="text" placeholder="Full Name" className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
          </div>
          <div className="flex gap-4">
            <div className="w-1/3">
              <Label htmlFor="countryCode" className="block text-base font-semibold text-[#222] mb-1">Country Code</Label>
              <Select
                value={selectedCountry.value}
                onValueChange={handleCountryChange}
              >
                <SelectTrigger id="countryCode" className="w-full">
                  <SelectValue placeholder="Select code">{selectedCountry.code}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((c) => (
                    <SelectItem key={c.value} value={c.value}>{c.code} {c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="phoneNumber" className="block text-base font-semibold text-[#222] mb-1">Phone Number</Label>
              <input {...register("phoneNumber")} id="phoneNumber" type="text" placeholder="050-555-5555" className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
            </div>
          </div>
          <div>
            <Label htmlFor="country" className="block text-base font-semibold text-[#222] mb-1">Country or Region</Label>
            <Select
              value={selectedCountry.value}
              onValueChange={handleCountryChange}
            >
              <SelectTrigger id="country" className="w-full">
                <SelectValue placeholder="Select a country">{selectedCountry.label}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((c) => (
                  <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="address1" className="block text-base font-semibold text-[#222] mb-1">Address line 1</Label>
            <input {...register("address1")} id="address1" type="text" className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
          </div>
          <div>
            <Label htmlFor="address2" className="block text-base font-semibold text-[#222] mb-1">Address line 2</Label>
            <input {...register("address2")} id="address2" type="text" placeholder="Apartment, suite, unit, building, floor, etc." className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="city" className="block text-base font-semibold text-[#222] mb-1">City</Label>
              <input {...register("city")} id="city" type="text" className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
            </div>
            <div className="flex-1">
              <Label htmlFor="state" className="block text-base font-semibold text-[#222] mb-1">State, Province, or Region</Label>
              <input {...register("state")} id="state" type="text" className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
            </div>
          </div>
          <div>
            <Label htmlFor="postalCode" className="block text-base font-semibold text-[#222] mb-1">Postal Code</Label>
            <input {...register("postalCode")} id="postalCode" type="text" className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-[4px] text-base bg-white focus:outline-none focus:border-[#6a4cff]" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input className="w-4 h-4" type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <span className="text-sm">I have read and agree to the terms of the Orotecc Customer Agreement</span>
          </div>
          <button type="submit" className="w-full py-3 bg-[#6a4cff] text-white rounded-3xl text-base font-semibold cursor-pointer mt-2 hover:bg-[#5739d6] transition">
            Agree and continue (step 2 of 5)
          </button>
          <button type="button" onClick={onPrevious} className="w-full py-3 bg-white text-[#010101] border border-[#010101] rounded-3xl text-base font-semibold cursor-pointer hover:bg-[#f6f6fa] hover:text-[#6a4cff] hover:border-[#6a4cff] transition">
            Previous
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step2ContactInformation; 