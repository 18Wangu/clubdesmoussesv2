"use client";

import { useEffect, useState } from 'react';
import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import { Footer } from '@/app/ui/footer/footer';
import Image from 'next/image';
import Link from 'next/link';

// changer les images
const mobileImages = [
    "/test10.JPG",
    "/test11.jpg"
];

// ajouter plus d'images pour le carousel - images d'enfant qui nagent
const desktopImages = [
    "/natation/ordinateur/natation_carousel1.JPG",
    "/natation/ordinateur/natation_carousel2.JPG",
];

export default function Natation() {
    /*************** animation au scroll mobile ***************/
    const [isCitationVisible, setIsCitationVisible] = useState(false);
    const [isEmojiVisible, setIsEmojiVisible] = useState(false);
    const [isDeroulementSeanceVisible, setIsDeroulementSeanceVisible] = useState(false);
    const [isLigne1Visible, setIsLigne1Visible] = useState(false);
    const [isLigne2Visible, setIsLigne2Visible] = useState(false);
    const [isLigne3Visible, setIsLigne3Visible] = useState(false);
    const [isTarifVisible, setIsTarifVisible] = useState(false);
    const [isInscriptionVisible, setIsInscriptionVisible] = useState(false);
    const [isFaqVisible, setIsFaqVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const screenWidth = window.innerWidth;
        console.log(scrollY);

        if (scrollY > 100) {
            setIsCitationVisible(true);
        } else {
            setIsCitationVisible(false);
        }
        if (scrollY > 300) {
            setIsEmojiVisible(true);
        } else {
            setIsEmojiVisible(false);
        }
        if (screenWidth <= 768) { // mobile
            if (scrollY > 550) {
                setIsDeroulementSeanceVisible(true);
            } else {
                setIsDeroulementSeanceVisible(false);
            }
        } else if (screenWidth > 768) { // desktop
            if (scrollY > 300) {
                setIsDeroulementSeanceVisible(true);
            } else {
                setIsDeroulementSeanceVisible(false);
            }
        }
        if (screenWidth <= 768) {
            if (scrollY > 650) {
                setIsLigne1Visible(true);
            } else {
                setIsLigne1Visible(false);
            }
        } else if (screenWidth > 768) {
            if (scrollY > 450) {
                setIsLigne1Visible(true);
            } else {
                setIsLigne1Visible(false);
            }
        }
        if (screenWidth <= 768) {
            if (scrollY > 850) {
                setIsLigne2Visible(true);
            } else {
                setIsLigne2Visible(false);
            }
        } else if (screenWidth > 768) {
            if (scrollY > 600) {
                setIsLigne2Visible(true);
            } else {
                setIsLigne2Visible(false);
            }
        }
        if (screenWidth <= 768) {
            if (scrollY > 1050) {
                setIsLigne3Visible(true);
            } else {
                setIsLigne3Visible(false);
            }
        } else if (screenWidth > 768) {
            if (scrollY > 700) {
                setIsLigne3Visible(true);
            } else {
                setIsLigne3Visible(false);
            }
        }
        if (screenWidth <= 768) {
            if (scrollY > 1450) {
                setIsTarifVisible(true);
            } else {
                setIsTarifVisible(false);
            }
        } else if (screenWidth > 768) {
            if (scrollY > 900) {
                setIsTarifVisible(true);
            } else {
                setIsTarifVisible(false);
            }
        }
        if (screenWidth <= 768) {
            if (scrollY > 1700) {
                setIsInscriptionVisible(true);
            } else {
                setIsInscriptionVisible(false);
            }
        } else if (screenWidth > 768) {
            if (scrollY > 1200) {
                setIsInscriptionVisible(true);
            } else {
                setIsInscriptionVisible(false);
            }
        }
        if (screenWidth <= 768) {
            if (scrollY > 2000) {
                setIsFaqVisible(true);
            } else {
                setIsFaqVisible(false);
            }
        } else if (screenWidth > 768) {
            if (scrollY > 1550) {
                setIsFaqVisible(true);
            } else {
                setIsFaqVisible(false);
            }
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/**************************************** carousel aquagym ****************************************/}
            <div>
                <div className='flex flex-col items-center bg-[#1073BC] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-5 left-5 md:top-10 md:left-20 text-white text-xl`}>Accueil</Link>
                    <Image
                        src="/logo_bleu_intermediaire.png"
                        alt="Logo du Club des Mousses bleu intermadiaire"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-2xl mt-6 mb-3 text-center md:text-4xl`}>Cours de natation individuels</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-xl md:text-3xl`}>sessions de 30 minutes</h2>
                </div>
                <div className='hidden md:block'>
                    <Carousel>
                        {desktopImages.map((src, index) => (
                        <CarouselItem key={index}>
                            <Image
                                src={src}
                                alt={`Image de la natation`}
                                layout="fill"
                                objectFit='cover'
                            />
                        </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                <div className='block md:hidden'>
                    <Carousel>
                        {mobileImages.map((src, index) => (
                        <CarouselItem key={index}>
                            <Image
                                src={src}
                                alt={`Image de la natation`}
                                layout="fill"
                                objectFit='cover'
                            />
                        </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/**************************************** citation ****************************************/}
            <div className='flex flex-col md:flex-row md:justify-around w-full items-center'>
                <Image
                    src="/nageur_picto.svg"
                    alt="nageur"
                    width={250}
                    height={250}
                    className={`hidden md:block transition-transform duration-500 ease-in-out transform ${isCitationVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} `}
                />
                <h2 className={`${yanoneKaffeesatzFont.className} text-center text-xl text-[#1073BC] mt-16 mx-10 md:mt-0 ${isCitationVisible ? 'animate-scroll-up' : 'opacity-0'} `}>« Pour la sécurité de vos enfants ou petits enfants, venez prendre des cours de natation au Club des Mousses et apprenez à nager pour la vie ! »</h2>
                <Image
                    src="/drapeau_picto.svg"
                    alt="drapeau"
                    width={250}
                    height={250}
                    className={`hidden md:block transition-transform duration-500 ease-in-out transform ${isCitationVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} `}
                />
                <Image
                    src="/nageur_picto.svg"
                    alt="nageur"
                    width={250}
                    height={250}
                    className={`block md:hidden transition-transform duration-500 ease-in-out transform ${isEmojiVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} `}
                />
            </div>

            <div className={`flex flex-col items-center`}>
                <div className={`${limelightFont.className} text-white text-xl md:text-4xl text-center md:rounded-club-des-mousses bg-[#2F3092] py-5 px-12 mb-12 w-full md:w-1/2 ${isDeroulementSeanceVisible ? 'animate-scroll-up' : 'opacity-0'} `}>Deroulement des seances</div>
                {/**************************************** 1ere ligne d'eau ****************************************/}
                <div className={`flex group ${isLigne1Visible ? 'animate-scroll-up' : 'opacity-0'} `}>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="hidden md:block rotate-180 group-hover:-translate-x-10 transition duration-300 ease-in-out"
                    />
                    <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl text-nowrap px-12`}>PREMIERE LIGNE D&apos;EAU</h1>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="hidden md:block rotate-180 group-hover:translate-x-10 transition duration-300 ease-in-out"
                    />
                </div>
                <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-xl m-10 ${isLigne1Visible ? 'animate-scroll-up' : 'opacity-0'} `}><strong>Cours particulier</strong> avec le <strong>maître nageur</strong> pendant <strong>10 min</strong></p>
                {/**************************************** 2eme ligne d'eau ****************************************/}
                <div className={`flex group ${isLigne2Visible ? 'animate-scroll-up' : 'opacity-0'} `}>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="hidden md:block rotate-180 group-hover:-translate-x-10 transition duration-300 ease-in-out"
                    />
                    <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>DEUXIEME LIGNE D&apos;EAU</h1>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="hidden md:block rotate-180 group-hover:translate-x-10 transition duration-300 ease-in-out"
                    />
                </div>
                <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center m-10 ${isLigne2Visible ? 'animate-scroll-up' : 'opacity-0'} `}>Un parent rejoint l&apos;enfant pour <strong>continuer l&apos;apprentissage</strong>. Un ou deux exercices sont donnés pour réaliser des répétitions pendant <strong>10 min</strong></p>
                {/**************************************** 3eme ligne d'eau ****************************************/}
                <div className={`flex group ${isLigne3Visible ? 'animate-scroll-up' : 'opacity-0'} `}>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="hidden md:block rotate-180 group-hover:-translate-x-10 transition duration-300 ease-in-out"
                    />
                    <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>TROISIEME LIGNE D&apos;EAU</h1>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="hidden md:block rotate-180 group-hover:translate-x-10 transition duration-300 ease-in-out"
                    />
                </div>
                <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center m-10 ${isLigne3Visible ? 'animate-scroll-up' : 'opacity-0'} `}>Si l&apos;enfant à encore de l&apos;énergie, l&apos;apprentissage se prolonge. Ce peut être aussi un temps réservé pour réaliser des <strong>parcours aquatiques</strong> et ainsi favoriser l&apos;adaptation au milieu aquatique</p>
                
                {/**************************************** Tarifs ****************************************/}
                <h1 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-12 ${isTarifVisible ? 'animate-scroll-up' : 'opacity-0'} `}>TARIFS</h1>
                <div className='flex justify-center items-center'>
                    <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mb-5 mx-24 hover:bg-[#1073BC] transition duration-500 ease-in-out ${isTarifVisible ? 'animate-scroll-up' : 'opacity-0'} `}>
                        <p>5 seance de natation</p>
                        <p>105$</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mx-24 hover:bg-[#1073BC] transition duration-500 ease-in-out ${isTarifVisible ? 'animate-scroll-up' : 'opacity-0'} `}>
                        <p>10 seance de natation</p>
                        <p>170$</p>
                    </div>
                </div>
                <div className={`my-20 ${isInscriptionVisible ? 'animate-scroll-up' : 'opacity-0'} `}>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={800}
                        height={250}
                        className="rotate-180"
                    />
                    <p className={`${yanoneKaffeesatzFont.className} text-[#EE7601] text-3xl text-center my-14`}>L&apos;inscription aux cours se fait directement au club, <br /> entre 9H ET 10h ou de 15h à 16h</p>
                    <Image
                        src="/elements_graphique/divider_vague_2.svg"
                        alt="vague divider"
                        width={800}
                        height={250}
                        className="rotate-180"
                    />
                </div>
                {/**************************************** Faq ****************************************/}
                <h3 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] mb-7 ${isFaqVisible ? 'animate-scroll-up' : 'opacity-0'} `}>Des Questions ? C&apos;est par ici !</h3>
                <Link href="/pages/faq" className={`${yanoneKaffeesatzFont.className} rounded-club-des-mousses py-3 px-10 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out text-center text-3xl text-white ${isFaqVisible ? 'animate-scroll-up' : 'opacity-0'} `}>FAQ</Link>
            </div>
            {/**************************************** Footer ****************************************/}
            <Footer />
        </div>
    );
}
