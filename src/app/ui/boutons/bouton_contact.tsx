import { yanoneKaffeesatzFont } from "../font";
import Boutons from "./layout";

export function BoutonContact() {
    return (
        <div>
            <Boutons>
                <div>
                    {/* Aligner le texte au centre sur l'axe vertical */}
                    <button className={`${yanoneKaffeesatzFont.className} text-white text-4xl text-center`}>NOUS CONTACTER</button>
                </div>
            </Boutons>
        </div>
    )
}
