import Sermons from "@components/Homepage/Sermons";
import Navbar from "@components/Layout/Navbar";
import { Fragment } from "react";
import englishLocale from "public/locales/english/donation";
import spanishLocale from "public/locales/spanish/donation";
import {useRouter} from "next/router";
import { facebook } from "public/data/links"
import aboutSvg from "public/images/praying.jpg"
import About from "@components/Homepage/About";
import Hero2 from "@components/Hero/Hero2";
import hands from "public/images/hands.png"

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
            <Sermons language={language} sermonButton={facebook} svg={aboutSvg}/>
            <About language={language} aboutButton={"https://cash.app/$EncuentroChurch"} svg={hands}/>
        </Fragment>
    )
}