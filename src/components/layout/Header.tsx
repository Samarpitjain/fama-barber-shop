"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-barber-dark/95 backdrop-blur-sm py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-barber-gold text-2xl font-bold">
            Fama<span className="text-white font-light"> Barber</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-barber-gold transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Phone and Book Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+19406129127"
            className="flex items-center space-x-2 text-gray-300 hover:text-barber-gold"
          >
            <Phone size={18} />
            <span>+1 940-612-9127</span>
          </a>
          <Button className="btn-primary">
            <Link href="#contact">Book an Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="text-barber-gold hover:bg-transparent hover:text-barber-gold"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-barber-dark border-barber-gold/30">
              <div className="flex flex-col space-y-6 mt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl text-gray-300 hover:text-barber-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-barber-gold/30">
                  <a
                    href="tel:+19406129127"
                    className="flex items-center space-x-2 text-gray-300 hover:text-barber-gold mb-4"
                  >
                    <Phone size={18} />
                    <span>+1 940-612-9127</span>
                  </a>
                  <Button className="btn-primary w-full">
                    <Link href="#contact">Book an Appointment</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
