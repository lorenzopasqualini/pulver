import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const font = localFont({
  src: '../public/fonts/TFSpermo.otf',
  display:'swap',
})

export const metadata: Metadata = {
  title: "pulver",
  description: "pulver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
