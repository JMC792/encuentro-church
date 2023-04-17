import {useState, useEffect, Fragment} from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";
import navbar_en from 'public/locales/english/navbar'
import navbar_es from 'public/locales/spanish/navbar'
import Image from "next/image";
import logo from "public/icons/logo.svg";
import SideNav from './SideNav';
import links from 'public/data/links';

function Navbar({
    theme
}) {

    //Determines Locales
    const router = useRouter();
    const {locale} = router;
    const language = locale === 'en-US'
        ? navbar_en
        : navbar_es;

    //Off Canvas (mobile) menu hook
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    // Adds Sticky to Navbar
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const navbar = document.querySelector('.header-selection');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('is-sticky')
            : navbar.classList.remove('is-sticky');
    };

    const themeColor = (theme == "light")
                ? theme = "absolute w-full z-10 top-0 text-white"
                : theme = "absolute w-full z-10 top-0 text-black"

    return(
        <Fragment>
            
            <nav className={themeColor}>
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">

                        {/* List Wrapper */}
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Link href={"/"} >
                                <Image src={logo} height={60} width={100} alt={"logo"} className={"cursor-pointer"}/>
                            </Link>

                            {/* Link list */}
                            <div className="hidden lg:flex gap-x-6">

                                {/* About */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href={links.about}>
                                            {language.button_1}
                                        </Link>
                                </div>

                                {/* Sermons */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href={links.sermon}>
                                        {language.button_7}
                                    </Link>
                                </div>

                                {/* Events */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href={links.events}>
                                        {language.button_2}
                                    </Link>
                                </div>

                                {/* Donation */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href={links.donation}>
                                            {language.button_3}
                                        </Link>
                                </div>

                                {/*Contact*/}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href={links.contact}>
                                            {language.button_4}
                                        </Link>
                                </div>

                            </div>

                            {/* Language */}
                            <div className="hidden lg:flex">
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/" locale={language.page}>
                                        {language.button_5}
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="hidden lg:grid hover:text-yellow-600 transition-colors delay-100">
                                    <h1 className="ml-2 text-center">{language.button_6}</h1>
                                    <Link href="tel: 980-920-7074" className="ml-2 text-center">(980)-290-7074</Link>
                            </div>

                            {/* Off-canvas Menu */}
                            <div className="flex lg:hidden">
                                <div onClick={showOffcanvas} className="material-symbols-outlined cursor-pointer" id="toggle-button">menu</div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

            <SideNav language={language} links={links} showOffcanvas={showOffcanvas} offcanvas={offcanvas} logo={logo}/>

        </Fragment>
    )
}

export default Navbar
