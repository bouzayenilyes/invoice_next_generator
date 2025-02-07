import {
  US,
  EU,
  TN,
  GB,
  FlagComponent,
} from "country-flag-icons/react/1x1";

export const currencyList: {
  value: string;
  label: string;
  details: {
    country: string;
    currencySymbol: string;
    currencyName: string;
    currencyShortForm: string;
    icon: FlagComponent;
    iconName: string;
  };
}[] = [
  {
    value: "TND",
    label: "TND",
    details: {
      country: "Tunisia",
      currencySymbol: "TND",
      currencyName: "Tunisan Dinar Currency",
      currencyShortForm: "TND ",
      icon: TN,
      iconName: "TND ",
    },
  },
  {
    value: "USD",
    label: "USD",
    details: {
      country: "United States",
      currencySymbol: "$",
      currencyName: "United States Dollar",
      currencyShortForm: "USD",
      icon: US,
      iconName: "US",
    },
  },
  {
    value: "EUR",
    label: "EUR",
    details: {
      country: "European Union",
      currencySymbol: "€",
      currencyName: "Euro",
      currencyShortForm: "EUR",
      icon: EU,
      iconName: "EU",
    },
  },
  {
    value: "GBP",
    label: "GBP",
    details: {
      country: "United Kingdom",
      currencySymbol: "£",
      currencyName: "British Pound Sterling",
      currencyShortForm: "GBP",
      icon: GB,
      iconName: "GB",
    },
  },
];
