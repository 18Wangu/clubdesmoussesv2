import { yanoneKaffeesatzFont, limelightFont } from '@/app/ui/font';
import Link from 'next/link';


export default function FAQ() {
    return (
        <div>
            <div className='flex flex-col items-center bg-[#EE7601] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-20 text-white text-xl`}>Accueil</Link>
                    <h1 className={`${limelightFont.className} text-white text-4xl mt-24`}>Foire aux questions</h1>
                </div>
        </div>
    );
}