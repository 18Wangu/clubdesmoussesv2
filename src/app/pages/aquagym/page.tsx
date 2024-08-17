import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    "/aquagym3.jpg",
    "/aquagym2.jpeg",
    "/aquagym1.jpeg",
];

export default function Aquagym() {
    return (
        <div>
            {/**************************************** carousel aquagym ****************************************/}
            <div>
                <div className='flex flex-col items-center bg-[#1AC1F3] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-20 text-white text-xl`}>Accueil</Link>
                    <Image
                        src="/logo_bleu_clair.png"
                        alt="Logo du Club des Mousses bleu clair"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-4xl mt-6 mb-3`}>Aquagym</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-3xl`}>seances de 45 minutes</h2>
                </div>
                <Carousel>
                        {images.map((src, index) => (
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
            
            {/**************************************** citation ****************************************/}
            <div className='flex justify-around w-full items-center'>
                <Image
                    src="/bonome_aquagym.svg"
                    alt="vague divider"
                    width={250}
                    height={250}
                />
                <h2 className={`${yanoneKaffeesatzFont.className} text-center text-xl text-[#1073BC]`}>« Prenez du temps pour vous, 45 min d’activité physique <br /> le matin vous donnera du dynamisme, et du bien-être pour toute la journée »</h2>
                <Image
                    src="/musique_aquagym.svg"
                    alt="vague divider"
                    width={250}
                    height={250}
                />
            </div>

            <div className='flex flex-col items-center mb-14'>
                {/**************************************** description ****************************************/}
                <div className={`${limelightFont.className} text-white text-4xl text-center rounded-club-des-mousses bg-[#2F3092] py-5 px-12`}>Deroulement des seances</div>
                <p className={`${yanoneKaffeesatzFont.className} mx-96 text-center text-xl text-[#1073BC] mt-10`}>
                    La séance à lieu dans la piscine du Club.
                    Sous les conseils et démonstrations du maître nageur , entraînez-vous avec des exercices de tonicité sous l’eau, avec ou sans objets, le tout sous de la musique rythmée <br /> 
                    La séance commence a 9h et se finit à 9h45
                </p>
                {/**************************************** Tarifs ****************************************/}
                <h1 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-12`}>TARIFS</h1>
                <div className='flex justify-center items-center group'>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={400}
                        height={250}
                        className="rotate-180 pt-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                    />
                    {/* prix a changer ? */}
                    <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mb-5 mx-24 group-hover:bg-[#1073BC] transition duration-500 ease-in-out`}>
                        <p>5 seance a la carte</p>
                        <p>70$</p>
                    </div>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={400}
                        height={250}
                        className="rotate-180 pt-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                    />
                </div>
                <div className='flex justify-center items-center group'>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={400}
                        height={250}
                        className="rotate-180 pt-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                    />
                    {/* prix a changer ? */}
                    <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mx-24 group-hover:bg-[#1073BC] transition duration-500 ease-in-out`}>
                        <p>5 seance a la carte</p>
                        <p>70$</p>
                    </div>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={400}
                        height={250}
                        className="rotate-180 pt-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                    />
                </div>
                {/**************************************** Faq ****************************************/}
                <h3 className={`${yanoneKaffeesatzFont.className} text-3xl text-[#2F3092] mt-20 mb-7`}>Des Questions ? C'est par ici !</h3>
                <Link href="/pages/faq" className={`${yanoneKaffeesatzFont.className} rounded-club-des-mousses py-3 px-10 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out text-center text-3xl text-white`}>FAQ</Link>
            </div>
        </div>
    );
}
