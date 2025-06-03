"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Fancybox from "@/components/Fancybox";
import { images } from "./ImagesData";

export default function ImageGallery() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 py-10 place-items-center">
        {images.map((img, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={img.full}
            data-aos="fade-up"
            data-aos-delay={index * 60} // staggered delay
          >
            <Image
              src={img.thumb}
              alt={img.alt}
              width={200}
              height={150}
              unoptimized
            />
          </a>
        ))}
      </div>
    </Fancybox>
  );
}
