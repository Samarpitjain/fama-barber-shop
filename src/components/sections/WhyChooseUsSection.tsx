import { UserRound, Scissors, HomeIcon } from "lucide-react";

const features = [
  {
    title: "Expert Barbers",
    description: "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
    icon: UserRound,
  },
  {
    title: "Premium Tools & Products",
    description: "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
    icon: Scissors,
  },
  {
    title: "Classic Barbershop Experience",
    description: "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
    icon: HomeIcon,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(#e8c266 0.5px, transparent 0.5px), radial-gradient(#e8c266 0.5px, #000 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px"
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Why Choose Fama Barbershop?</h2>
          <p className="section-subtitle">
            What makes us the premier barbershop in Denton, TX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-barber-dark p-8 rounded-lg border border-barber-gold/20 hover:border-barber-gold/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-barber-gold/10 flex items-center justify-center mb-6">
                <feature.icon className="text-barber-gold" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-barber-gold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 bg-barber-dark/50 border border-barber-gold/20 rounded-lg p-6 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300">
            Experience the Fama difference - where traditional craftsmanship meets modern style.
          </p>
          <p className="text-gray-400 mt-2">
            Join our community of satisfied clients who trust us with their grooming needs.
          </p>
        </div>
      </div>
    </section>
  );
}
