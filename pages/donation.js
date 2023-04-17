//Framework
import { Fragment } from "react";
//Locales
import englishLocale from "public/locales/english/donation";
import spanishLocale from "public/locales/spanish/donation";
import {useRouter} from "next/router";
import { facebook } from "public/data/links"
//Components
import Hero2 from "@components/Hero/Hero2";
import Horizontal from "@components/List/Horizaontal";
import Sermons from "@components/Homepage/Sermons";
import Navbar from "@components/Layout/Navbar/Navbar";
//Images
import methodsSvg from "public/images/donation/statue-hands.jpg"
import aboutSvg from "public/images/praying.jpg"
import hands from "public/images/donation/makeChange.jpg"
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
            <Navbar theme={"dark"}/>
            <Hero2 language={language} heroButton={facebook} heroBackground={"h-screen bg-back-2 bg-cover text-neutral-200 "}/>
            <Sermons language={language} sermonButton={facebook} svg={hands}/>
            <Methods language={language} methodsButton={facebook} svg={methodsSvg}/>
            <Horizontal language={language} id={"opportunities"}/>
            <Vertical language={language} verticalButton={facebook} svg={aboutSvg}/>
        </Fragment>
    )
}