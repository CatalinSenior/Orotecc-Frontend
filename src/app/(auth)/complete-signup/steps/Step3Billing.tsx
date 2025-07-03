import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const countryOptions = [
  { value: "AE", label: "United Arab Emirates" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "IN", label: "India" },
];
const months = [
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];
const years = Array.from({ length: 12 }, (_, i) => {
  const year = new Date().getFullYear() + i;
  return { value: String(year), label: String(year) };
});

type Step3BillingProps = {
  onNext: (data: Record<string, unknown>) => void;
  onPrevious: () => void;
};

const Step3Billing = ({ onNext }: Step3BillingProps) => {
  const { register, handleSubmit, control, setValue } = useForm();
  const [selectedCountry, setSelectedCountry] = React.useState(countryOptions[0].value);
  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [billingAddress, setBillingAddress] = React.useState("contact");

  const onSubmit = (data: Record<string, unknown>) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[520px] p-10 flex flex-col gap-5 ">
      <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px] mb-2">
        Sign up for Orotecc
      </h3>
      <h4 className="text-xl font-semibold text-[#222] mb-1">Billing Information</h4>
      <div>
        <Label htmlFor="billingCountry" className="block text-base font-semibold text-[#222] mb-1">Billing country</Label>
        <span className="block text-sm text-[#686e7b] mb-2">Your billing country determines the payment methods available to you to pay for AWS services.</span>
        <Controller
          name="billingCountry"
          control={control}
          defaultValue={selectedCountry}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={val => {
                setSelectedCountry(val);
                field.onChange(val);
              }}
            >
              <SelectTrigger id="billingCountry" className="w-full">
                <SelectValue placeholder="Select a country">
                  {countryOptions.find(c => c.value === selectedCountry)?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((c) => (
                  <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div>
        <Label htmlFor="cardNumber" className="block text-base font-semibold text-[#222] mb-1">Credit or Debit card number</Label>
        <Input {...register("cardNumber")} id="cardNumber" type="text" placeholder="" className="bg-white" />
        <span className="block text-xs text-[#686e7b] mt-1">Orotecc accepts most major credit and debit cards. To learn more about payment options, review our FAQ</span>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="expMonth" className="block text-base font-semibold text-[#222] mb-1">Expiration date</Label>
          <div className="flex gap-2">
            <Select
              value={selectedMonth}
              onValueChange={val => {
                setSelectedMonth(val);
                setValue("expMonth", val);
              }}
            >
              <SelectTrigger id="expMonth" className="w-full">
                <SelectValue placeholder="Month">{selectedMonth}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedYear}
              onValueChange={val => {
                setSelectedYear(val);
                setValue("expYear", val);
              }}
            >
              <SelectTrigger id="expYear" className="w-full">
                <SelectValue placeholder="Year">{selectedYear}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y.value} value={y.value}>{y.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
        <div className="flex-1">
          <Label htmlFor="securityCode" className="block text-base font-semibold text-[#222] mb-1">Security Code</Label>
          <Input {...register("securityCode")} id="securityCode" type="text" placeholder="CVV/CVC" className="bg-white" />
        </div>
      <div>
        <Label htmlFor="cardholderName" className="block text-base font-semibold text-[#222] mb-1">Cardholder&apos;s Name</Label>
        <Input {...register("cardholderName")} id="cardholderName" type="text" placeholder="" className="bg-white" />
      </div>
      <div>
        <Label className="block text-base font-semibold text-[#222] mb-1">Billing Address</Label>
        <RadioGroup value={billingAddress} onValueChange={setBillingAddress} className="flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <RadioGroupItem value="contact" id="contact-address" />
            <Label htmlFor="contact-address" className="text-base font-medium flex flex-col gap-1 text-start">
              Use my contact address
              <div className="text-sm text-[#686e7b] font-normal text-start">Al Manera Tower, Office 2313<br />Business Bay, Dubai</div>
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="new" id="new-address" />
            <Label htmlFor="new-address" className="text-base font-medium text-[#222]">Use a new address</Label>
          </div>
        </RadioGroup>
      </div>
      <button type="submit" className="w-full py-3 bg-[#6a4cff] text-white rounded-3xl text-base font-semibold cursor-pointer mt-2 hover:bg-[#5739d6] transition">
        Verify and continue (step 3 of 5)
      </button>
      <span className="block text-xs text-[#686e7b] mt-2">You might be redirected to your bank&apos;s website to authorize the verification charge.</span>
    </form>
  );
};

export default Step3Billing; 