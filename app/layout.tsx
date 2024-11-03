import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import image from "./images/some.png";
import StyledComponentsRegistry from "./lib/registry";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const bebasNeue = localFont({
  src: "./fonts/BebasNeue.woff2",
  variable: "--font-bebas-neue",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lauluyhtye Popkorni",
  description: "Lauluyhtye Popkorni on vuonna 2021 kuorolaisten itsensä perustama kupliva popkuoro suoraan Helsingin Pasilasta.",
  openGraph: {
    type: "website",
    url: "https://lauluyhtyepopkorni.fi",
    images: [
      {
        url: image.src
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${geistSans.variable} ${bebasNeue.variable} antialiased`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
