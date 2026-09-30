import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "SnipLinks: URL Shortner",
  description: "Shorten your URLs easily with SnipLinks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Background>
          <Navbar />
          <Toaster
            toastOptions={{
              style: { background: "#111827", color: "#fff", border: "1px solid #6d28d9" },
            }}
          />
          {children}
        </Background>
      </body>
    </html>
  );
}