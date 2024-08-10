import Image from 'next/image';
import { BoutonContact } from './ui/boutons/bouton_contact';
import { limelightFont, yanoneKaffeesatzFont } from './ui/font';
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
      <div className='flex justify-center w-full'>
        <div className='bg-slate-500 flex justify-center h-48 w-96'>a faire</div>
        <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-3xl w-60 ml-28`}>Laissez vos enfants en toute confiance et partez vaquer à vos activités préférées.</h1>
      </div>
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
      {/* faire le hover changement de couleur */}
      <h1 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-center text-3xl`}>DU LUNDI AU SAMEDI</h1>
      <div className={`${yanoneKaffeesatzFont.className} flex text-center justify-center text-2xl my-8`}>
        <h2 className='mx-32 text-[#1073BC]'>Matinee <br /> 9h-12h30</h2>
        <h2 className='mx-32 text-[#1AC1F3]'>Pause Midi <br /> 12h30-15h</h2>
        <h2 className='mx-32 text-[#1073BC]'>Après-midi <br /> 15h-19h</h2>
      </div>
      <div className="relative w-full h-full">
        <Image 
          src="/vue_du_ciel_no.jpg"
          alt="plage des dames vue du ciel"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%)'
          }}
        ></div>
        {/* faire animation de la carte  */}
        <div className='absolute top-1/3 flex items-center justify-around w-full'>
          <h1 className={`${yanoneKaffeesatzFont.className} w-96 text-center text-white text-xl`}>Situé à Noirmoutier-en-l’île, le club prend vie sur la plage des Sableaux, une plage surveillée agréable, vivante et familiale, où se retrouvent de nombreux habitués de générations en générations !</h1>
          <Image
            src="/carte_NO.svg"
            alt="carte Noirmoutier"
            width={450}
            height={550}
          />
        </div>
      </div>
    </main>
  );
}

/*
A faire :
- Changer la barre horizontale pour scroll (mettre comme sur mon portfolio mais en bleu)
- Faire une aprem avec Nathan pour le design
- Ameliorer la qualité des images, des pictos, des boutons etc
- infos a rajouter ou enlever ? les textes a modifier ?
- Voir pour les tarifs, comment on affiches les tarifs ?
*/