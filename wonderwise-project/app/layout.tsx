import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nunito } from "next/font/google"; 
import Navbar from "./components/navbar/navbar";
import Modal from "./components//modals/Modal";
// import ClientOnly from "./components/ClientOnly";

const font = Nunito (
  {
    subsets: ["latin"], 
  }
)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WonderWise",
  description: "WonderWise booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${font.className} antialiased`}
        >
        <Modal/>
        <Navbar/>
        {/* <ClientOnly> // om det blir problem med upplandningen av sidan, använd denna komponent

        </ClientOnly> */}


        {children}
      </body>
    </html>
  );
}
