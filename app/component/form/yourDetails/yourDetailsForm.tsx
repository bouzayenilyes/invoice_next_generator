import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Your Details (From)</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. yourname@gmail.com"
      variableName="yourEmail"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the your.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Your Name"
      placeholder="Put Your name Please"
      variableName="yourName"
    />
    <ImageInput label="Logo" variableName="yourLogo" />
    <CustomTextInput
      label="Address"
      placeholder="Put Your Address"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="Put Your City"
      variableName="yourCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Put Your State"
      variableName="yourState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="Put Your Zip"
      variableName="yourZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="your Country"
      variableName="yourCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder="Put Your Tax ID"
      variableName="yourTaxId"
    />
  </div>
);
