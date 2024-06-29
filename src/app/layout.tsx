import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paper Whisper",
  description: "Notes that help your to organize your day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Toaster 
        toastOptions={{
          style: {
            textAlign:"center",
          },
        }}
        />
        
      </body>
    </html>
  );
}
