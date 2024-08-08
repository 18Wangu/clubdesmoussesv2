import Image from 'next/image';
import { BoutonContact } from './ui/bouton/bouton_contact';
import { limelightFont } from './ui/font';
import { Carousel, CarouselItem } from './component/carousel';

const images = [
  "/1.png",
  "/image-caroussel-accueil1.jpg",
  "/image-caroussel-accueil2.jpg",
  "/image-caroussel-accueil3.jpg",
  "/image-caroussel-accueil6.jpg"
];

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <div className="absolute inset-0 flex flex-col justify-around items-center z-10">
        <Image
          src="/logo-club-des-mousses.png"
          alt="Logo du Club des Mousses"
          width={150}
          height={150}
        />
        <h1 className={`${limelightFont.className} text-white text-4xl text-center text-shadow-md`}>
          Venez passer des vacances inoubliables <br /> au Club des Mousses !
        </h1>
        <BoutonContact />
      </div>

      <Carousel>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Image ${index + 1} de la plage`}
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </main>
  );
}

