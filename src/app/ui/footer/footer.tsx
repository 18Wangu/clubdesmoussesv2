import Image from 'next/image';
import Link from 'next/link';
import { yanoneKaffeesatzFont } from '../font';

export function Footer() {
    return (
        <footer className={`${yanoneKaffeesatzFont.className} flex justify-around text-white text-xl bg-[#2F3092] py-6 mt-28`}>
            <Image
                src="/logo_bleu_fonce.png"
                alt="Logo club des mousses"
                width={150}
                height={150}
            />
            <div className='flex flex-col'>
                <Link href='/pages/indisponible'>BOUTIQUE</Link>
                <Link href='/pages/indisponible' className='my-2'>NOTRE HISTOIRE</Link>
                <Link href='/pages/indisponible'>GALERIE PHOTO</Link>
            </div>
            <div className='flex flex-col'>
                <Link href='/pages/club'>CLUB</Link>
                <Link href='/pages/natation' className='my-2'>NATATION</Link>
                <Link href='/pages/aquagym'>AQUAGYM</Link>
            </div>
            <div>
                <Link href='/pages/contact'>NOUS CONTACTER</Link>
                <h1 className='my-2'>CLUBDESMOUSSES@ORANGE.FR</h1>
                <h1>0675144652</h1>
            </div>
            <div>
                <h1>NOIRMOUTIER EN L'ÎLE</h1>
                <h1 className='my-2'>PLAGE DES SABLEAUX</h1>
                <h1>MENTIONS LEGALES</h1>
            </div>
        </footer>
    );
}