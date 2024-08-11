import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';

// choisir des images de meilleur qualité
const images = [
    "/natation_carousel1.JPG",
    "/natation_carousel2.png"
];

export default function Natation() {
    return (
        <div>
            {/**************************************** carousel aquagym ****************************************/}
            <div>
                <div className='flex flex-col items-center bg-[#1073BC] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-20 text-white text-xl`}>Accueil</Link>
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

            {/**************************************** citation ****************************************/}
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

            <div className='flex flex-col items-center mb-14'>
                <div className={`${limelightFont.className} text-white text-4xl text-center rounded-club-des-mousses bg-[#2F3092] py-5 px-12 mb-12`}>Deroulement des seances</div>
                {/**************************************** 1ere ligne d'eau ****************************************/}
                <div className='flex group'>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="rotate-180 group-hover:-translate-x-10 transition duration-300 ease-in-out"
                    />
                    <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl text-nowrap px-12`}>PREMIERE LIGNE D'EAU</h1>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="rotate-180 group-hover:translate-x-10 transition duration-300 ease-in-out"
                    />
                </div>
                <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-center text-xl my-10`}><strong>Cours particulier</strong> avec le <strong>maître nageur</strong> pendant <strong>10 min</strong></p>
                {/**************************************** 2eme ligne d'eau ****************************************/}
                <div className='flex group'>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="rotate-180 group-hover:-translate-x-10 transition duration-300 ease-in-out"
                    />
                    <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>DEUXIEME LIGNE D'EAU</h1>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="rotate-180 group-hover:translate-x-10 transition duration-300 ease-in-out"
                    />
                </div>
                <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center my-10`}>Un parent rejoint l’enfant pour <strong>continuer l’apprentissage</strong>. Un ou deux exercices sont donnés pour réaliser des répétitions pendant <strong>10 min</strong></p>
                {/**************************************** 3eme ligne d'eau ****************************************/}
                <div className='flex group'>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="rotate-180 group-hover:-translate-x-10 transition duration-300 ease-in-out"
                    />
                    <h1 className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-3xl px-12 text-nowrap`}>DERNIERE LIGNE D'EAU</h1>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={1050}
                        height={150}
                        className="rotate-180 group-hover:translate-x-10 transition duration-300 ease-in-out"
                    />
                </div>
                <p className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center my-10`}>Si l’enfant à encore de l’énergie, l’apprentissage se prolonge. Ce peut être aussi un temps réservé pour réaliser des <strong>parcours aquatiques</strong> et ainsi favoriser l’adaptation au milieu aquatique</p>
                {/**************************************** Tarifs ****************************************/}
                <h1 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] my-14`}>TARIFS</h1>
                <div className='bg-slate-400 w-80 h-72'>prendre en photos les tarifs ou demander a maman le fichier word</div> {/* ajouter les tarifs */}
                {/**************************************** Faq ****************************************/}
                <h3 className={`${yanoneKaffeesatzFont.className} text-center text-3xl text-[#2F3092] mt-20 mb-7`}>Des Questions ? C'est par ici !</h3>
                <Link href="/faq" className={`${yanoneKaffeesatzFont.className} rounded-club-des-mousses py-3 px-10 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out text-center text-3xl text-white`}>FAQ</Link>
            </div>
        </div>
    );
}
