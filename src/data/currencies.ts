export interface CurrencyInfo {
  code: string
  symbol: string
  rate: number
}

export const exchangeRates: Record<string, number> = {
  USD: 1,
  GHS: 15.2,
  GBP: 0.79,
  EUR: 0.93,
  NGN: 1540,
  ZAR: 18.5,
  KES: 130,
  CAD: 1.37,
  AUD: 1.53,
}

export const countryCurrency: Record<string, string> = {
  US: "USD",
  GH: "GHS",
  GB: "GBP",
  DE: "EUR", FR: "EUR", IT: "EUR", ES: "EUR", NL: "EUR",
  NG: "NGN",
  ZA: "ZAR",
  KE: "KES",
  CA: "CAD",
  AU: "AUD",
}

export const currencySymbols: Record<string, string> = {
  USD: "$",
  GHS: "₵",
  GBP: "£",
  EUR: "€",
  NGN: "₦",
  ZAR: "R",
  KES: "KSh",
  CAD: "C$",
  AUD: "A$",
}

export const currencyLocales: Record<string, string> = {
  USD: "en-US",
  GHS: "en-GH",
  GBP: "en-GB",
  EUR: "de-DE",
  NGN: "en-NG",
  ZAR: "en-ZA",
  KES: "en-KE",
  CAD: "en-CA",
  AUD: "en-AU",
}
