import Image from 'next/image';
import { BoutonContact } from './ui/boutons/bouton_contact';
import { limelightFont } from './ui/font';
import { Carousel, CarouselItem } from './components/carousel';
import Navbar from './ui/navbar/navbar';

// changer les images et toutes les mettre a la meme taille
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
        <h1 className={`${limelightFont.className} text-white text-4xl text-center text-shadow-acceuil`}>
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
      <Navbar />
      <div className='bg-slate-500 flex justify-center h-48 w-96'>a faire</div>

      <div className="flex my-16">
        <Image
          src="/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180"
        />
        {/* animation ici ? */}
        <h1 className={`${limelightFont.className} px-12 text-[#2F3092] text-3xl text-center whitespace-nowrap`}>Les horaires du Club</h1>
        <Image
          src="/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180"
        />
      </div>

      <h1 className='text-[#1AC1F3] text-center text-3xl'>DU LUNDI AU SAMEDI</h1>
    </main>
  );
}

/*
A faire :
- Changer la barre horizontale pour scroll (mettre comme sur mon portfolio mais en bleu)
- Faire une aprem avec Nathan pour le design
*/