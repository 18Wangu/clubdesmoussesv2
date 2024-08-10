import { Carousel, CarouselItem } from '@/app/components/petit_carousel';
import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
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
            <div>
                <div className='flex flex-col items-center bg-[#2F3092] w-full h-72 p-8'>
                    <Image
                        src="/logo_bleu_fonce.png"
                        alt="Logo du Club des Mousses bleu fonce"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-4xl mt-6 mb-3`}>Le Club des Mousses</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-3xl`}>du lundi au samedi</h2>
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
                    src="/trompette.svg"
                    alt="nageur"
                    width={250}
                    height={250}
                />
                <h2 className={`${yanoneKaffeesatzFont.className} text-center text-xl text-[#1073BC]`}>« En plus de se défouler toute la journée, le sport et les activités de groupes sont des occasions de lier des amitiés, qui durent parfois toute la vie ! »</h2>
                <Image
                    src="/cabine.svg"
                    alt="drapeau"
                    width={250}
                    height={250}
                />
            </div>

            <div className='flex justify-center'>
                    <div className={`${limelightFont.className} text-white text-4xl text-center rounded-club-des-mousses bg-[#2F3092] py-5 px-12 my-10`}>Differents groupes d'age</div>
            </div>

            <section className='flex justify-center'>
                <div>
                    <div className='flex items-center'>
                        <Image
                            src="/genius.svg"
                            alt='genius'
                            width={150}
                            height={150}
                        />
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>Genius</h3>
                        {/* aligner correctement les ages 
                        trouver une facon de rendre tous les h3 avec la meme classname*/}
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>10 ans - 14 ans</h3>
                    </div>
                    <div className='flex items-center'>
                        <Image
                            src="/mickey.svg"
                            alt='mickey'
                            width={150}
                            height={150}
                        />
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>Mickey</h3>
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>6 ans et demi - 9 ans</h3>
                    </div>
                    <div className='flex items-center'>
                        <Image
                            src="/petit_loup.svg"
                            alt='petit loup'
                            width={150}
                            height={150}
                        />
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>P'tit-Loup</h3>
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>4 ans et demi - 6 ans</h3>
                    </div>
                    <div className='flex items-center'>
                        <Image
                            src="/winnie.svg"
                            alt='winnie'
                            width={150}
                            height={150}
                        />
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>Winnie</h3>
                        <h3 className={`${yanoneKaffeesatzFont.className} mx-12 text-[#1AC1F3] text-xl`}>2 ans et demi - 4 ans</h3>
                    </div>
                </div>
                <div>
                    <div className='w-72 h-96 bg-slate-500'>photos ici</div>
                </div>
            </section>

            <div className='flex flex-col items-center'>
                <h1 className={`${limelightFont.className} text-[#2F3092] text-3xl`}>Activites dans la journée</h1>
                <div>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-2xl text-center my-9 text-[#1073BC]`}>MATINEE</h2>
                    <p className={`${yanoneKaffeesatzFont.className} mx-80 text-center text-[#1073BC]`}>
                        Les enfants peuvent arriver entre 9h et 10h
                        À 10h, la trompette sonne, c'est l'heure de la mythique Chanson du Club
                        <br /><br />
                        Chaque groupe d'âge évolue avec son moniteur, la matinée se divise en deux parties : 
                        <br /><br />
                        Une première partie sur des parcours de motricité pour les plus petits avec du matériel adapté
                        Pour les 6-9 ans, nous organisons des courses de relais, des défis, etc
                        Et pour les 10-14 ans, l'animateur organise du sport (football, handball, tennis de table, volley, bike and run...)
                        <br /><br />
                        Dans un deuxième temps, des jeux traditionnels (balles aux prisonniers, tomate ketchup, jeux au bord de l'eau ou jeux dans les bois...)
                        <br /><br />
                        La fin de matinée se clôture par le défi du midi
                        Les parents/grands-parents viennent récupérer les enfants vers 12h30.
                    </p>
                </div>
                <div>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-2xl text-center my-9 text-[#1073BC]`}>APRES-MIDI</h2>
                    <p className={`${yanoneKaffeesatzFont.className} mx-80 text-center text-[#1073BC]`}>
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

            <div className='flex flex-col items-center'>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
                <div className='flex'>
                    <Link href='/inscription' className='bg'>INSCRIPTION</Link>
                    <h4>REMPLISSEZ LE FORMULAIRE D'INSCRIPTION ICI !</h4>
                </div>
                <Image
                    src="/divider_vague_2.svg"
                    alt="vague divider"
                    width={1050}
                    height={150}
                    className="rotate-180"
                />
            </div>
            <h4>TARIFS</h4>
        </div>
    );
}
