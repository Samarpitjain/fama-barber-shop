import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-barber-dark/90">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Fama Barber Shop Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-barber-dark p-6 rounded-lg border border-barber-gold/20">
              <span className="text-barber-gold text-5xl font-bold">5+</span>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="section-title">About Fama Barber Shop</h2>
            <p className="section-subtitle">Premier Barbershop in Denton, TX</p>

            <div className="space-y-6 text-gray-300">
              <p>
                Established in 2018, Fama Barber Shop and Beauty Salon has been providing premium grooming services to the people of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
              </p>

              <div className="pl-4 border-l-4 border-barber-gold my-8">
                <p className="text-lg italic">
                  We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
                </p>
              </div>

              <p>
                At Fama Barber Shop, we emphasize quality in every aspect of our service - from the premium products we use to the relaxing atmosphere we create. Whether you're looking for a classic haircut, a precise beard trim, or a complete grooming package, our team of experienced barbers is here to help you look your absolute best.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/20">
                <span className="text-barber-gold text-3xl font-bold">4.6</span>
                <p className="text-gray-400">Star Rating</p>
              </div>
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/20">
                <span className="text-barber-gold text-3xl font-bold">116+</span>
                <p className="text-gray-400">Reviews</p>
              </div>
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/20">
                <span className="text-barber-gold text-3xl font-bold">1000+</span>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
