import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-barber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Ready for a fresh look? Book your appointment today or contact us for any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black p-8 rounded-lg border border-barber-gold/20">
            <h3 className="text-2xl text-barber-gold mb-6">Contact Us</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="border-barber-gold/30 bg-transparent focus-visible:ring-barber-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="(123) 456-7890"
                    className="border-barber-gold/30 bg-transparent focus-visible:ring-barber-gold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-300 mb-2">
                  Service Interested In
                </label>
                <Input
                  id="service"
                  placeholder="Haircut, Beard Trim, etc."
                  className="border-barber-gold/30 bg-transparent focus-visible:ring-barber-gold"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-gray-300 mb-2">
                  Preferred Date
                </label>
                <Input
                  id="date"
                  type="date"
                  className="border-barber-gold/30 bg-transparent focus-visible:ring-barber-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  placeholder="Any specific requests or questions..."
                  className="border-barber-gold/30 bg-transparent focus-visible:ring-barber-gold min-h-[120px]"
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                Book Appointment
              </Button>
            </form>
          </div>

          {/* Information & Map */}
          <div className="flex flex-col justify-between">
            <div className="bg-black p-8 rounded-lg border border-barber-gold/20 mb-8">
              <h3 className="text-2xl text-barber-gold mb-6">Visit Our Shop</h3>

              <div className="space-y-4 text-gray-300">
                <p className="flex items-start">
                  <span className="font-semibold text-white mr-2">Address:</span>
                  <span>500 N Bell Ave #109, Denton, TX 76209, United States</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold text-white mr-2">Phone:</span>
                  <a
                    href="tel:+19406129127"
                    className="hover:text-barber-gold transition-colors"
                  >
                    +1 940-612-9127
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold text-white mr-2">Hours:</span>
                  <span>
                    Mon-Fri: 9:00 AM - 7:00 PM<br />
                    Sat: 9:00 AM - 5:00 PM<br />
                    Sun: Closed
                  </span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-barber-gold/20">
                <p className="text-gray-300">
                  For immediate assistance, please call us during business hours.
                </p>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-barber-gold/20">
              <h3 className="text-2xl text-barber-gold mb-4">Follow Us</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest styles, promotions, and events on social media.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/pmcbarbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-barber-gold/10 text-barber-gold rounded hover:bg-barber-gold hover:text-barber-dark transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.instagram.com/pmcbarbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-barber-gold/10 text-barber-gold rounded hover:bg-barber-gold hover:text-barber-dark transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
