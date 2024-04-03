
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecordsWall from "@/components/recordswall";
import Providers from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-blue-900 text-white h-[100svh] grid grid-cols-3">
            <div>

            </div>
            <div className="flex justify-center items-center w-[400px]">
              <div className="relative h-[750px] bg-blue-200 w-full rounded-md overflow-hidden">
                {children}
              </div>
            </div>
            <RecordsWall />
          </main>
        </Providers>
      </body>
    </html>
  );
}