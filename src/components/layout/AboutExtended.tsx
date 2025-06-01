import Image from "next/image";
import Image2 from "@/public/bento/bento-2.jpg";
import Image6 from "@/public/bento/bento-6.jpg";

export default function AboutExtended() {
  return (
    <>
      <section id="AboutExtended" className="bg-light-ivory py-section">
        <div className="container container--xs">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Lantai 1 */}
            <Image
              className="self-end w-full h-fit justify-self-end rounded-custom--lg"
              width={384}
              height={256}
              src={Image6}
              loading="lazy"
              alt="Ground Floor Interior"
            />
            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Ground Floor
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Begitu memasuki restoran kami, Anda akan disambut oleh lantai pertama
                  yang dirancang dengan konsep open kitchen. Di sini, para pengunjung bisa
                  langsung melihat para chef kami menyiapkan hidangan Chinese favorit dengan
                  penuh keahlian.
                </p>
                <p>
                  Suasana lively dan aroma masakan yang menggoda menjadikan lantai ini tempat yang sempurna untuk menikmati makan siang cepat atau sekadar nongkrong santai bersama teman.
                </p>
              </div>
            </div>

            {/* Lantai 2 */}
            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Second Floor
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Lantai dua kami didesain sebagai area makan utama dengan kapasitas yang
                  lebih besar dan nuansa nyaman yang hangat. Ideal untuk keluarga atau rombongan,
                  ruang ini menawarkan pengalaman makan yang lebih tenang dan intimate.
                </p>
                <p>
                  Dengan interior yang menggabungkan elemen modern dan tradisional Tiongkok,
                  setiap sudutnya dirancang untuk kenyamanan Anda saat menikmati hidangan khas kami.
                </p>
              </div>
            </div>
            <Image
              className="self-start w-full h-fit justify-self-start rounded-custom--lg"
              width={384}
              height={256}
              src={Image2}
              loading="lazy"
              alt="Second Floor Dining Area"
            />

            {/* Lantai 3 */}
            <div className="col-span-2 p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Third Floor
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Di lantai tertinggi, kami menyediakan ruang private yang eksklusif untuk
                  acara khusus, seperti perayaan ulang tahun, meeting, atau makan malam romantis.
                  Dengan suasana yang tenang dan pelayanan khusus, lantai tiga kami menjadi pilihan utama
                  untuk reservasi spesial.
                </p>
                <p>
                  Anda dapat memesan ruang ini terlebih dahulu untuk mendapatkan pengalaman makan
                  yang lebih personal dan berkesan, sambil menikmati pemandangan kota dari jendela lantai atas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
