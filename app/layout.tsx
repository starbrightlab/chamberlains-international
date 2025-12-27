import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chamberlains Real Estate International & Preserve Property Management | Central Florida",
  description: "Expert real estate services and professional property management in Champions Gate, Davenport, and Kissimmee, Florida. Serving local and international clients since 2003.",
  keywords: "Florida real estate, property management, Champions Gate, Davenport, Kissimmee, vacation rentals, international real estate, Orlando property",
  openGraph: {
    title: "Chamberlains Real Estate International & Preserve Property Management",
    description: "Your gateway to Florida real estate - Expert services for buyers, sellers, and property owners",
    url: "https://chamberlainsinternational.com",
    siteName: "Chamberlains Real Estate International",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
