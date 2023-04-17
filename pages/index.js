import Navbar from "@components/Layout/Navbar/Navbar";
import {Fragment} from "react";
import Hero from "@components/Hero/Hero";
import About from "@components/Homepage/About";
import Quote from "@components/Homepage/Quote";
import Giving from "@components/Homepage/Giving";
import Sermons from "@components/Homepage/Sermons";
import Team from "@components/Homepage/Team";
import Events from "@components/Homepage/Events";
import {useRouter} from "next/router";
import indexEnglish from "public/locales/english/index.js"
import indexSpanish from "public/locales/spanish/index.js"
import { facebook,tithely } from "public/data/links"
import aboutSvg from "public/icons/ola1.svg"
import relaxing from "public/icons/relaxing.svg"
import homeOffice from "public/icons/homeOffice.svg"
import qrCode from "public/images/qr-code.png"
import jesusChavez from "public/images/jesusChavez.jpg"
import image2 from "public/images/mauricio.jpeg"
import arianeMacias from "public/images/arianeMacias.jpg"

export default function Home() {

  const router = useRouter();
    const {locale} = router;
    const language = locale === 'en-US'
        ? indexEnglish
        : indexSpanish

  return (
    <Fragment>
        <Navbar theme={"light"}/>
        <Hero language={language} heroButton={facebook} heroBackground={"h-screen bg-[url('..//public/images/raised-hands.jpg')] bg-cover text-white"}/>
        <Quote language={language}/>
        <About language={language} aboutButton={facebook} svg={aboutSvg}/>
        <Sermons language={language} sermonButton={facebook} svg={relaxing}/>
        <Events language={language} svg={homeOffice}/>
        <Giving language={language} donationButton={tithely} svg={qrCode}/>
        <Team language={language} svg1={jesusChavez} svg2={image2} svg3={arianeMacias}/>
    </Fragment>
  )
}
