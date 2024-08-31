import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/ui-components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DHARA",
  description: "Digital Hub for Advanced Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  style={{ backgroundColor: 'rgb(2, 6, 23)' }} className={inter.className}>{children}
      <Navbar />
      </body>
    </html>
  );
}
