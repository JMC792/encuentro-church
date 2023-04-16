import Sermons from "@components/Homepage/Sermons";
import Navbar from "@components/Layout/Navbar";
import { Fragment } from "react";
import englishLocale from "public/locales/english/donation";
import spanishLocale from "public/locales/spanish/donation";
import {useRouter} from "next/router";
import { facebook } from "public/data/links"
import aboutSvg from "public/images/praying.jpg"
import methodsSvg from "public/images/donation/statue-hands.jpg"
import Hero2 from "@components/Hero/Hero2";
import hands from "public/images/donation/makeChange.jpg"
import Horizontal from "@components/List/Horizaontal";
import jesusChavez from "public/images/jesusChavez.jpg"
import image2 from "public/images/mauricio.jpeg"
import arianeMacias from "public/images/arianeMacias.jpg"
import Vertical from "@components/List/Vertical";
import Methods from "@components/Donation/Methods";

export default function Donation(){

    const router = useRouter();
    const {locale} = router;
    const language = locale === 'en-US'
        ? englishLocale
        : spanishLocale

    return(
        <Fragment>
            <Navbar/>
            <Hero2 language={language} heroButton={facebook} heroBackground={"h-screen bg-[url('..//public/images/coffee.jpg')] bg-cover text-neutral-200 "}/>
            <Sermons language={language} sermonButton={facebook} svg={hands}/>
            <Methods language={language} methodsButton={facebook} svg={methodsSvg}/>
            <Horizontal language={language} svg1={jesusChavez} svg2={image2} svg3={arianeMacias} id={"opportunities"}/>
            <Vertical language={language} verticalButton={facebook} svg={aboutSvg}/>
        </Fragment>
    )
}