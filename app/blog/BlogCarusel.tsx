"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

function BlogCarusel() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        //   plugins={[
        //     Autoplay({
        //       delay: 2000,
        //     }),
        //   ]}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="blog-carusel-item">
                <Image
                  alt="test"
                  src="/blog/blog-img2.png"
                  width={450}
                  height={200}
                  className=""
                />
                <div className="px-6 py-3">
                  <div className="bci-author flex items-center">
                    <Image
                      alt="test"
                      src="/blog/blog-img1.png"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="ml-2">
                      <h4>sid qolimorad</h4>
                      <span>May 1st, 2024</span>
                    </div>
                  </div>
                  <div className="bci-content my-4">
                    <h3>Seaside Serenity Villa</h3>
                    <p>
                      Wake up to the soothing melody of waves. This beachfront
                      villa offers...
                    </p>
                  </div>
                  <Link href="">
                    <div className="bci-btn">View Post Details</div>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

export default BlogCarusel;
