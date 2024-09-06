import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import { Footer } from '@/app/ui/footer/footer';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    "/club_carousel1.png",
    "/club_carousel2.png",
    "/club_carousel3.png"
];

export default function Club() {
    return (
        <div>
            {/**************************************** carousel club ****************************************/}
            <div>
                <div className='flex flex-col items-center bg-[#2F3092] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-10 md:left-20 text-white text-xl`}>Accueil</Link>
                    <Image
                        src="/logo_bleu_fonce.png"
                        alt="Logo du Club des Mousses bleu fonce"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-center text-xl md:text-4xl mt-6 mb-3`}>Le Club des Mousses</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-3xl`}>du lundi au samedi</h2>
                </div>
                <Carousel>
                    {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={src}
                            alt={`Image de l'aquagym`}
                            layout="fill"
                            objectFit='cover'
                        />
                    </CarouselItem>
                    ))}
                </Carousel>
            </div>

            {/**************************************** citation ****************************************/}
            <div className='flex flex-col md:flex-row md:justify-around w-full items-center my-10 md:mt-5'>
                <Image
                    src="/trompette.svg"
                    alt="nageur"
                    width={250}
                    height={250}
                    className='hidden md:block'
                />
                <h2 className={`${yanoneKaffeesatzFont.className} text-center text-xl text-[#1073BC] mx-10`}>« En plus de se défouler toute la journée, le sport et les activités de groupes sont des occasions de lier des amitiés, qui durent parfois toute la vie ! »</h2>
                <Image
                    src="/cabine.svg"
                    alt="drapeau"
                    width={250}
                    height={250}
                />
            </div>

            <div className='flex flex-col items-center'>
                {/**************************************** groupes d'age ****************************************/}
                <div className={`${limelightFont.className} text-white text-xl md:text-4xl text-center md:rounded-club-des-mousses bg-[#2F3092] py-5 px-12 my-10`}>Differents groupes d&apos;age</div>
                    <div className='hidden md:block'>
                        <div className='flex my-16'>
                            <div className='flex flex-col'>
                                {/***************** Genius *****************/}
                                <div className='flex items-center'>
                                    <Image
                                        src="/genius.svg"
                                        alt='genius'
                                        width={150}
                                        height={150}
                                    />
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-16 text-[#1AC1F3] text-xl`}>Genius</h3>
                                    {/* aligner correctement les ages */}
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>10 ans - 14 ans</h3>
                                </div>
                                {/***************** Mickey *****************/}
                                <div className='flex items-center'>
                                    <Image
                                        src="/mickey.svg"
                                        alt='mickey'
                                        width={150}
                                        height={150}
                                    />
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-16 text-[#1AC1F3] text-xl`}>Mickey</h3>
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>6 ans et demi - 9 ans</h3>
                                </div>
                                {/***************** Petit Loup *****************/}
                                <div className='flex items-center'>
                                    <Image
                                        src="/petit_loup.svg"
                                        alt='petit loup'
                                        width={150}
                                        height={150}
                                    />
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-16 text-[#1AC1F3] text-xl`}>P&apos;tit-Loup</h3>
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-7 text-[#1AC1F3] text-xl`}>4 ans et demi - 6 ans</h3>
                                </div>
                                {/***************** Winnie *****************/}
                                <div className='flex items-center'>
                                    <Image
                                        src="/winnie.svg"
                                        alt='winnie'
                                        width={150}
                                        height={150}
                                    />
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-16 text-[#1AC1F3] text-xl`}>Winnie</h3>
                                    <h3 className={`${yanoneKaffeesatzFont.className} mx-11 text-[#1AC1F3] text-xl`}>2 ans et demi - 4 ans</h3>
                                </div>
                            </div>
                            
                            {/**************************************** photo club ****************************************/}
                            <div className='group mt-10'>
                                <Image
                                    src="/figurines.JPG"
                                    alt="dance du club"
                                    width={250}
                                    height={250}
                                    className="z-40 relative rounded-club-des-mousses -rotate-6 border-4 border-white transition-transform duration-500 ease-in-out transform origin-bottom-left group-hover:-rotate-12 group-hover:-translate-x-10 group-hover:-translate-y-10 group-hover:scale-110"
                                />
                                <Image
                                    src="/spectacle.JPG"
                                    alt="podium du club"
                                    width={250}
                                    height={250}
                                    className="z-30 relative -top-16 left-1/3 rounded-club-des-mousses rotate-12 border-4 border-white transition-transform duration-500 ease-in-out origin-bottom-left group-hover:translate-x-16 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110"
                                />
                                <Image
                                    src="/anniversaire_club.JPG"
                                    alt="podium du club"
                                    width={250}
                                    height={250}
                                    className="z-20 relative -top-32 rounded-club-des-mousses rotate-6 border-4 border-white transition-transform duration-500 ease-in-out origin-bottom-right group-hover:-translate-x-8 group-hover:translate-y-20 group-hover:-rotate-0 group-hover:scale-110"
                                />
                                <Image
                                    src="/podium_theo.JPG"
                                    alt="podium du club"
                                    width={250}
                                    height={250}
                                    className="z-10 relative -top-48 left-1/3 rounded-club-des-mousses -rotate-12 border-4 border-white transition-transform duration-500 ease-in-out group-hover:translate-y-32 group-hover:translate-x-20 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                    {/**************************************** groupes d'age mobile ****************************************/}
                    <div className='block md:hidden'>
                        <div>
                            <div className='flex items-center mx-10'>
                                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-xl`}>Genius <br /> 10 ans - 14 ans</h1>
                                <Image
                                    src="/genius.svg"
                                    alt='winnie'
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className='flex items-center mx-10'>
                                <Image
                                    src="/mickey.svg"
                                    alt='winnie'
                                    width={150}
                                    height={150}
                                />
                                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-xl`}>Winnie <br /> 6 ans et demi - 9 ans</h1>
                            </div>
                            <div className='flex items-center mx-10'>
                                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-xl`}>P&apos;tit-Loup <br /> 4 ans - 6 ans</h1>
                                <Image
                                    src="/petit_loup.svg"
                                    alt='winnie'
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className='flex items-center mx-10'>
                                <Image
                                    src="/winnie.svg"
                                    alt='winnie'
                                    width={150}
                                    height={150}
                                />
                                <h1 className={`${yanoneKaffeesatzFont.className} text-[#1AC1F3] text-xl`}>Winnie <br /> 2 ans et demi - 4 ans</h1>
                            </div>
                        </div>
                        {/**************************************** photo club ****************************************/}
                        <div className='mt-16'>
                            <Image
                                src="/figurines.JPG"
                                alt="dance du club"
                                width={200}
                                height={200}
                                className='z-40 relative top-5 left-4 rounded-club-des-mousses -rotate-6 border-4 border-white'
                            />
                            <Image
                                src="/spectacle.JPG"
                                alt="podium du club"
                                width={200}
                                height={200}
                                className='z-30 relative -top-10 left-1/3 rounded-club-des-mousses rotate-12 border-4 border-white'
                            />
                            <Image
                                src="/anniversaire_club.JPG"
                                alt="podium du club"
                                width={200}
                                height={200}
                                className='z-20 relative -top-24 left-10 rounded-club-des-mousses rotate-3 border-4 border-white'
                            />
                            <Image
                                src="/podium_theo.JPG"
                                alt="podium du club"
                                width={200}
                                height={200}
                                className='z-10 relative -top-36 left-1/3 rounded-club-des-mousses -rotate-12 border-4 border-white'
                            />
                        </div>
                    </div>

                {/**************************************** description journee ****************************************/}
                <h1 className={`${limelightFont.className} text-[#2F3092] text-center text-xl md:text-3xl mb-7`}>Activites dans la journée</h1>
                {/**************************************** matinee ****************************************/}
                <div className='hidden md:block'>
                    <div className='card-flip heigth-explication-journee'>
                        <div className='card-inner relative width-explication-journee'>
                            <div className={`${yanoneKaffeesatzFont.className} card-front absolute text-center text-[#1073BC] rounded-club-des-mousses width-explication-journee p-8 border-2 border-[#1073BC]`}>
                                <h2 className='text-2xl mb-9'>MATINEE</h2>
                                <p>
                                    Les enfants peuvent arriver entre 9h et 10h
                                    À 10h, la trompette sonne, c&apos;est l&apos;heure de la mythique Chanson du Club
                                    <br /><br />
                                    Chaque groupe d&apos;âge évolue avec son moniteur, la matinée se divise en deux parties : 
                                    <br /><br />
                                    Une première partie sur des parcours de motricité pour les plus petits avec du matériel adapté
                                    Pour les 6-9 ans, nous organisons des courses de relais, des défis, etc
                                    Et pour les 10-14 ans, l&apos;animateur organise du sport (football, handball, tennis de table, volley, bike and run...)
                                    <br /><br />
                                    Dans un deuxième temps, des jeux traditionnels (balles aux prisonniers, tomate ketchup, jeux au bord de l&apos;eau ou jeux dans les bois...)
                                    <br /><br />
                                    La fin de matinée se clôture par le défi du midi
                                    Les parents/grands-parents viennent récupérer les enfants vers 12h30.
                                </p>
                            </div>
                            {/**************************************** apres midi ****************************************/}
                            <div className={`${yanoneKaffeesatzFont.className} card-back absolute text-center text-white bg-[#1073BC] rounded-club-des-mousses width-explication-journee p-8 group-hover:text-[#1073BC] group-hover:bg-white transform duration-500 ease-in-out`}>
                                <h2 className='text-2xl mb-9'>APRES-MIDI</h2>
                                <p>
                                    15h à 16h, les enfants peuvent jouer librement sous notre surveillance. Trampoline, football, jeux sur les installations sont proposés
                                    <br /><br />
                                    16h à 17h30, nous organisons un concours différent chaque après-midi de la semaine : concours de châteaux de sable, de précision, athlétique, grands jeux, course en mer, jeux de hasard, spectacle, danse, etc
                                    <br /><br />
                                    À 17h30, un goûter est proposé suivi de jeux libres
                                    <br /><br />
                                    À 18h, tous les soirs, nous organisons une remise de cadeaux
                                    <br /><br />
                                    18h30 à 19h, les enfants peuvent choisir entre une baignade dans la piscine, un entraînement de trampoline ou une rencontre de football.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/**************************************** journee mobile ****************************************/}
                <div className='block md:hidden'>
                    {/**************************************** matinee mobile ****************************************/}
                    <div className={`${yanoneKaffeesatzFont.className} text-center text-[#1073BC] rounded-club-des-mousses p-4 mx-4 border-2 border-[#1073BC]`}>
                        <h2 className='text-2xl mb-9'>MATINEE</h2>
                            <p>
                                Les enfants peuvent arriver entre 9h et 10h
                                À 10h, la trompette sonne, c&apos;est l&apos;heure de la mythique Chanson du Club
                                <br /><br />
                                Chaque groupe d&apos;âge évolue avec son moniteur, la matinée se divise en deux parties : 
                                <br /><br />
                                Une première partie sur des parcours de motricité pour les plus petits avec du matériel adapté
                                Pour les 6-9 ans, nous organisons des courses de relais, des défis, etc
                                Et pour les 10-14 ans, l&apos;animateur organise du sport (football, handball, tennis de table, volley, bike and run...)
                                <br /><br />
                                Dans un deuxième temps, des jeux traditionnels (balles aux prisonniers, tomate ketchup, jeux au bord de l&apos;eau ou jeux dans les bois...)
                                <br /><br />
                                La fin de matinée se clôture par le défi du midi
                                Les parents/grands-parents viennent récupérer les enfants vers 12h30.
                            </p>
                    </div>
                    {/**************************************** apres midi mobile ****************************************/}
                    <div className={`${yanoneKaffeesatzFont.className} text-center text-white bg-[#1073BC] rounded-club-des-mousses p-4 mt-10 mx-4`}>
                        <h2 className='text-2xl mb-9'>APRES-MIDI</h2>
                            <p>
                                15h à 16h, les enfants peuvent jouer librement sous notre surveillance. Trampoline, football, jeux sur les installations sont proposés
                                <br /><br />
                                16h à 17h30, nous organisons un concours différent chaque après-midi de la semaine : concours de châteaux de sable, de précision, athlétique, grands jeux, course en mer, jeux de hasard, spectacle, danse, etc
                                <br /><br />
                                À 17h30, un goûter est proposé suivi de jeux libres
                                <br /><br />
                                À 18h, tous les soirs, nous organisons une remise de cadeaux
                                <br /><br />
                                18h30 à 19h, les enfants peuvent choisir entre une baignade dans la piscine, un entraînement de trampoline ou une rencontre de football.
                            </p>
                    </div>
                </div>
                
                {/**************************************** inscription ****************************************/}
                <div className=''>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={800}
                        height={150}
                        className="rotate-180 mt-16 md:mt-0"
                    />
                    {/**************************************** bouton et texte ****************************************/}
                    <div className='hidden md:block'>
                        <div className='flex justify-between items-center my-10'>
                            <div className='group'>
                                <Link href='/pages/inscription' className={`${yanoneKaffeesatzFont.className} absolute text-white text-2xl md:text-4xl text-center rounded-club-des-mousses pt-3 pb-2 px-12 md:pt-5 md:pb-4 md:px-16 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out`}>INSCRIPTION</Link>
                                <div className="relative border-2 border-white rounded-club-des-mousses w-7 h-7 top-3 left-3 transition-transform duration-500 ease-out transform translate-y-20 group-hover:-translate-y-1"></div>
                                <div className="relative border-2 border-white rounded-club-des-mousses w-4 h-4 top-2 left-9 transition-transform duration-300 ease-out transform translate-y-20 group-hover:-translate-y-1"></div>
                                <div className="relative border-2 border-white rounded-club-des-mousses w-3 h-3 top-2 left-7 transition-transform duration-200 ease-out transform translate-y-20 group-hover:-translate-y-1"></div>
                                <div className="relative border-2 border-white rounded-club-des-mousses w-3 h-3 bottom-2 left-52 transition-transform duration-500 ease-out transform translate-y-20 group-hover:-translate-y-1"></div>
                                <div className="relative border-2 border-white rounded-club-des-mousses w-5 h-5 bottom-12 left-56 transition-transform duration-300 ease-out transform translate-y-20 group-hover:-translate-y-1"></div>
                            </div>
                            <h4 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-3xl`}>REMPLISSEZ LE FORMULAIRE D&apos;INSCRIPTION ICI !</h4>
                        </div>
                    </div>
                    {/**************************************** bouton et texte mobile ****************************************/}
                    <div className='block md:hidden'>
                        <div className='flex flex-col items-center'>
                            <h4 className={`${yanoneKaffeesatzFont.className} text-[#2F3092] text-xl text-center mt-8 mb-3`}>REMPLISSEZ LE FORMULAIRE D&apos;INSCRIPTION ICI !</h4>
                            <div className='group'>
                                <Link href='/pages/inscription' className={`${yanoneKaffeesatzFont.className} text-white text-2xl text-center rounded-club-des-mousses pt-3 pb-2 px-12 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out`}>INSCRIPTION</Link>
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/divider_vague_2.svg"
                        alt="vague divider"
                        width={800}
                        height={150}
                        className="rotate-180  mt-8 md:mt-0"
                    />
                </div>

                {/**************************************** Faq ****************************************/}
                <h3 className={`${yanoneKaffeesatzFont.className} text-3xl text-[#2F3092] mt-20 mb-7`}>Des Questions ? C&apos;est par ici !</h3>
                <Link href="/pages/faq" className={`${yanoneKaffeesatzFont.className} rounded-club-des-mousses py-3 px-10 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out text-center text-3xl text-white`}>FAQ</Link>
            </div>
            {/**************************************** Footer ****************************************/}
            <Footer />
        </div>
    );
}
