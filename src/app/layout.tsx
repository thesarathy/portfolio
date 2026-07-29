import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sarathy S P | AI/ML Engineer",
  description:
    "Portfolio of Sarathy S P — AI/ML Engineer building deep learning systems for disease detection, flight risk assessment, and customer analytics.",
  metadataBase: new URL("https://sarathy.dev"), // update once domain is live
  openGraph: {
    title: "Sarathy S P | AI/ML Engineer",
    description:
      "Deep learning, research, and applied ML projects by Sarathy S P.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarathy S P | AI/ML Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}