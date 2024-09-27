import { yanoneKaffeesatzFont } from "@/app/ui/font";
import Link from 'next/link';

export default function Indisponible() {
    return (
        //mettre logo orange et ameliorer cette page
        <div className={`${yanoneKaffeesatzFont.className} text-[#EE7601] text-center h-full`}>
            <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-20 text-xl`}>Accueil</Link>
            <h1 className="text-4xl my-32">Page Indiponible</h1>
            <h3 className="text-2xl">OUPS !</h3>
            <p className="text-xl">Vous avez atterri sur une page toujours en développement ! <br /> Revenez plus tard pour dévouvrir ce qu&apos;elle cache...</p>
        </div>
    );
}