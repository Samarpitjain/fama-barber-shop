import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// Placeholder image URLs - in a real implementation, these would be replaced with actual photos
const galleryImages = {
  shop: [
    "/images/gallery/shop-1.jpg",
    "/images/gallery/shop-2.jpg",
    "/images/gallery/shop-3.jpg",
  ],
  haircuts: [
    "/images/gallery/haircut-1.jpg",
    "/images/gallery/haircut-2.jpg",
    "/images/gallery/haircut-3.jpg",
  ],
  beards: [
    "/images/gallery/beard-1.jpg",
    "/images/gallery/beard-2.jpg",
    "/images/gallery/beard-3.jpg",
  ],
};

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Our Barbershop Gallery</h2>
          <p className="section-subtitle">
            Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
          </p>
        </div>

        <Tabs defaultValue="shop" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-barber-dark/50 mb-10 border border-barber-gold/20 rounded-lg p-1">
            <TabsTrigger
              value="shop"
              className="data-[state=active]:bg-barber-gold data-[state=active]:text-barber-dark"
            >
              Our Shop
            </TabsTrigger>
            <TabsTrigger
              value="haircuts"
              className="data-[state=active]:bg-barber-gold data-[state=active]:text-barber-dark"
            >
              Haircuts
            </TabsTrigger>
            <TabsTrigger
              value="beards"
              className="data-[state=active]:bg-barber-gold data-[state=active]:text-barber-dark"
            >
              Beard Styles
            </TabsTrigger>
          </TabsList>

          {/* Shop Images */}
          <TabsContent value="shop" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.shop.map((image, index) => (
                <div
                  key={index}
                  className="relative h-72 group overflow-hidden rounded-lg border border-barber-gold/20"
                >
                  <Image
                    src={image}
                    alt={`Fama Barber Shop Interior ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      Our Modern Shop Interior
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Haircut Images */}
          <TabsContent value="haircuts" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.haircuts.map((image, index) => (
                <div
                  key={index}
                  className="relative h-72 group overflow-hidden rounded-lg border border-barber-gold/20"
                >
                  <Image
                    src={image}
                    alt={`Haircut Style ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      Premium Haircut Style
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Beard Images */}
          <TabsContent value="beards" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.beards.map((image, index) => (
                <div
                  key={index}
                  className="relative h-72 group overflow-hidden rounded-lg border border-barber-gold/20"
                >
                  <Image
                    src={image}
                    alt={`Beard Style ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      Professional Beard Styling
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
