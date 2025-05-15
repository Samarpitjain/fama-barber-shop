import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to make an appointment?",
    answer:
      "While we do accept walk-ins based on availability, we strongly recommend booking an appointment to ensure you get your preferred time slot and barber. You can book through our website, by phone, or in person at the shop.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including men's haircuts, beard trims, hot towel shaves, hair coloring, children's haircuts, and special grooming packages. Check our services section for detailed information and pricing.",
  },
  {
    question: "How long does a typical haircut take?",
    answer:
      "A standard haircut typically takes about 30-45 minutes, depending on the style and complexity. Beard services can add 15-20 minutes, and more comprehensive services like color treatments may take up to an hour or more.",
  },
  {
    question: "Do you offer any loyalty or discount programs?",
    answer:
      "Yes, we offer a loyalty program where every 10th haircut is discounted. We also have special discounts for military personnel, first responders, and seniors. Ask about our monthly membership option for regular clients.",
  },
  {
    question: "What hair products do you use and sell?",
    answer:
      "We use premium professional-grade products in our services. We also sell a curated selection of high-quality men's grooming products including shampoos, conditioners, styling products, beard oils, and shaving supplies.",
  },
];

export default function FaqSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-barber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Answers to common questions about our barbershop services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-barber-gold/20 py-2"
              >
                <AccordionTrigger className="text-left text-gray-200 hover:text-barber-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300">
            Have another question? Contact us directly:
          </p>
          <p className="text-barber-gold text-lg mt-2">
            <a href="tel:+19406129127">+1 940-612-9127</a>
          </p>
        </div>
      </div>
    </section>
  );
}
