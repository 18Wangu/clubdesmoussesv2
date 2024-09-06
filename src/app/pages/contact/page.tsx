import { limelightFont, yanoneKaffeesatzFont } from '@/app/ui/font';
import { Footer } from '@/app/ui/footer/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <div className='h-full'>
                <div className='relative flex flex-col items-center bg-[#2F3092] w-full h-72 p-8'>
                    <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-20 text-white text-xl`}>Accueil</Link>
                    <Image
                        src="/logo_bleu_fonce.png"
                        alt="Logo du Club des Mousses bleu fonce"
                        width={150}
                        height={150}
                    />
                    <h1 className={`${limelightFont.className} text-white text-2xl mt-6 mb-3 text-center md:text-4xl`}>Nous contacter</h1>
                    <h2 className={`${yanoneKaffeesatzFont.className} text-white text-xl md:text-3xl`}>besoin de plus d&apos;informations ?</h2>
                </div>
                <div className='relative w-full hauteur-debut-page'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25885.45073817151!2d-2.235009994655959!3d47.00346968801943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480516d378ffee5d%3A0x37ad8c12f598e577!2sPlage%20des%20Sableaux!5e0!3m2!1sfr!2sfr!4v1723370357156!5m2!1sfr!2sfr"
                        className='w-full h-full border-0'
                        loading="lazy"
                    ></iframe>
                    {/* bouton pas ouf,  enlever ou mettre autre chose */}
                    {/* <div className={`${yanoneKaffeesatzFont.className} hidden md:block absolute top-1/3 right-44 text-white text-2xl md:text-4xl text-center rounded-club-des-mousses pt-3 pb-2 px-6 md:pt-4 md:pb-3 md:px-12 max-w-max bg-[#EE7601]`}>PLAGE DES SABLEAUX</div> */}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-center my-8'>
                <div className='flex flex-col items-center mx-14 flex-grow'>
                    <div className={`${limelightFont.className} text-white text-2xl md:text-3xl text-center rounded-club-des-mousses pt-3 pb-2 px-6 md:pt-4 md:pb-3 md:px-12 max-w-max bg-[#2F3092]`}>TELEPHONE</div>
                    <p className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-xl my-4`}>06 75 14 46 52</p>
                </div>
                <div className='flex flex-col items-center mx-14 flex-grow'>
                    <div className={`${limelightFont.className} text-white text-2xl md:text-3xl text-center rounded-club-des-mousses pt-3 pb-2 px-6 md:pt-4 md:pb-3 md:px-12 max-w-max bg-[#2F3092]`}>MAIL</div>
                    <p className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-xl my-4`}>clubdesmousses@orange.fr</p>
                </div>
                <div className='flex flex-col items-center mx-14 flex-grow'>
                    <div className={`${limelightFont.className} text-white text-2xl md:text-3xl text-center rounded-club-des-mousses pt-3 pb-2 px-6 md:pt-4 md:pb-3 md:px-12 max-w-max bg-[#2F3092]`}>HORAIRES</div>
                    <p className={`${yanoneKaffeesatzFont.className} text-[#1073BC] text-xl my-4`}>Du lundi au samedi de 9h a 19h</p>
                </div>
            </div>
            <h1 className={`${limelightFont.className} text-[#2F3092] text-2xl my-4 text-center`}>Suivez-nous sur les réseaux !</h1>
            <div className='flex justify-center mb-48'>
                <div className='flex justify-center bg-[#2F3092] p-4 rounded-club-des-mousses w-max'>
                    <Link href='https://www.instagram.com/clubdesmousses/'>
                        <Image
                            src="/instagram.svg"
                            alt="Logo Instagram"
                            width={30}
                            height={30}
                            className='mx-4'
                        />
                    </Link>
                    <Link href='https://www.ile-noirmoutier.com/fr/activites-sur-l-ile/zoom-sur/activites-de-loisirs/club-de-plage-des-mousses.html'>
                        <Image
                            src="/logo_office_du_tourisme_NO-bleu.png"
                            alt="Logo Office du Tourisme Noirmoutier"
                            width={30}
                            height={30}
                            className='mx-4'
                        />
                    </Link>
                    {/* enlever tiktok et facebok ? ou mettre arrive prochainement ? */}
                    <Image
                        src="/tiktok.svg"
                        alt="Logo TikTok"
                        width={30}
                        height={30}
                        className='mx-4'
                    />
                    <Image
                        src="/facebook.svg"
                        alt="Logo Facebook"
                        width={30}
                        height={30}
                        className='mx-4'
                    />
                </div>
            </div>
            
            {/**************************************** Footer ****************************************/}
            <Footer />
        </div>
    );
}
