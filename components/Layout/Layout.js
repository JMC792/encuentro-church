import {Fragment} from "react";
import Footer from "@components/Layout/Footer";
import Meta from "@components/Layout/Meta";
import Navbar from "@components/Layout/Navbar/Navbar";
import links from "public/data/links";

export default function Layout ({ children }){

    return(
        <Fragment>
            <Meta/>
            <Navbar/>
            <main>{children}</main>
            <Footer 
                smButton1={links.facebook} 
                smbutton2={links.instagram}
            />
        </Fragment>
    )

}
