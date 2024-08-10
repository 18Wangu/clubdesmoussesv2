import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    "/natation_carousel1.png",
    "/natation_carousel2.png"
];

export default function Natation() {
    return (
        <div>
            <div>
                <div className='flex flex-col items-center bg-[#1073BC] w-full h-72 p-8'>
                    <Image
                        src="/logo_bleu_intermediaire.png"
                        alt="Logo du Club des Mousses bleu intermadiaire"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-4xl mt-6 mb-3`}>Cours de natation individuels</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-3xl`}>sessions de 30 minutes</h2>
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
                    src="/nageur_picto.svg"
                    alt="nageur"
                    width={250}
                    height={250}
                />
                <h2 className={`${yanoneKaffeesatzFont.className} text-center text-xl text-[#1073BC]`}>« Pour la sécurité de vos enfants ou petits enfants, venez prendre des cours de natation au Club des Mousses et apprenez à nager pour la vie ! »</h2>
                <Image
                    src="/drapeau_picto.svg"
                    alt="drapeau"
                    width={250}
                    height={250}
                />
            </div>

            <div className='flex justify-center'>
                    <div className={`${limelightFont.className} text-white text-4xl text-center rounded-club-des-mousses bg-[#2F3092] py-5 px-12 my-10`}>Deroulement des seances</div>
            </div>

            <div className='flex'>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>PREMIERE LIGNE D'EAU</h1>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
            </div>
            <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center my-10`}><strong>Cours particulier</strong> avec le <strong>maître nageur</strong> pendant <strong>10 min</strong></p>

            <div className='flex'>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>DEUXIEME LIGNE D'EAU</h1>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
            </div>
            <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center my-10`}>Un parent rejoint l’enfant pour <strong>continuer l’apprentissage</strong>. Un ou deux exercices sont donnés pour réaliser des répétitions pendant <strong>10 min</strong></p>

            <div className='flex'>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>DERNIERE LIGNE D'EAU</h1>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
            </div>
            <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center my-10`}>Si l’enfant à encore de l’énergie, l’apprentissage se prolonge. Ce peut être aussi un temps réservé pour réaliser des <strong>parcours aquatiques</strong> et ainsi favoriser l’adaptation au milieu aquatique</p>

            <h1 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-14`}>TARIFS</h1>
            <div className='flex justify-center'>
                <div className='bg-slate-400 w-80 h-72'>prendre en photos les tarifs ou demander a maman le fichier word</div>
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
