"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Favour is a reliable developer who delivers clean UI and communicates clearly throughout the project.",
    name: "Olasupo Sodiq",
    role: "Founder",
    company: "Alpha Tech Hub",
    image: "/images/alpha.jpg",
  },
  {
    quote:
      "Great problem-solving skills and strong attention to detail. Working with him was smooth and productive.",
    name: "Oyinkansola Adisa",
    role: "Product Manager",
    company: "Startup Team",
    image: "/images/pm.jpg",
  },
  {
    quote: "Working wit Favour was a pleasure. His front-end solutions were clean, efficient, and reliable, and he always delivered on time. I could trust him with complex tasks without worry.",
    name: "Omirin Adebayo",
    role: "Backend Developer",
    company: "Myedupathway",
    image: "/images/adebayo.jpg",
  },
  {
    quote:
      "He consistently met deadlines and delivered high-quality work. I’d happily work with him again.",
    name: "Ajetomobi Damilola",
    role: "Lead Developer",
    company: "Arivest",
    image: "/images/dammy.jpg",
  },
];

export default function Testimonials() {
 const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
  containScroll: "trimSnaps",
});


  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What People Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Feedback from people I’ve worked with
          </p>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_48%] pl-6"
              >
                <div className="h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="mb-6 text-base leading-relaxed">
                    “{item.quote}”
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 dark:border-white/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-semibold leading-none">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
