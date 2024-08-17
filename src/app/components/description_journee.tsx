"use client";

import { useState } from "react";
import { yanoneKaffeesatzFont } from "../ui/font";

const DescriptionJourneeClub: React.FC = () => {
    const [hovered, setHovered] = useState<'matinee' | 'apres-midi' | null>(null);

    const handleMouseEnter = (section: 'matinee' | 'apres-midi') => {
        setHovered(section);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div>
            {/**************************************** matinee ****************************************/}
            <div
                className={`${yanoneKaffeesatzFont.className} text-center rounded-club-des-mousses width-explication-journee p-8 ${
                    hovered === 'matinee' ? 'text-white bg-[#1073BC]' : 'text-[#1073BC] bg-white'
                }`}
                onMouseEnter={() => handleMouseEnter('matinee')}
                onMouseLeave={handleMouseLeave}
            >
                <h2 className="text-2xl mb-9">MATINEE</h2>
                <p>
                    Les enfants peuvent arriver entre 9h et 10h
                    À 10h, la trompette sonne, c&apos;est l'heure de la mythique Chanson du Club
                    <br /><br />
                    Chaque groupe d&apos;âge évolue avec son moniteur, la matinée se divise en deux parties : 
                    <br /><br />
                    Une première partie sur des parcours de motricité pour les plus petits avec du matériel adapté
                    Pour les 6-9 ans, nous organisons des courses de relais, des défis, etc
                    Et pour les 10-14 ans, l&apos;animateur organise du sport (football, handball, tennis de table, volley, bike and run...)
                    <br /><br />
                    Dans un deuxième temps, des jeux traditionnels (balles aux prisonniers, tomate ketchup, jeux au bord de l&apos;eau ou jeux dans les bois...)
                    <br /><br />
                    La fin de matinée se clôture par le défi du midi
                    Les parents/grands-parents viennent récupérer les enfants vers 12h30.
                </p>
            </div>

            {/**************************************** apres midi ****************************************/}
            <div
                className={`${yanoneKaffeesatzFont.className} text-center rounded-club-des-mousses width-explication-journee p-8 ${
                    hovered === 'apres-midi' ? 'text-[#1073BC] bg-white' : 'text-white bg-[#1073BC]'
                }`}
                onMouseEnter={() => handleMouseEnter('apres-midi')}
                onMouseLeave={handleMouseLeave}
            >
                <h2 className="text-2xl mb-9">APRES-MIDI</h2>
                <p>
                    15h à 16h, les enfants peuvent jouer librement sous notre surveillance. Trampoline, football, jeux sur les installations sont proposés
                    <br /><br />
                    16h à 17h30, nous organisons un concours différent chaque après-midi de la semaine : concours de châteaux de sable, de précision, athlétique, grands jeux, course en mer, jeux de hasard, spectacle, danse, etc
                    <br /><br />
                    À 17h30, un goûter est proposé suivi de jeux libres
                    <br /><br />
                    À 18h, tous les soirs, nous organisons une remise de cadeaux
                    <br /><br />
                    18h30 à 19h, les enfants peuvent choisir entre une baignade dans la piscine, un entraînement de trampoline ou une rencontre de football.
                </p>
            </div>
        </div>
    );
};

export default DescriptionJourneeClub;