import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, Control } from "react-hook-form";
import { PhoneInput } from "@/components/ui/phone-input";
import { useTranslations } from 'next-intl';

interface Step4VerifyIdentityPhoneProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  control: Control<Record<string, unknown>>;
}

const Step4VerifyIdentityPhone = ({ control, onSubmit }: Step4VerifyIdentityPhoneProps) => {
  const t = useTranslations('CompleteSignup.Step4VerifyIdentityPhone');
  const [method, setMethod] = React.useState<string>("sms");

  return (
    <form className="w-full max-w-[520px] p-10 flex flex-col gap-5" onSubmit={onSubmit}>
      <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px] mb-2">
        {t('title')}
      </h3>
      <div className="flex flex-col gap-1 mb-2">
        <span className="text-lg font-semibold text-[#222]">Verify your identity</span>
        <span className="text-sm text-[#686e7b] font-normal">
          {t('description')}
          <br />
          {t('verification_code_info')}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-base font-medium text-[#222] mb-1">{t('choose_method_label')}</Label>
        <RadioGroup value={method} onValueChange={setMethod} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="sms" id="sms" />
            <Label htmlFor="sms" className="text-base font-normal text-[#222]">{t('sms_method')}</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="voice" id="voice" />
            <Label htmlFor="voice" className="text-base font-normal text-[#222]">{t('voice_method')}</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="mobile" className="text-base font-medium text-[#222] mb-1">{t('mobile_number_label')}</Label>
        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              international={true}
              id="mobile"
              placeholder={t('mobile_number_placeholder')}
              className="w-full border border-[#E5E7EB] py-0.5 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-400 ring-0"
              value={typeof field.value === 'string' ? field.value : ''}
            />
          )}
        />
      </div>
      {/* reCAPTCHA placeholder */}
      <div className="w-full h-[78px] bg-[#f5f5f5] border border-[#e5e7eb] rounded-md flex items-center justify-center text-[#686e7b] text-sm">
        {t('recaptcha_placeholder')}
      </div>
      <Button type="submit" className="w-full bg-[#7B3AED] hover:bg-[#6c2ed7] text-white text-base font-semibold rounded-full h-12 mt-2">{t('send_sms_button')}</Button>
    </form>
  );
};

export default Step4VerifyIdentityPhone; 