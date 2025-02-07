import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder="Bank Name"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account number"
      placeholder="1234567890"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Account Name"
      variableName="accountName"
    />
    <CustomTextInput
      label="IFSC code"
      placeholder="ifscCode"
      variableName="ifscCode"
    />
    <CustomTextInput
      label="Routing number"
      placeholder="Routing Code"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="Swift Code"
      variableName="swiftCode"
    />
  </div>
);
