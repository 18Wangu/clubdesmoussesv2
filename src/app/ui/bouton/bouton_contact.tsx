import { yanoneKaffeesatzFont } from "../font";
import Boutons from "./layout";

export function BoutonContact() {
    return (
        <div>
            <Boutons>
                <div>
                    <button className={`${yanoneKaffeesatzFont.className} text-white text-4xl text-center`}>NOUS CONTACTER</button>
                </div>
            </Boutons>
        </div>
    )
}
