import { Urbanist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Mugô - Website Web",
  description: "Consultoria em I.A., Landing Pages e Automação.",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    title: "Mugô - Website Web",
    description: "Desbloqueando novas possibilidades de crescimento com I.A. e tecnologia.",
    images: ["/assets/hero logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
      </head>
      <body className={`${urbanist.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
