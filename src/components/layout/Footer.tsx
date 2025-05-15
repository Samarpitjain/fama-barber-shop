import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding & Description */}
          <div>
            <Link href="/" className="block mb-4">
              <span className="text-barber-gold text-2xl font-bold">
                Fama<span className="text-white font-light"> Barber</span>
              </span>
            </Link>
            <p className="mb-6">
              Classic cuts with modern style. Fama Barber Shop and Beauty Salon provides premium grooming services in a welcoming environment.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/pmcbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-barber-dark flex items-center justify-center text-barber-gold hover:bg-barber-gold hover:text-barber-dark transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.instagram.com/pmcbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-barber-dark flex items-center justify-center text-barber-gold hover:bg-barber-gold hover:text-barber-dark transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-white mb-6 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-barber-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl text-white mb-6 font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-barber-gold shrink-0 mt-1" size={18} />
                <span>500 N Bell Ave #109, Denton, TX 76209, United States</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-barber-gold shrink-0" size={18} />
                <a
                  href="tel:+19406129127"
                  className="hover:text-barber-gold transition-colors duration-200"
                >
                  +1 940-612-9127
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-barber-gold shrink-0 mt-1" size={18} />
                <div>
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl text-white mb-2 font-semibold">Newsletter</h3>
              <p>Subscribe to our newsletter to receive updates.</p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="border-barber-gold/30 bg-transparent focus-visible:ring-barber-gold"
              />
              <Button className="btn-primary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Fama Barber Shop and Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
