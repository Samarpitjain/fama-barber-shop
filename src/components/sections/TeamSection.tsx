import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const team = [
  {
    name: "Jason Rodriguez",
    role: "Owner & Master Barber",
    bio: "With over 15 years of experience, Jason founded Fama Barber Shop to bring premium men's grooming services to Denton. Specializing in classic cuts and straight razor shaves, he combines traditional techniques with modern styles.",
    image: "/images/team/barber1.jpg",
    socials: {
      instagram: "https://www.instagram.com/pmcbarbershop/",
      facebook: "https://www.instagram.com/pmcbarbershop/",
    },
  },
  {
    name: "Marcus Williams",
    role: "Senior Barber",
    bio: "Marcus brings 8 years of experience to Fama Barber Shop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele. Known for his attention to detail and consistently flawless cuts.",
    image: "/images/team/barber2.jpg",
    socials: {
      instagram: "https://www.instagram.com/pmcbarbershop/",
      facebook: "https://www.instagram.com/pmcbarbershop/",
    },
  },
  {
    name: "Terrence Jackson",
    role: "Barber & Stylist",
    bio: "Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look while maintaining your personal style preferences.",
    image: "/images/team/barber3.jpg",
    socials: {
      instagram: "https://www.instagram.com/pmcbarbershop/",
      facebook: "https://www.instagram.com/pmcbarbershop/",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-barber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Meet Our Barbers</h2>
          <p className="section-subtitle">
            Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-black border border-barber-gold/20 rounded-lg overflow-hidden hover:border-barber-gold/50 transition-all duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-barber-gold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6 text-sm">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-barber-dark flex items-center justify-center text-barber-gold border border-barber-gold/30 hover:bg-barber-gold hover:text-barber-dark transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-barber-dark flex items-center justify-center text-barber-gold border border-barber-gold/30 hover:bg-barber-gold hover:text-barber-dark transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Note */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 italic">
            "Our barbers are highly trained professionals who continue to perfect their craft through ongoing education in the latest techniques and trends."
          </p>
          <div className="mt-4 w-16 h-1 bg-barber-gold mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
