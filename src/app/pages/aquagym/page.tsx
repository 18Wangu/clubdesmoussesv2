import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import { Footer } from '@/app/ui/footer/footer';
import Image from 'next/image';
import Link from 'next/link';

const desktopImages = [
    "/aquagym3.jpg",
    "/aquagym2.jpeg",
    "/aquagym1.jpeg",
];
const mobileImages = [
    "/test10.JPG",
    "/test11.jpg"
];

export default function Aquagym() {
    return (
        <div>
            {/**************************************** carousel aquagym ****************************************/}
            <div>
                <div className='flex flex-col items-center bg-[#1AC1F3] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-5 left-5 md:top-10 md:left-20 text-white text-xl`}>Accueil</Link>
                    <Image
                        src="/logo_bleu_clair.png"
                        alt="Logo du Club des Mousses bleu clair"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-2xl mt-6 mb-3 text-center md:text-4xl`}>Aquagym</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-xl md:text-3xl`}>seances de 45 minutes</h2>
                </div>
                <div className='hidden md:block'>
                    <Carousel>
                            {desktopImages.map((src, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    src={src}
                                    alt={`Image de l'aquagym`}
                                    layout='fill'
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
                                    alt={`Image de l'aquagym`}
                                    layout='fill'
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
                    src="/bonome_aquagym.svg"
                    alt="vague divider"
                    width={250}
                    height={250}
                    className='hidden md:block'
                />
                <h2 className={`${yanoneKaffeesatzFont.className} text-center text-xl text-[#1073BC] m-10`}>« Prenez du temps pour vous, 45 min d&apos;activité physique <br /> le matin vous donnera du dynamisme, et du bien-être pour toute la journée »</h2>
                <Image
                    src="/musique_aquagym.svg"
                    alt="vague divider"
                    width={250}
                    height={250}
                    className='hidden md:block'
                />
                <Image
                    src="/bonome_aquagym.svg"
                    alt="vague divider"
                    width={250}
                    height={250}
                    className='block md:hidden'
                />
            </div>

            <div className='flex flex-col items-center'>
                {/**************************************** description ****************************************/}
                <div className={`${limelightFont.className} text-white text-xl md:text-4xl text-center md:rounded-club-des-mousses bg-[#2F3092] py-5 px-12`}>Deroulement des seances</div>
                <p className={`${yanoneKaffeesatzFont.className} mx-10 md:mx-96 text-center text-xl text-[#1073BC] mt-10`}>
                    La séance à lieu dans la piscine du Club.
                    Sous les conseils et démonstrations du maître nageur , entraînez-vous avec des exercices de tonicité sous l&apos;eau, avec ou sans objets, le tout sous de la musique rythmée <br /> 
                    La séance commence a 9h et se finit à 9h45
                </p>
                {/**************************************** Tarifs ****************************************/}
                <h1 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-12`}>TARIFS</h1>
                <div className='flex justify-center items-center group'>
                    <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mb-5 mx-24 group-hover:bg-[#1073BC] transition duration-500 ease-in-out`}>
                        <p>5 seance a la carte</p>
                        <p>90$</p>
                    </div>
                </div>
                <div className='flex justify-center items-center group'>
                    <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mx-24 group-hover:bg-[#1073BC] transition duration-500 ease-in-out`}>
                        <p>10 seance a la carte</p>
                        <p>120$</p>
                    </div>
                </div>
                <div className='my-20'>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={800}
                        height={250}
                        className="rotate-180"
                    />
                    <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-3xl text-center my-14`}>L&apos;inscription aux cours se fait directement au club, <br /> entre 9H ET 10h ou de 15h à 16h</p>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={800}
                        height={250}
                        className="rotate-180"
                    />
                </div>

                {/**************************************** Faq ****************************************/}
                <h3 className={`${yanoneKaffeesatzFont.className} text-3xl text-[#2F3092] mb-7`}>Des Questions ? C&apos;est par ici !</h3>
                <Link href="/pages/faq" className={`${yanoneKaffeesatzFont.className} rounded-club-des-mousses py-3 px-10 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out text-center text-3xl text-white`}>FAQ</Link>
            </div>
            {/**************************************** Footer ****************************************/}
            <Footer />
        </div>
    );
}
