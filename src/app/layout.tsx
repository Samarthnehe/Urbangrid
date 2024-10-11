import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbangrid.com"),
  keywords: [
    "urbangrid",
    "office spaces",
    "rent",
    "office",
    "rent office space",
  ],
  title: {
    default: "Urbangrid - Rent your office space",
    template: "%s | Urbangrid-",
  },
  openGraph: {
    description: "Rent office spaces all across India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
