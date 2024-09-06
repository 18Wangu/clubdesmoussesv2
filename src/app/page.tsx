import Image from 'next/image';
import { limelightFont, yanoneKaffeesatzFont } from './ui/font';
import { Carousel, CarouselItem } from './components/carousel';
import Navbar from './ui/navbar/navbar';
import Link from 'next/link';
import NavbarMobile from './ui/navbar/navbar-mobile';
import { Footer } from './ui/footer/footer';

// peut etre changer l'image avec l'ancien baby ? la photo vue drone peut etre pas d'assez bonne qualité
const desktopImages = [
  "/carousel_accueil1.png",
  "/carousel_accueil2.JPG",
  "/carousel_accueil3.JPG",
  "/carousel_accueil4.JPG",
  "/carousel_accueil5.JPG"
];
const mobileImages = [
  "/test10.JPG",
  "/test11.jpg"
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
        {/**************************** CAROUSEL pc ******************************/}
        <div className='hidden md:block'>
          <Carousel>
            {desktopImages.map((src, index) => (
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
        {/**************************** CAROUSEL mobile ******************************/}
        <div className='block md:hidden'>
          <Carousel>
            {mobileImages.map((src, index) => (
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
      </div>

      {/******************************************* NAVBAR *******************************************/}
      <Navbar />
      <NavbarMobile />
      {/******************************************* PHOTOS CLUB *******************************************/}
      {/* sur mobile, les images qui s'agrandissent au scroll */}
      <div className='flex flex-col md:flex-row justify-center items-center w-full md:mt-28 md:mb-44'>
        <div className='group md:mx-28'>        
          <Image
            src="/dance.JPG"
            alt="dance du club"
            width={200}
            height={200}
            className="relative top-32 left-10 md:top-48 md:left-1/2 rounded-club-des-mousses md:w-80 md:transition-transform md:duration-500 md:ease-in-out md:transform md:origin-bottom-left md:group-hover:rotate-3 md:group-hover:translate-x-3 md:group-hover:translate-y-3 md:group-hover:scale-110"
          />
          <Image
            src="/podium1.JPG"
            alt="podium du club"
            width={200}
            height={200}
            className="relative -top-20 -left-10 md:-top-32 rounded-club-des-mousses -rotate-12 border-4 border-white md:w-80 md:transition-transform md:duration-500 ease-in-out md:group-hover:-translate-x-6 md:group-hover:-translate-y-6 md:group-hover:scale-110"
          />
        </div>
        <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-xl md:text-3xl w-60 mx-28 my-10 md:my-0`}>Laissez vos enfants en toute confiance et partez vaquer à vos activités préférées.</h1>
      </div>

      {/******************************************* HORAIRES CLUB *******************************************/}
      {/* sur mobile, texte qui monte au scroll comme sur mon site theopremartin.com */}
      <div className="flex justify-center mb-9">
        <Image
          src="/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180 hidden md:block"
        />
        <h1 className={`${limelightFont.className} md:px-12 text-[#2F3092] text-2xl md:text-3xl text-center whitespace-nowrap`}>Les horaires du Club</h1>
        <Image
          src="/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180 hidden md:block"
        />
      </div>
      {/* changement de couleur au scroll pour la version mobile */}
      <h2 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-center text-2xl md:text-3xl`}>DU LUNDI AU SAMEDI</h2>
      <div className={`${yanoneKaffeesatzFont.className} flex text-center justify-center text-xl md:text-2xl mt-7 mb-12 group`}>
        <h3 className='md:mx-32 text-[#1073BC] group-hover:text-[#EE7601] transition duration-300 ease-in-out'>Matinee <br /> 9h-12h30</h3>
        <h3 className='mx-10 md:mx-32 text-[#1AC1F3] group-hover:text-[#2F3092] transition duration-300 ease-in-out'>Pause Midi <br /> 12h30-15h</h3>
        <h3 className='md:mx-32 text-[#1073BC] group-hover:text-[#EE7601] transition duration-300 ease-in-out'>Après-midi <br /> 15h-19h</h3>
      </div>

      {/******************************************* MAP SABLEAUX *******************************************/}
      {/* sur mobile, localisation qui apparait au scroll */}
      <div className='hidden md:block'>
        <div className="relative w-full h-full group">
          <Image 
            src="/vue_du_ciel_no.jpg"
            alt="plage des dames vue du ciel"
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
              <span className={`${yanoneKaffeesatzFont.className} absolute top-28 right-16 text-[#EE7601] text-2xl transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100`}>Plage des Sableaux</span>
            </div>
          </div>
        </div>
      </div>
        
      {/******************************************* MAP SABLEAUX mobile *******************************************/}
      <div className='block md:hidden'>
        <div className='relative my-10'>
          <div className='flex justify-center'>
            <Image
              src="/carte_NO.svg"
              alt="carte Noirmoutier"
              width={250}
              height={250}
            />
          </div>
          <span className='absolute top-12 left-40 bg-[#EE7601] rounded-club-des-mousses p-2 h-2'></span>
          <span className={`${yanoneKaffeesatzFont.className} absolute top-16 left-44 text-[#EE7601] text-xl`}>Plage des Sableaux</span>
        </div>
      </div>

      {/******************************************* Un peu plus sur nous mobile *******************************************/}
      <div>
        <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-2xl text-center my-14`}>Un peu plus sur nous !</h1>
          <div className='flex flex-col items-center md:flex-row md:justify-around'>
            <div className='relative group h-60 w-80'>
              {/* au scroll texte qui arrive de bas en haut pour venir au milieu, en meme temps les carte s'ecarte */}
              {/***************** Notre Histoire *****************/}
              <Image
                src="/test1.jpg"
                alt="dance du club"
                width={100}
                height={100}
                className="z-10 md:w-36 absolute top-10 left-16 md:top-12 md:left-2 rotate-[-15deg] rounded-3xl border-4 border-white 
                transition-transform duration-500 ease-in-out transform origin-bottom-right md:group-hover:-translate-x-4 md:group-hover:-rotate-[25deg] md:group-hover:scale-110"
              />
              <Image
                src="/test2.JPG"
                alt="dance du club"
                width={100}
                height={100}
                className="z-20 md:w-36 absolute top-0 left-28 rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom md:group-hover:-translate-y-12 md:group-hover:scale-110"
              />
              <Image
                src="/test3.JPG"
                alt="dance du club"
                width={100}
                height={100}
                className="z-30 md:w-36 absolute top-12 left-44 md:top-16 md:left-48 rotate-[15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-left md:group-hover:translate-x-8 md:group-hover:-rotate-[-25deg] md:group-hover:scale-110"
              />
            </div>
            
            {/***************** Notre Boutique *****************/}  
            <div className='relative group h-60 w-80'>  
              <Image
                src="/test1.jpg"
                alt="dance du club"
                width={100}
                height={100}
                className="z-10 md:w-36 absolute top-0 left-6 md:-left-4 rotate-[15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-right md:group-hover:-translate-x-16 md:group-hover:-rotate-[-25deg] md:group-hover:scale-110"
              />
              <Image
                src="/test3.jpg"
                alt="dance du club"
                width={100}
                height={100}
                className="z-20 md:w-36 absolute top-10 left-28 md:top-16 rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-top md:group-hover:translate-y-12 md:group-hover:scale-110"
              />
              <Image
                src="/test2.JPG"
                alt="dance du club"
                width={100}
                height={100}
                className="z-10 md:w-36 absolute top-0 left-52 md:left-60 rotate-[-15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-left md:group-hover:translate-x-20 md:group-hover:-rotate-[25deg] md:group-hover:scale-110"
              />
            </div>

            <div className='relative group h-72 w-80'>
              {/***************** Notre Galerie *****************/}
              <Image
                src="/test1.jpg"
                alt="dance du club"
                width={100}
                height={100}
                className="z-10 md:w-36 absolute top-10 left-16 md:top-12 md:left-2 rotate-[-15deg] rounded-3xl border-4 border-white 
                transition-transform duration-500 ease-in-out transform origin-bottom-right md:group-hover:-translate-x-4 md:group-hover:-rotate-[25deg] md:group-hover:scale-110"
              />
              <Image
                src="/test2.JPG"
                alt="dance du club"
                width={100}
                height={100}
                className="z-20 md:w-36 absolute top-0 left-28 rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom md:group-hover:-translate-y-12 md:group-hover:scale-110"
              />
              <Image
                src="/test3.JPG"
                alt="dance du club"
                width={100}
                height={100}
                className="z-30 md:w-36 absolute top-12 left-44 md:top-16 md:left-48 rotate-[15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-left md:group-hover:translate-x-8 md:group-hover:-rotate-[-25deg] md:group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      {/******************************************* Citation *******************************************/}
      <p className={`${yanoneKaffeesatzFont.className} block md:hidden px-6 text-center text-[#2F3092] text-xl`}>Situé à Noirmoutier-en-l&apos;île, le club prend vie sur la plage des Sableaux, une plage surveillée agréable, vivante et familiale, où se retrouvent de nombreux habitués de générations en générations !</p>
      <Footer />
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
- penser a des animations pour la version mobile
- mettre en ligne et tester sur mon tel, celui de celeste, la tablette, les 2 pc pour ajuster les polices et autres tailles images etc

- mettre au propre le code, mettre en ligne le site, regarder sur tout type d'appareil
- faire le backend de inscription
- refaire la position des images avec rotate deg pour choisir l'angle exacte

J'irai voir l'office du tourisme cette annee pour mettre a jour les informations
*/