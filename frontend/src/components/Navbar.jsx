"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "home" },
    { name: "Services", link: "cards" },
    { name: "About Us", link: "services" },
    { name: "Contact", link: "steps" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex gap-6">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleScroll(item.link)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Get Started</NavbarButton>
            <NavbarButton variant="primary">Book a Call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => {
                  handleScroll(item.link);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg text-neutral-600 dark:text-neutral-300 hover:text-indigo-500 transition-colors py-2"
              >
                {item.name}
              </button>
            ))}

            <div className="flex w-full flex-col gap-3 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a Call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
