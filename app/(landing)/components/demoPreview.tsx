import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Ilyes Bouzayen",
    companyAddress: "MSIT Consult",
    companyCity: "MSIT Consult",
    companyState: "TUN",
    companyCountry: "Tunisia",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "4000",
    email: "support@msit.org",
  },
  yourDetails: {
    yourName: "Ilyes Bouzayen",
    yourAddress: "Enfidha",
    yourCity: "Susah",
    yourState: "Susah",
    yourCountry: "Tunisia",
    yourLogo: "/pranav.png",
    yourEmail: "hi@neovimmer.com",
    yourTaxId: "",
    yourZip: "4030",
  },
  paymentDetails: {
    bankName: "Easy Bank",
    accountNumber: "1234567890",
    accountName: "Ilyes Bouzayen",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    currency: "TND",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #001",
    issueDate: "Fri Apr 19 2025 00:00:00 GMT+1 (Paris Standard Time)",
    dueDate: "Mon Apr 22 2025 00:00:00 GMT+1 (Paris Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2025 to 20/04/2025",
    discount: "22000",
    taxRate: "19",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 2500,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 2200,
        qty: 0,
      },
    ],
    currency: "TND",
  },
};
export default DemoPreview;
