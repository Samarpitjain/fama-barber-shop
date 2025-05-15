import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-barber-dark"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Content Container */}
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Classic Cuts, <br />
            <span className="text-white">Modern Style</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Premium Barber Shop & Beauty Salon
          </p>
          <div className="text-gray-300 flex items-center mb-8">
            <MapPin className="text-barber-gold mr-2" size={20} />
            <span>500 N Bell Ave #109, Denton, TX 76209</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="btn-primary">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild className="btn-outline">
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>

          {/* Rating & Status */}
          <div className="mt-12 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-800 max-w-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-1">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-barber-gold"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-barber-gold/60"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-gray-300">4.6 stars (116+ reviews)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-300">Open ⋅ Closes 7 pm</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 italic">"Costly compared to other barbershops with better haircuts."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            alt="Elegant salon interior"
            className="w-full h-auto max-h-[600px] object-contain transition-transform hover:scale-105 duration-300"
            loading="eager"
            src="/images/hero.webp"
          />
        </div>
      </div>
    </section>
  );
}
