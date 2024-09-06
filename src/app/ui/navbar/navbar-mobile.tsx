import Link from "next/link";
import { yanoneKaffeesatzFont } from "../font";

export default function NavbarMobile() {
    return (
        <div className={`${yanoneKaffeesatzFont.className} block md:hidden text-white text-2xl bg-[#2F3092] py-6`}>
            <div className="flex justify-around">
                <Link href="/pages/natation">NATATION</Link>
                <Link href="/pages/club">CLUB</Link>
                <Link href="/pages/aquagym">AQUAGYM</Link>
            </div>
        </div>
    );
}