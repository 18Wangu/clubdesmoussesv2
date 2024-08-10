import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    "/aquagym1.png",
    "/aquagym2.png"
];

export default function Aquagym() {
    return (
        <div>
            <div>
                <div className='flex flex-col items-center bg-[#1AC1F3] w-full h-72 p-8'>
                    <Image
                        src="/logo_bleu_clair.png"
                        alt="Logo du Club des Mousses bleu clair"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-4xl mt-6 mb-3`}>Seances d'Aquagym</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-3xl`}>seances de 45 minutes</h2>
                </div>
                <Carousel>
                    {images.map((src, index) => (
                    <CarouselItem key={index}>
                        {/* changer la hauteur pour que sa prenne toute la hauteur de l'ecran de maniere responsive */}
                        <div className="relative w-full h-80">
                        <Image
                            src={src}
                            alt={`Image de l'aquagym`}
                            layout="fill"
                            className="absolute"
                        />
                        </div>
                    </CarouselItem>
                    ))}
                </Carousel>
            </div>

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

            <div className='flex justify-center'>
                    <div className={`${limelightFont.className} text-white text-4xl text-center rounded-club-des-mousses bg-[#2F3092] py-5 px-12 my-10`}>Deroulement des seances</div>
            </div>

            <p className={`${yanoneKaffeesatzFont.className} mx-96 text-center text-xl text-[#1073BC]`}>La séance à lieu dans la piscine du Club,
                Sous les conseils et démonstrations du maître nageur , entraînez-vous avec des exercices de tonicité sous l’eau, avec ou sans objets, le tout sous de la musique rythmée
            La séance se finit à 9h45</p>

            <h1 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-14`}>TARIFS</h1>
            <div className='flex flex-col items-center'>
                {/* ajouter animation hover */}
                <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses mb-5`}>
                    <p>5 seance a la carte</p>
                    <p>70$</p>
                </div>
                <div className={`${yanoneKaffeesatzFont.className} flex justify-between text-white text-2xl w-72 py-2 px-6 bg-[#1AC1F3] rounded-club-des-mousses`}>
                    <p>5 seance a la carte</p>
                    <p>70$</p>
                </div>
            </div>

            <h3 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-14`}>Des Questions ? C'est par ici !</h3>
            {/* je pense qu il faut faire un justify center general, plus tard clarifier le code */}
            <div className='flex justify-center'>
                <div className={`${yanoneKaffeesatzFont.className} rounded-club-des-mousses py-3 px-10 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out text-center text-3xl text-white`}>
                    <Link href="/faq">FAQ</Link>
                </div>
            </div>

        </div>
    );
}
