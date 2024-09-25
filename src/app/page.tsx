"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { limelightFont, yanoneKaffeesatzFont } from './ui/font';
import { Carousel, CarouselItem } from './components/carousel';
import Navbar from './ui/navbar/navbar';
import Link from 'next/link';
import NavbarMobile from './ui/navbar/navbar-mobile';
import { Footer } from './ui/footer/footer';

// peut etre changer l'image avec l'ancien baby ? la photo vue drone peut etre pas d'assez bonne qualité
const desktopImages = [
  "/accueil/ordinateur/caroussel/carousel_accueil1.jpg",
  "/accueil/ordinateur/caroussel/carousel_accueil2.jpg",
  "/accueil/ordinateur/caroussel/carousel_accueil3.JPG",
  "/accueil/ordinateur/caroussel/carousel_accueil4.JPG",
  "/accueil/ordinateur/caroussel/carousel_accueil5.JPG"
];
// il me faut plus de photo avec des grands genius pour montrer qu'il y a aussi de la place pour les grands
const mobileImages = [
  "/accueil/telephone/caroussel_tel_1.JPG",
  "/test11.jpg"
];

export default function Home() {
  /*************** animation au scroll mobile ***************/
  const [isImageEtCitationVisible, setIsImageEtCitationVisible] = useState(false);
  const [isHoraireVisible, setIsHoraireVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isUnPeuPlusVisible, setIsUnPeuPlusVisible] = useState(false);
  const [isCitationFinVisible, setIsCitationFinVisible] = useState(false);
  const [isImg1Visible, setIsImg1Visible] = useState(false);
  const [isImg2Visible, setIsImg2Visible] = useState(false);
  const [isImg3Visible, setIsImg3Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);

      if (scrollY > 500) {
        setIsImageEtCitationVisible(true);
      } else {
        setIsImageEtCitationVisible(false);
      }
      if (scrollY > 700) {
        setIsHoraireVisible(true);
      } else {
        setIsHoraireVisible(false);
      }
      if (scrollY > 1400) {
        setIsMapVisible(true);
      } else {
        setIsMapVisible(false);
      }
      if (scrollY > 1500) {
        setIsUnPeuPlusVisible(true);
      } else {
        setIsUnPeuPlusVisible(false);
      }
      if (scrollY > 1900) {
        setIsImg1Visible(true);
      } else {
        setIsImg1Visible(false);
      }
      if (scrollY > 2200) {
        setIsImg2Visible(true);
      } else {
        setIsImg2Visible(false);
      }
      if (scrollY > 2400) {
        setIsImg3Visible(true);
      } else {
        setIsImg3Visible(false);
      }
      if (scrollY > 2600) {
        setIsCitationFinVisible(true);
      } else {
        setIsCitationFinVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      {/******************************************* CAROUSEL *******************************************/}
      <div className="relative w-screen h-screen">
        {/* j'aime pas trop le logo, shadow text pas terrible et transition hover a changer, reponsive pareil peut etre ameliore, carousel a changer ? */}
        <div className="absolute inset-0 flex flex-col justify-around items-center z-10">
          <Image
            src="/elements_graphique/logo-club-des-mousses.png"
            alt="Logo du Club des Mousses"
            width={150}
            height={150}
          />
          <h1 className={`${limelightFont.className} text-white text-2xl md:text-4xl text-center text-shadow-acceuil`}>
            Venez passer des vacances inoubliables <br /> au Club des Mousses !
          </h1>
          <div className='flex flex-col md:flex-row'>
            <Link href='/pages/contact' className={`${yanoneKaffeesatzFont.className} text-white text-2xl md:text-4xl rounded-club-des-mousses pt-3 pb-2 px-6 md:pt-5 md:pb-4 md:px-12 mx-6 mb-2 md:mb-0 max-w-max bg-[#2F3092] hover:scale-105 transition duration-300 ease-in-out`}>NOUS CONTACTER</Link>
            <Link href='/pages/inscription' className={`${yanoneKaffeesatzFont.className} text-white text-2xl md:text-4xl rounded-club-des-mousses pt-3 pb-2 px-11 md:pt-5 md:pb-4 md:px-16 mx-6 max-w-max bg-[#EE7601] hover:scale-105 transition duration-300 ease-in-out`}>INSCRIPTION</Link>
          </div>
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
      <div className='hidden md:block'>
        <div className='flex justify-center items-center w-full mt-28 mb-44'>
          <div className='group mx-28'>        
            <Image
              src="/accueil/ordinateur/cadeaux.JPG"
              alt="dance du club"
              width={350}
              height={300}
              className="relative top-48 left-1/2 rounded-club-des-mousses transition-transform duration-500 ease-in-out transform origin-bottom-left group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-110"
            />
            <Image
              src="/accueil/ordinateur/diplome_natation.JPG"
              alt="podium du club"
              width={320}
              height={300}
              className="relative -left-10 -top-32 rounded-club-des-mousses -rotate-12 border-4 border-white transition-transform duration-500 ease-in-out group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:scale-110"
            />
          </div>
          <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-3xl w-60 mx-28`}>Laissez vos enfants en toute confiance et partez vaquer à vos activités préférées.</h1>
        </div>
      </div>

      {/******************************************* PHOTOS CLUB mobile *******************************************/}
      <div className='block md:hidden'>
        <div className='flex flex-col justify-center items-center w-full my-16'>
          <div className='group'>        
            <Image
              src="/accueil/ordinateur/cadeaux.JPG"
              alt="dance du club"
              width={200}
              height={200}
              className={`relative top-32 left-8 rounded-club-des-mousses transition-transform duration-500 ease-in-out transform origin-bottom-left ${isImageEtCitationVisible ? 'rotate-3 translate-y-3 scale-110' : 'translate(0, 0)'}`}
            />
            <Image
              src="/accueil/ordinateur/diplome_natation.JPG"
              alt="podium du club"
              width={180}
              height={200}
              className={`relative -top-20 -left-10 rounded-club-des-mousses -rotate-12 border-4 border-white transition-transform duration-500 ease-in-out ${isImageEtCitationVisible ? '-translate-x-2 -translate-y-6 scale-110' : 'translate(0, 0)'}`}
            />
          </div>
          <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-xl w-60 mx-28 my-20 transition-all duration-700 ease-in-out ${isImageEtCitationVisible ? 'animate-scroll-up' : 'opacity-0'}`}>Laissez vos enfants en toute confiance et partez vaquer à vos activités préférées.</h1> 
        </div>
      </div>

      {/******************************************* HORAIRES CLUB *******************************************/}
      <div className="flex justify-center mb-9">
        <Image
          src="/elements_graphique/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180 hidden md:block"
        />
        <h1 className={`${limelightFont.className} md:px-12 text-[#2F3092] text-2xl md:text-3xl text-center whitespace-nowrap ${isHoraireVisible ? 'animate-scroll-up' : 'opacity-0'}`}>Les horaires du Club</h1>
        <Image
          src="/elements_graphique/divider_vague_2.svg"
          alt="vague divider"
          width={1050}
          height={150}
          className="rotate-180 hidden md:block"
        />
      </div>
      <h2 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-center text-2xl md:text-3xl ${isHoraireVisible ? 'animate-scroll-up' : 'opacity-0'}`}>DU LUNDI AU SAMEDI</h2>
      <div className={`${yanoneKaffeesatzFont.className} flex text-center justify-center text-xl md:text-2xl mt-7 mb-12 group ${isHoraireVisible ? 'animate-scroll-up' : 'opacity-0'}`}>
        <h3 className='md:mx-32 text-[#1073BC] group-hover:text-[#EE7601] transition duration-300 ease-in-out'>Matinee <br /> 9h-12h30</h3>
        <h3 className='mx-10 md:mx-32 text-[#1AC1F3] group-hover:text-[#2F3092] transition duration-300 ease-in-out'>Pause Midi <br /> 12h30-15h</h3>
        <h3 className='md:mx-32 text-[#1073BC] group-hover:text-[#EE7601] transition duration-300 ease-in-out'>Après-midi <br /> 15h-19h</h3>
      </div>

      {/******************************************* MAP SABLEAUX *******************************************/}
      <div className='hidden md:block'>
        <div className="relative w-full h-full group">
          <Image 
            src="/accueil/ordinateur/plage_vue_du_ciel.jpg"
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
                src="/elements_graphique/carte_NO.svg"
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
        <div className='relative my-28'>
          <div className='flex justify-center'>
            <Image
              src="/elements_graphique/carte_NO.svg"
              alt="carte Noirmoutier"
              width={250}
              height={250}
              className={`transition-transform duration-300 ease-in-out transform ${isMapVisible ? 'scale-110' : 'scale-100'}`}
            />
          </div>
          <span className={`absolute top-12 left-40 bg-[#EE7601] rounded-club-des-mousses p-2 h-2 transition-transform duration-300 ease-in-out transform ${isMapVisible ? 'scale-125' : 'scale-100'}`}></span>
          <span className={`${yanoneKaffeesatzFont.className} absolute top-16 left-44 text-[#EE7601] text-xl transition-transform duration-300 ease-in-out transform ${isMapVisible ? 'scale-105' : 'scale-100'}`}>Plage des Sableaux</span>
        </div>
      </div>

      {/******************************************* Un peu plus sur nous *******************************************/}
      <div className='hidden md:block'>
        <div>
          <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-2xl text-center my-14`}>Un peu plus sur nous !</h1>
          <div className='flex items-center justify-around'>
            <div className='relative group h-60 w-80'>
              {/***************** Notre Histoire *****************/}
              <Image
                src="/accueil/notre_histoire1.JPG"
                alt="dance du club"
                width={150}
                height={150}
                className="z-10 absolute top-0 left-2 rotate-[-15deg] rounded-3xl border-4 border-white 
                transition-transform duration-500 ease-in-out transform origin-bottom-right group-hover:-translate-x-6 group-hover:-rotate-[25deg] group-hover:scale-110"
              />
              <Image
                src="/accueil/notre_histoire2.JPG"
                alt="dance du club"
                width={150}
                height={150}
                className="z-20 absolute -top-6 left-28 rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom group-hover:-translate-y-12 group-hover:scale-110"
              />
              <Image
                src="/accueil/notre_histoire3.JPG"
                alt="dance du club"
                width={150}
                height={150}
                className="z-30 absolute top-4 left-48 rotate-[15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-left group-hover:translate-x-10 group-hover:-rotate-[-25deg] group-hover:scale-110"
              />
              <Link href='/pages/indisponible' className={`${yanoneKaffeesatzFont.className} z-0 opacity-0 text-[#2F3092] text-3xl text-center absolute top-32 left-28 pl-2 group-hover:translate-y-10 group-hover:duration-500 ease-in-out group-hover:opacity-100 hover:text-[#EE7601]`}>Notre Histoire</Link>
            </div>
            
            {/***************** Notre Boutique *****************/}  
            <div className='relative group h-60 w-80'>  
              <Image
                src="/accueil/boutique1.jpg"
                alt="dance du club"
                width={150}
                height={150}
                className="z-10 absolute top-0 -left-4 rotate-[15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-right group-hover:-translate-x-20 group-hover:-rotate-[-25deg] group-hover:scale-110"
              />
              <Image
                src="/accueil/boutique2.jpg"
                alt="dance du club"
                width={150}
                height={150}
                className="z-20 absolute left-28 top-16 rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-top group-hover:translate-y-12 group-hover:scale-110"
              />
              <Image
                src="/accueil/boutique3.jpg"
                alt="dance du club"
                width={150}
                height={150}
                className="z-10 absolute top-0 left-60 rotate-[-15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-left group-hover:translate-x-20 group-hover:-rotate-[25deg] group-hover:scale-110"
              />
              <Link href='/pages/indisponible' className={`${yanoneKaffeesatzFont.className} z-0 opacity-0 text-[#2F3092] text-3xl text-center absolute top-32 left-28 pl-1 group-hover:-translate-y-14 group-hover:duration-500 ease-in-out group-hover:opacity-100 hover:text-[#EE7601]`}>Notre Boutique</Link>
            </div>

            <div className='relative group h-72 w-80'>
              {/***************** Notre Galerie *****************/}
              <Image
                src="/accueil/galerie1.JPG"
                alt="dance du club"
                width={150}
                height={150}
                className="z-10 absolute top-12 left-2 rotate-[-15deg] rounded-3xl border-4 border-white 
                transition-transform duration-500 ease-in-out transform origin-bottom-right group-hover:-translate-x-4 group-hover:-rotate-[25deg] group-hover:scale-110"
              />
              <Image
                src="/accueil/galerie2.JPG"
                alt="dance du club"
                width={150}
                height={150}
                className="z-20 absolute top-0 left-28 rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom group-hover:-translate-y-12 group-hover:scale-110"
              />
              <Image
                src="/accueil/galerie3.JPG"
                alt="dance du club"
                width={150}
                height={150}
                className="z-30 absolute top-10 left-48 rotate-[15deg] rounded-3xl border-4 border-white
                transition-transform duration-500 ease-in-out transform origin-bottom-left group-hover:translate-x-8 group-hover:-rotate-[-25deg] group-hover:scale-110"
              />
              <Link href='/pages/indisponible' className={`${yanoneKaffeesatzFont.className} z-0 opacity-0 text-[#2F3092] text-3xl text-center absolute top-32 left-28 pl-3 group-hover:translate-y-10 md:group-hover:duration-500 ease-in-out md:group-hover:opacity-100 hover:text-[#EE7601]`}>Notre Galerie</Link>
            </div>
          </div>
        </div>
      </div>
        
      {/******************************************* Un peu plus sur nous MOBILE *******************************************/}
      <div className='block md:hidden'>
        <div>
          <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-2xl text-center my-28 ${isUnPeuPlusVisible ? 'animate-scroll-up' : 'opacity-0'}`}>Un peu plus sur nous !</h1>
          <div className='flex flex-col items-center'>
            <div className='relative group h-60 w-80'>
              {/***************** Notre Histoire *****************/}
              <Link href='/pages/indisponible'>
                <Image
                  src="/accueil/notre_histoire1.JPG"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-10 absolute top-1 left-10 rotate-[-15deg] rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom-right ${isImg1Visible ? '-translate-x -translate-y-5 -rotate-[20deg] scale-110' : 'translate(0, 0)'}`}
                />
                <Image
                  src="/accueil/notre_histoire2.JPG"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-20 absolute -top-6 left-28 rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom ${isImg1Visible ? '-translate-y-4 scale-110' : 'translate(0, 0)'}`}
                />
                <Image
                  src="/accueil/notre_histoire3.JPG"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-30 absolute top-4 left-44 rotate-[15deg] rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom-left ${isImg1Visible ? 'translate-x -translate-y-10 -rotate-[-25deg] scale-110' : 'translate(0, 0)'}`}
                />
                <h1 className={`${yanoneKaffeesatzFont.className} text-[#EE7601] text-3xl absolute top-44 left-24 transition-transform duration-500 ease-out transform ${isImg1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>Notre Histoire</h1>
              </Link>
            </div>
            
            {/***************** Notre Boutique *****************/}
            <Link href='/pages/indisponible'>
              <div className='relative group h-60 w-80 my-10'>  
                <Image
                  src="/accueil/boutique1.jpg"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-10 absolute top-0 left-6 rotate-[15deg] rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom-right ${isImg2Visible ? '-translate-x-10 -rotate-[-25deg] scale-110' : 'translate(0, 0)'}`}
                />
                <Image
                  src="/accueil/boutique2.jpg"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-20 absolute top-10 left-28 rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-top ${isImg2Visible ? 'scale-110 -translate-y-5' : 'translate(0, 0)'}`}
                />
                <Image
                  src="/accueil/boutique3.jpg"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-10 absolute top-0 left-48 rotate-[-15deg] rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom-left ${isImg2Visible ? 'translate-x-12 -rotate-[25deg] scale-110' : 'translate(0, 0)'}`}
                />
                <h1 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-3xl absolute top-48 left-24 transition-transform duration-500 ease-out transform ${isImg2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>Notre Boutique</h1>
              </div>
            </Link>

            {/***************** Notre Galerie *****************/}
            <Link href='/pages/indisponible'>
              <div className='relative group h-72 w-80'>
                <Image
                  src="/accueil/galerie1.JPG"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-10 absolute top-10 left-8 rotate-[-15deg] rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom-right ${isImg3Visible ? '-translate-x -rotate-[25deg] scale-110' : 'translate(0, 0)'}`}
                />
                <Image
                  src="/accueil/galerie2.JPG"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-20 absolute top-0 left-28 rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom ${isImg3Visible ? '-translate-y-2 scale-110' : 'translate(0, 0)'}`}
                />
                <Image
                  src="/accueil/galerie3.JPG"
                  alt="dance du club"
                  width={110}
                  height={100}
                  className={`z-30 absolute top-8 left-44 rotate-[15deg] rounded-3xl border-4 border-white
                  transition-transform duration-500 ease-in-out transform origin-bottom-left ${isImg3Visible ? 'translate-x-2 -rotate-[-25deg] scale-110' : 'translate(0, 0)'}`}
                />
                <h1 className={`${yanoneKaffeesatzFont.className} text-[#EE7601] text-3xl absolute top-52 left-24 transition-transform duration-500 ease-out transform ${isImg3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>Notre Galerie</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/******************************************* Citation mobile *******************************************/}
      <p className={`${yanoneKaffeesatzFont.className} block md:hidden px-6 text-center text-[#2F3092] text-xl mt-10 ${isCitationFinVisible ? 'animate-scroll-up' : 'opacity-0'}`}>Situé à Noirmoutier-en-l&apos;île, le club prend vie sur la plage des Sableaux, une plage surveillée agréable, vivante et familiale, où se retrouvent de nombreux habitués de générations en générations !</p>
      <Footer />
    </main>
  );
}

/*
A faire :
- video a faire (pour l'instant mettre en ligne sans)
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

- simplifier ce truc de gogole, l'accordeon pourrait tenir en 3 lignes c'est sur !

J'irai voir l'office du tourisme cette annee pour mettre a jour les informations
*/