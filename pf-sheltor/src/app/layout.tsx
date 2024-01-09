import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";

import "../styles/globals.css";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });
export const lora = Lora({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
