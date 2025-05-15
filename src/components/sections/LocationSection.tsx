import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">
            Conveniently located in Denton, TX:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="relative h-[400px] bg-barber-dark rounded-lg border border-barber-gold/20 overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4819891413543!2d-97.14201368481933!3d33.218785580826504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864db6cbe0cf183b%3A0xe5bda8911b06b4d9!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1715762458841!5m2!1sen!2sin"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-barber-dark p-8 rounded-lg border border-barber-gold/20">
            <h3 className="text-2xl text-barber-gold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-barber-gold/10 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="text-barber-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Address</h4>
                  <p className="text-gray-300">
                    500 N Bell Ave #109, Denton, TX 76209, United States
                  </p>
                  <Button asChild variant="link" className="px-0 text-barber-gold mt-2">
                    <a
                      href="https://maps.app.goo.gl/cV9gn2JKRdKtiLhi6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Get Directions <ExternalLink size={14} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-barber-gold/10 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="text-barber-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Phone</h4>
                  <a
                    href="tel:+19406129127"
                    className="text-gray-300 hover:text-barber-gold transition-colors"
                  >
                    +1 940-612-9127
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-barber-gold/10 flex items-center justify-center shrink-0 mr-4">
                  <Clock className="text-barber-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Business Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-2 text-green-500 font-medium">
                      Open ⋅ Closes 7 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-barber-gold/20">
              <Button asChild size="lg" className="btn-primary w-full">
                <Link href="#contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
