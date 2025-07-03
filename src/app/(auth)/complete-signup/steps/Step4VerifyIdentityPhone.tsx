import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PhoneInput } from "@/components/ui/phone-input";

interface Step4VerifyIdentityPhoneProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  control: Control<Record<string, unknown>>;
  errors?: FieldErrors<Record<string, unknown>>;
}

export default function Step4VerifyIdentityPhone({ onSubmit, control }: Step4VerifyIdentityPhoneProps) {
  const [method, setMethod] = React.useState<string>("sms");

  return (
    <form className="w-full max-w-[520px] p-10 flex flex-col gap-5" onSubmit={onSubmit}>
      <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px] mb-2">
        Sign up for Orotecc
      </h3>
      <div className="flex flex-col gap-1 mb-2">
        <span className="text-lg font-semibold text-[#222]">Verify your identity</span>
        <span className="text-sm text-[#686e7b] font-normal">
          To activate your Orotecc account, we need to confirm your phone number.<br />
          Once you proceed, our system will reach out with a one-time verification code.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-base font-medium text-[#222] mb-1">Choose how you&apos;d like to receive your code:</Label>
        <RadioGroup value={method} onValueChange={setMethod} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="sms" id="sms" />
            <Label htmlFor="sms" className="text-base font-normal text-[#222]">SMS (Text message)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="voice" id="voice" />
            <Label htmlFor="voice" className="text-base font-normal text-[#222]">Voice Call</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="mobile" className="text-base font-medium text-[#222] mb-1">Mobile Number</Label>
        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              international={true}
              id="mobile"
              placeholder="Enter a phone number"
              className="w-full border border-[#E5E7EB] py-0.5 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400 ring-0"
              value={typeof field.value === 'string' ? field.value : ''}
            />
          )}
        />
      </div>
      {/* reCAPTCHA placeholder */}
      <div className="w-full h-[78px] bg-[#f5f5f5] border border-[#e5e7eb] rounded-md flex items-center justify-center text-[#686e7b] text-sm">
        reCAPTCHA goes here
      </div>
      <Button type="submit" className="w-full bg-[#7B3AED] hover:bg-[#6c2ed7] text-white text-base font-semibold rounded-full h-12 mt-2">
        Send SMS (step 4 of 5)
      </Button>
    </form>
  );
} 