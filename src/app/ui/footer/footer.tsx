import Image from 'next/image';
import Link from 'next/link';
import { yanoneKaffeesatzFont } from '../font';

export function Footer() {
    return (
        <footer className={`${yanoneKaffeesatzFont.className} flex flex-col items-center text-center md:text-start md:flex-row md:justify-around text-white text-xl bg-[#2F3092] py-6 mt-28`}>
            <Link href='/'>
                <Image
                    //le logo est deforme ! a regarder
                    src="/logo_bleu_fonce.png"
                    alt="Logo club des mousses"
                    width={150}
                    height={150}
                    className='mb-8 md:mb-0 hover:scale-110 transition-transform duration-500 ease-in-out'
                />
            </Link>
            <div className='flex flex-col'>
                <Link href='/pages/indisponible' className='hover:text-[#EE7601]'>BOUTIQUE</Link>
                <Link href='/pages/indisponible' className='my-2 hover:text-[#EE7601]'>NOTRE HISTOIRE</Link>
                <Link href='/pages/indisponible' className='hover:text-[#EE7601]'>GALERIE PHOTO</Link>
            </div>
            <div className='flex flex-col my-8 md:my-0'>
                <Link href='/pages/club' className='hover:text-[#EE7601]'>CLUB</Link>
                <Link href='/pages/natation' className='my-2 hover:text-[#EE7601]'>NATATION</Link>
                <Link href='/pages/aquagym' className='hover:text-[#EE7601]'>AQUAGYM</Link>
            </div>
            <div>
                <Link href='/pages/contact' className='hover:text-[#EE7601]'>NOUS CONTACTER</Link>
                <h1 className='my-2'>CLUBDESMOUSSES@ORANGE.FR</h1>
                <h1>0675144652</h1>
            </div>
            <div className='my-8 md:my-0'>
                <h1>NOIRMOUTIER EN L'ÎLE</h1>
                <h1 className='my-2'>PLAGE DES SABLEAUX</h1>
                <h1>MENTIONS LEGALES</h1>
            </div>
        </footer>
    );
}