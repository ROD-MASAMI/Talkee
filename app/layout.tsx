import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard template",
  description: "created by codeblocks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          " min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem={false}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
