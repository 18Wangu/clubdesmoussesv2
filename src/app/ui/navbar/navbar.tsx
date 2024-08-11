import Link from "next/link";
import { yanoneKaffeesatzFont } from "../font";
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center my-12">
          <div className={`${yanoneKaffeesatzFont.className} flex bg-[#2F3092] text-white rounded-club-des-mousses py-3 px-6 max-w-max text-3xl`}>
              <Link href="/pages/natation" className="px-12 hover:mr-4 transition-margin duration-300">NATATION</Link> {/* mettre le lien de la page natation */}
              <Image 
              src="/divider_vague.svg"
              alt="vague logo"
              width={60}
              height={60}
              className="rotate-180"
              />
              <Link href="/pages/club" className="px-12 hover:mx-4 transition-margin duration-300">CLUB</Link>
              <Image 
              src="/divider_vague.svg"
              alt="vague logo"
              width={60}
              height={60}
              className="rotate-180"
              />
              <Link href="/pages/aquagym" className="px-12 hover:ml-4 transition-margin duration-300">AQUAGYM</Link>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
