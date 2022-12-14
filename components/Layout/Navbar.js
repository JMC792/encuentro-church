import {useState, useEffect, Fragment} from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";
import {OffcanvasData} from '../../public/locales/english/offcanvas-data'
import navbar_en from 'public/locales/english/navbar'
import navbar_es from 'public/locales/spanish/navbar'
import Image from "next/image";
import logo from "../../public/icons/logo.svg";

function Navbar() {

    //Determines Locales
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en-US'
        ? navbar_en
        : navbar_es;

    //Makes navbar responsive
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

    return(
        <Fragment>
            <nav className="absolute w-full z-10 top-0 text-white">
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Link href={"/"} >
                                <Image src={logo} height={60} width={100} alt={"logo"} className={"cursor-pointer"}/>
                            </Link>

                            {/* Link list */}
                            <div className="hidden lg:flex gap-x-6">

                                {/* About */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#about">
                                            {t.button_1}
                                        </Link>
                                    </div>

                                {/* Sermons */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="#about">
                                        {t.button_7}
                                    </Link>
                                </div>

                                {/* Events */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="#events">
                                        {t.button_2}
                                    </Link>
                                </div>

                                {/* Donation */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#donation">
                                            {t.button_3}
                                        </Link>
                                    </div>

                                {/*Contact */}
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#team">
                                            {t.button_4}
                                        </Link>
                                    </div>

                            </div>

                            {/* Language */}
                            <div className="hidden lg:flex">
                                <div className="text-[20px] hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/" locale={t.page}>
                                        {t.button_5}
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="hidden lg:grid hover:text-yellow-600 transition-colors delay-100">
                                    <h1 className="ml-2 text-center">{t.button_6}</h1>
                                    <Link href="tel: 980-920-7074" className="ml-2 text-center">(980)290-7074</Link>
                                </div>

                            {/* Off-canvas Menu */}
                            <div className="xs:flex">
                                <a href="#" id="toggle-button">
                                    <span onClick={showOffcanvas} className="material-symbols-outlined">menu</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>

            {/*----------------------- Mobile Nav ----------------------- */}
            <nav className={
                offcanvas
                ? "offcanvas-menu-wrap active"
                : "offcanvas-menu-wrap"}
            >
                <nav className="offcanvas-menu z-50">
                    <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
                        <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                            <div className="logo">
                                <Link href={"/"} >
                                    <Image src={logo} height={60} width={100} alt={"logo"}/>
                                </Link>
                            </div>
                            <button
                                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                                aria-label="Right Align"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </li>
                        {OffcanvasData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </nav>
        </Fragment>
    )
}

export default Navbar
