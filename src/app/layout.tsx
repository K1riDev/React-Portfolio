import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Oscar | Portfolio",
  description: "Este es el portfolio de Oscar, desarrollador Junior.",
  keywords: [
    "kiri86",
    "junior",
    "developer",
    "frontend",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/og-image.png" />

        <meta property="twitter:image" content="0" />

        <meta property="og:title" content="Oscar | Portfolio" />

        <meta
          property="og:description"
          content="Este es el portfolio de Oscar, desarrollador Junior."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
