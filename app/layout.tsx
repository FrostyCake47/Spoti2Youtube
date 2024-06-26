import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpotiSync",
  description: "Spotify to Youtube converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientid = process.env.NEXT_PUBLIC_CLIENT_ID ?? "";

  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}><GoogleOAuthProvider clientId={clientid}>{children}</GoogleOAuthProvider></body>
      </Providers>
    </html>
  );
}
