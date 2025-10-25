import type { Metadata } from "next";
import "./globals.css";

export const metadata = { title: "Promot", description: "Promot Technologies" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


