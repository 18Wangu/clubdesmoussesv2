import Image from 'next/image';
import { limelightFont, yanoneKaffeesatzFont } from './ui/font';
import { Carousel, CarouselItem } from './components/carousel';
import Navbar from './ui/navbar/navbar';
import Link from 'next/link';

// peut etre changer l'image avec l'ancien baby ? la photo vue drone peut etre pas d'assez bonne qualité
const images = [
  "/carousel_accueil1.png",
  "/carousel_accueil2.JPG",
  "/carousel_accueil3.JPG",
  "/carousel_accueil4.JPG",
  "/carousel_accueil5.JPG"
];

export default function Home() {
  return (
    <main>
      {/******************************************* CAROUSEL *******************************************/}
      <div className="relative w-screen h-screen">
        {/* j'aime pas trop le logo, shadow text pas terrible et transition hover a changer */}
        <div className="absolute inset-0 flex flex-col justify-around items-center z-10">
          <Image
            src="/logo-club-des-mousses.png"
            alt="Logo du Club des Mousses"
            width={150}
            height={150}
          />
          <h1 className={`${limelightFont.className} text-white text-2xl md:text-4xl text-center text-shadow-acceuil`}>
            Venez passer des vacances inoubliables <br /> au Club des Mousses !
          </h1>
          <Link href='/pages/contact' className={`${yanoneKaffeesatzFont.className} text-white text-2xl md:text-4xl text-center rounded-club-des-mousses pt-3 pb-2 px-6 md:pt-4 md:pb-3 md:px-12 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out`}>NOUS CONTACTER</Link>
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
      </div>

      {/******************************************* NAVBAR *******************************************/}
      <Navbar /> {/* Que faire pour la version mobile, j'ai pas d'idee */}

      {/******************************************* PHOTOS CLUB *******************************************/}
      <div className='flex justify-center items-center w-full mt-28 mb-44'> {/* Que faire pour la version mobile, j'ai pas d'idee */}
        <div className='relative group mx-28'>        
          <Image
            src="/dance.JPG"
            alt="dance du club"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 rounded-3xl transition-transform duration-500 ease-in-out transform origin-bottom-left group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-110"
          />
          <Image
            src="/podium1.JPG"
            alt="podium du club"
            width={300}
            height={300}
            className="rounded-3xl -rotate-12 border-4 border-white transition-transform duration-500 ease-in-out group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:scale-110"
          />
        </div>
        <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-3xl w-60 mx-28`}>Laissez vos enfants en toute confiance et partez vaquer à vos activités préférées.</h1>
      </div>

      {/******************************************* HORAIRES CLUB *******************************************/}
      <div className="flex mb-9">
        <Image
          src="/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180"
        />
        <h1 className={`${limelightFont.className} px-12 text-[#2F3092] text-3xl text-center whitespace-nowrap`}>Les horaires du Club</h1>
        <Image
          src="/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180"
        />
      </div>
      <h2 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-center text-3xl`}>DU LUNDI AU SAMEDI</h2>
      <div className={`${yanoneKaffeesatzFont.className} flex text-center justify-center text-2xl mt-7 mb-12 group`}>
        <h3 className='mx-32 text-[#1073BC] group-hover:text-[#EE7601] transition duration-300 ease-in-out'>Matinee <br /> 9h-12h30</h3>
        <h3 className='mx-32 text-[#1AC1F3] group-hover:text-[#2F3092] transition duration-300 ease-in-out'>Pause Midi <br /> 12h30-15h</h3>
        <h3 className='mx-32 text-[#1073BC] group-hover:text-[#EE7601] transition duration-300 ease-in-out'>Après-midi <br /> 15h-19h</h3>
      </div>

      {/******************************************* MAP SABLEAUX *******************************************/}
      <div className="relative w-full h-full group">
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
        <div className='absolute top-1/3 flex items-center justify-around w-full'>
          <h1 className={`${yanoneKaffeesatzFont.className} w-96 text-center text-white text-xl`}>Situé à Noirmoutier-en-l&apos;île, le club prend vie sur la plage des Sableaux, une plage surveillée agréable, vivante et familiale, où se retrouvent de nombreux habitués de générations en générations !</h1>
          <div className='relative'>
            <Image
              src="/carte_NO.svg"
              alt="carte Noirmoutier"
              width={450}
              height={550}
              className='group-hover:scale-110 transition duration-300 ease-in-out'
            />
            <span className='absolute top-20 right-localisation-club-map p-4 bg-[#EE7601] rounded-club-des-mousses transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100'></span>
            <span className={`${yanoneKaffeesatzFont.className} absolute top-28 right-16 text-white text-2xl transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100`}>Plage des Sableaux</span>
          </div>
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
- modifier la scrollbar ?
- renomer les images
- faire page faq
- inscription bouton trop cache !
- faire page "arrive bientot" pour inscription et goodies et histoire du club
- faire des boutons retour sur chaque page ou alors mettre la navbar sur chaque page ?
- faire le resonspive
- rajouter toutes les questions faq (les reformuler et verifier l'hortographe)
- peut etre remettre de la video a la place des carousel ? a voir comment optimiser le chargement
- rendre le site un peu plus dinamique avec des animations

J'irai voir l'office du tourisme cette annee pour mettre a jour les informations
*/