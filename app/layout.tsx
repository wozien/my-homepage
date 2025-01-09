import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wozien's HomePage",
  description: "A project list from Github user https://github.com/wozien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
