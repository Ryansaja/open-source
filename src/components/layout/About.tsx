import Image from "next/image";
import Image1 from "@/public/about/about-1.avif";
import Image2 from "@/public/about/about-2.jpg";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";

export default function About() {
  return (
    <>
      <section id="About" className="bg-light-ivory py-section">
        <ScrollAnimated variant="left" className="container container--sm">
          <div className="flex flex-col items-center gap-16 md:grid md:grid-cols-2">
            <ScrollAnimated
              variant="right"
              className="font-light text-neutral-800 sm:text-lg"
            >
              <h2 className="relative mb-4 heading-second text-neutral-900">
                <span className="relative z-10">About us</span>
                {/* <span className="absolute -left-2 -bottom-4 z-1">
                  <BrushSVG width={200} height={50} />
                </span> */}
              </h2>

              <p className="mb-2 text-lg font-bold">
                A Journey of Taste and Tradition.
              </p>
              <p className="text-base">
              Sixteen 8 telah menjadi rumah bagi masakan Chinese otentik selama satu dekade. 
              Kami berawal dari kecintaan pada cita rasa khas Chinese dan keinginan untuk membagikannya kepada semua orang.
               Para chef kami, yang dikenal karena keahlian dan dedikasi mereka, 
               menyajikan hidangan yang benar-benar mencerminkan esensi tradisi kuliner Tiongkok.
              </p>
              <div className="flex flex-row gap-4 mt-6">
                <Link href="/about">
                  <Button variant="primary">Tentang</Button>
                </Link>
                <Link href="/about#staff">
                  <Button variant="outlined">Event</Button>
                </Link>
              </div>
            </ScrollAnimated>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full mb-8 rounded-lg">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src="/1.jpg"
                  alt="Chef working on a dish"
                />
              </div>
              <div className="relative w-full mt-4 rounded-lg lg:mt-10">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src="/3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </section>
    </>
  );
}
