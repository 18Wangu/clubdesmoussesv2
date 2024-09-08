import { yanoneKaffeesatzFont, limelightFont } from '@/app/ui/font';
import { Footer } from '@/app/ui/footer/footer';
import Link from 'next/link';  
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function FAQ() {
    return (
        <div>
            <div className='flex flex-col items-center bg-[#EE7601] w-full h-72 p-8'>
                <Link href='/' className={`${yanoneKaffeesatzFont.className} absolute top-10 left-20 text-white text-xl`}>Accueil</Link>
                <h1 className={`${limelightFont.className} text-white text-4xl mt-24`}>Foire aux questions</h1>
            </div>

            {/**************************************** FAQ ****************************************/}
            <div className={`${yanoneKaffeesatzFont.className} flex flex-col items-center`}>
                {/**************** Le club ****************/}
                <h1 className='text-2xl text-[#2F3092] mt-16'>LE CLUB</h1>
                <h3 className='text-xl text-[#2F3092] my-5'>A noter que l&apos;inscription de vos enfants au club peut se faire sur le site mais également sur place à la plage des Sableaux !</h3>

                <div className='flex'>
                    <div className='flex flex-col'>
                        {/* changer ces transition de mongole, tout jeter a la poubelle, typscript juste pour retenir l'etat ouvert ou ferme ptn */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='mb-5 mx-10 bg-[#2F3092] data-[state=open]:bg-[#1073BC] data-[state=open]:transform data-[state=open]:duration-500 data-[state=open]:ease-in-out rounded-club-des-mousses text-white p-5 w-96'>
                                <AccordionTrigger>À partir de quel âge puis-je inscrire mon enfant au club ?</AccordionTrigger>
                                <AccordionContent className='mt-5'>Vous pouvez inscrire votre enfant à partir de l'âge de 2 ans et demi s'il est propre.</AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='mb-5 mx-10 bg-[#2F3092] data-[state=open]:bg-[#1073BC] data-[state=open]:transform data-[state=open]:duration-500 data-[state=open]:ease-in-out rounded-club-des-mousses text-white p-5 w-96'>
                                <AccordionTrigger>À partir de quel âge puis-je inscrire mon enfant au club ?</AccordionTrigger>
                                <AccordionContent className='mt-5'>Vous pouvez inscrire votre enfant à partir de l'âge de 2 ans et demi s'il est propre.</AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='mb-5 mx-10 bg-[#2F3092] data-[state=open]:bg-[#1073BC] data-[state=open]:transform data-[state=open]:duration-500 data-[state=open]:ease-in-out rounded-club-des-mousses text-white p-5 w-96'>
                                <AccordionTrigger>À partir de quel âge puis-je inscrire mon enfant au club ?</AccordionTrigger>
                                <AccordionContent className='mt-5'>Vous pouvez inscrire votre enfant à partir de l'âge de 2 ans et demi s'il est propre.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='flex flex-col'>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='mb-5 mx-10 bg-[#2F3092] data-[state=open]:bg-[#1073BC] data-[state=open]:transform data-[state=open]:duration-500 data-[state=open]:ease-in-out rounded-club-des-mousses text-white p-5 w-96'>
                                <AccordionTrigger>À partir de quel âge puis-je inscrire mon enfant au club ?</AccordionTrigger>
                                <AccordionContent className='mt-5'>Vous pouvez inscrire votre enfant à partir de l'âge de 2 ans et demi s'il est propre.</AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='mb-5 mx-10 bg-[#2F3092] data-[state=open]:bg-[#1073BC] data-[state=open]:transform data-[state=open]:duration-500 data-[state=open]:ease-in-out rounded-club-des-mousses text-white p-5 w-96'>
                                <AccordionTrigger>À partir de quel âge puis-je inscrire mon enfant au club ?</AccordionTrigger>
                                <AccordionContent className='mt-5'>Vous pouvez inscrire votre enfant à partir de l'âge de 2 ans et demi s'il est propre.</AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='mb-5 mx-10 bg-[#2F3092] data-[state=open]:bg-[#1073BC] data-[state=open]:transform data-[state=open]:duration-500 data-[state=open]:ease-in-out rounded-club-des-mousses text-white p-5 w-96'>
                                <AccordionTrigger>À partir de quel âge puis-je inscrire mon enfant au club ?</AccordionTrigger>
                                <AccordionContent className='mt-5'>Vous pouvez inscrire votre enfant à partir de l'âge de 2 ans et demi s'il est propre.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/**************** La natation ****************/}
                <h1 className='text-2xl text-[#2F3092] mt-16'>LA NATATION</h1>
                <h3 className='text-2xl text-[#2F3092] my-5'>A noter que l’inscription de vos enfants a la natation ne peut pas se faire sur le site mais sur place à la plage des Sableaux ou bien par mail !</h3>
            
                {/**************** L'aquagym ****************/}
                <h1>L'AQUAGYM</h1>
                <h3>A noter que l’inscription à l'aquagym peut se faire sur le site mais également sur place à la plage des Sableaux !</h3>
            </div>

            {/**************************************** Footer ****************************************/}
            <Footer />
        </div>
    );
}