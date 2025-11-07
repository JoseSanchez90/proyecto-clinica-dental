import localFont from "next/font/local";

export const chillax = localFont({
  src: [
    { path: "./chillax/Chillax-Extralight.woff2", weight: "200" },
    { path: "./chillax/Chillax-Light.woff2", weight: "300" },
    { path: "./chillax/Chillax-Regular.woff2", weight: "400" },
    { path: "./chillax/Chillax-Medium.woff2", weight: "500" },
    { path: "./chillax/Chillax-Semibold.woff2", weight: "600" },
    { path: "./chillax/Chillax-Bold.woff2", weight: "700" },
    { path: "./chillax/Chillax-Variable.woff2", weight: "100 900" },
  ],
  variable: "--font-chillax",
  display: "swap",
});
