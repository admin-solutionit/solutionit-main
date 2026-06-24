"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Oracle ERP Staffing",
    href: "/oracle-erp-practice",
    dropdown: [
      {
        label: "Oracle EBS and Fusion/Cloud Staffing",
        href: "/oracle-erp-practice",
      },
      {
        label: "Remote Oracle Staffing",
        href: "/oracle-erp-practice/remote-staffing",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Technology Talent Solutions", href: "/technology-staffing" },
  {
    label: "Careers",
    href: "/careers",
    dropdown: [
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Current Openings",
        href: "/careers/current-openings",
      },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    // check initial position
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SolutionIT"
              width={250}
              height={48}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop links — centered */}
          <div className="hidden lg:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return link.dropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.href ? null : link.href,
                      )
                    }
                    className={`relative flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive ? "text-navy" : "text-deep-blue hover:text-navy"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-navy"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-grey-2/40 py-2"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-grey-1 hover:text-deep-blue hover:bg-beige transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive ? "text-navy" : "text-deep-blue hover:text-navy"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-navy"
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Contact CTA — right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <motion.div
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="/contact?service=oracle-staffing"
                className="inline-flex items-center bg-navy text-white text-base font-medium px-5 py-1.5 rounded-full hover:bg-navy-hover transition-colors duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-lg text-deep-blue hover:bg-grey-2/20 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white border-t border-grey-2/30 shadow-lg"
          >
            <div className="container-site py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {link.dropdown ? (
                    <>
                      <span
                        className={`block px-3 py-3 text-sm font-medium ${pathname.startsWith(link.href) ? "text-navy" : "text-deep-blue"}`}
                      >
                        {link.label}
                      </span>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-6 py-2.5 text-sm text-grey-1 hover:text-deep-blue transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-3 text-sm font-medium transition-colors ${pathname === link.href ? "text-navy" : "text-deep-blue hover:text-navy"}`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="mt-3">
                <Link
                  href="/contact?service=oracle-staffing"
                  className="block bg-navy text-white text-sm font-medium px-4 py-3 rounded-xl text-center hover:bg-navy-hover transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
