import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy py-4">
      <div className="container-site flex items-center justify-between">
        <p className="text-white text-xs">All rights reserved</p>
        <div className="flex items-center gap-6">
          {/* <Link href="/terms" className="text-white text-xs hover:underline underline-offset-2 transition-colors">
            Terms of Service
          </Link> */}
          <Link
            href="/privacy"
            className="text-white text-xs hover:underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
