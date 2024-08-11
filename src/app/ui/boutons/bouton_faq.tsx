import { yanoneKaffeesatzFont } from "../font";
import Boutons from "./layout";

export function BoutonFAQ() {
    return (
        <div>
            <Boutons>
                <div>
                    {/* Aligner le texte au centre sur l'axe vertical */}
                    <button className={`${yanoneKaffeesatzFont.className} text-white text-4xl text-center`}>FAQ</button>
                </div>
            </Boutons>
        </div>
    )
}
