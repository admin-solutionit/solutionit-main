import "./globals.css";
import { Nunito_Sans, PT_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
  display: "swap",
  adjustFontFallback: false,
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | SolutionIT",
    default: "SolutionIT — Oracle ERP Human Capital Partner",
  },
  description:
    "SolutionIT is a specialized Oracle ERP consultancy deploying EBS and Fusion Cloud consultants across enterprise engagements in North America.",
  metadataBase: new URL("https://www.solutionit.com"),
  icons: {
    // icon: "/favicon.ico",
    // shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "SolutionIT",

    title: "SolutionIT — Oracle ERP Human Capital Partner",
    description:
      "SolutionIT is a specialized Oracle ERP consultancy deploying EBS and Fusion Cloud consultants across enterprise engagements in North America.",
    url: "https://www.solutionit.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SolutionIT",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(nunitoSans.variable, ptSerif.variable, "font-sans")}
    >
      <body className="font-sans antialiased bg-white text-deep-blue">
        {children}
      </body>
    </html>
  );
}
