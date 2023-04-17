import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SideNav({
    offcanvas,
    showOffcanvas,
    logo,
    language,
    links
}){

    return(
        <Fragment>
            {/* Mobile Navbar  */}
            <nav className={
                offcanvas
                    ? "offcanvas-menu-wrap active"
                    : "offcanvas-menu-wrap"
            }>
                <nav className="offcanvas-menu z-50">
                    <ul className="offcanvas-menu-items" onClick={showOffcanvas}>

                        {/* Logo and Close Button Wrapper*/}
                        <li className="navbar-toggle flex justify-between items-center pb-[15px] cursor-pointer">
                            
                            {/* Logo */}
                            <div className="logo">
                                <Link href={"/"} >
                                    <Image src={logo} height={60} width={100} alt={"logo"}/>
                                </Link>
                            </div>

                            {/* Close Button */}
                            <button className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all" aria-label="Right Align">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </li>

                        {/* List */}
                        <div>
                            
                            {/* Abous Us */}
                            <div className='offcanvas-text'>
                                <Link href={links.about} >
                                    {language.button_1}
                                </Link>
                            </div>

                            <div className='offcanvas-text'>
                                <Link href={links.sermon}>
                                    {language.button_8}
                                </Link>
                            </div>

                            <div className='offcanvas-text'>
                                <Link href={links.events}>
                                    {language.button_2}
                                </Link>
                            </div>

                            <div className='offcanvas-text'>
                                <Link href={links.donation}>
                                    {language.button_3}
                                </Link>
                            </div>

                            <div className='offcanvas-text'>
                                <Link href={links.contact}>
                                    {language.button_4}
                                </Link>
                            </div>

                            <div className='offcanvas-text'>
                            <Link href={""} locale={language.page}>
                                    {language.button_5}
                                </Link>
                            </div>

                            
                        </div>

                    </ul>
                </nav>
            </nav>
        </Fragment>
    )
}