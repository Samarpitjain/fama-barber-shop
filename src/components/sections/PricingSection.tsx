import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Classic Services",
    price: "25",
    popular: false,
    description: "Essential barbering services for everyday grooming needs.",
    features: [
      "Men's Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)",
    ],
  },
  {
    title: "Premium Services",
    price: "35",
    popular: true,
    description: "Enhanced grooming services for a more complete experience.",
    features: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel",
    ],
  },
  {
    title: "Packages",
    price: "50",
    popular: false,
    description: "Combination packages and special deals for regular clients.",
    features: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-barber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Service Prices</h2>
          <p className="section-subtitle">
            Quality barbering at fair prices. Choose from our range of professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-black border-barber-gold/20 hover:border-barber-gold/50 transition-all overflow-hidden ${
                plan.popular ? "relative border-barber-gold/60" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-barber-gold text-barber-dark text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-barber-gold">
                  {plan.title}
                </CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold text-barber-gold">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">/service</span>
                </div>
                <CardDescription className="text-gray-400 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className="h-5 w-5 text-barber-gold shrink-0 mr-2"
                        aria-hidden="true"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  <Link href="#contact">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            Prices may vary depending on hair length and service complexity.
            Please consult with your barber for specific pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
