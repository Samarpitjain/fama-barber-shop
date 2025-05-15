import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-barber-gold relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-full w-1/3 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundSize: "cover"
        }}></div>
      </div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-20">
        <Scissors size={160} className="text-barber-dark" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-dark mb-4">
            Ready for a Fresh Cut?
          </h2>
          <p className="text-barber-dark/80 text-lg mb-8 max-w-2xl">
            Visit Fama Barber Shop and Beauty Salon for premium grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-barber-dark text-barber-gold hover:bg-barber-dark/90 border-2 border-barber-dark"
            >
              <Link href="#contact">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-barber-dark border-2 border-barber-dark hover:bg-barber-dark/10"
            >
              <Link href="#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
