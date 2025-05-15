import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, ScanFace, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Haircuts",
    description: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    icon: Scissors,
    features: ["Classic Cuts", "Modern Styles", "Fades", "Kids Haircuts"]
  },
  {
    title: "Beard Services",
    description: "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    icon: ScanFace,
    features: ["Beard Trims", "Beard Shaping", "Hot Towel Shaves", "Mustache Trimming"]
  },
  {
    title: "Premium Services",
    description: "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    icon: Paintbrush,
    features: ["Hair Coloring", "Scalp Treatments", "Facial Treatments", "Special Occasion Styling"]
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-barber-dark to-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Barber Services</h2>
          <p className="section-subtitle">
            Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-barber-dark border-barber-gold/20 hover:border-barber-gold/50 transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-barber-gold/10 flex items-center justify-center mb-4">
                  <service.icon className="text-barber-gold" size={24} />
                </div>
                <CardTitle className="text-barber-gold text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-barber-gold mr-2"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Looking for something specific? We offer a range of customized services to meet your grooming needs.
            Ask about our special packages and group discounts for events like weddings or corporate gatherings.
          </p>
        </div>
      </div>
    </section>
  );
}
