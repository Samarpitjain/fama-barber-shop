import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content:
      "I've been getting my hair cut at Fama Barber Shop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
    author: "Mike Johnson",
    rating: 5,
  },
  {
    content:
      "As someone who's particular about their haircut, I was nervous trying a new place. The team at Fama took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
    author: "David Martinez",
    rating: 4,
  },
  {
    content:
      "The hot towel shave experience at Fama Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
    author: "Chris Taylor",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-barber-gold" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-barber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-barber-dark/70 border-barber-gold/20 hover:border-barber-gold/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-barber-gold/30 flex items-center justify-center text-barber-gold font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-barber-dark/50 border border-barber-gold/20 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Overall Rating
              </h3>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-4xl font-bold text-barber-gold mr-2">
                  4.6
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < 4 ? "text-barber-gold" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mt-1">Based on 116+ reviews</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-300 italic">
                "Costly compared to other barbershops with better haircuts."
              </p>
              <p className="text-sm text-gray-400 mt-2">
                — Recent customer service comment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
