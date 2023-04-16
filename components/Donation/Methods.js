const { Fragment } = require("react");
import Link from "next/link";
import Image from "next/image";

function Methods({
    language,
    methodsButton,
    svg
}){

    return(
        <Fragment>
            {/* Container */}
            <div className="container py-20" id="methods">

                {/* Column padding and Margin */}
                <div className="grid lg:grid-cols-2 gap-y-20">

                    {/* Left Column */}
                    <div className="lg:pt-28">
                        <Image src={svg} alt="2 people" className="rounded-xl"/>
                    </div>

                    {/* Right Column */}
                    <div className="grid gap-y-10 md:pl-48 md:py-72">

                        {/* Heading */}
                        <div className="text-2xl font-bold text-yellow-600">{language.methodsHeading}</div>
                        
                        {/* Title */}
                        <div className="text-5xl font-bold">{language.methodsTitle}</div>
                        
                        {/* List */}
                        <div className="pl-8 ">
                            <div className="text-lg text-neutral-800">{language.methodsList1}</div>
                            <div className="text-lg text-neutral-800">{language.methodsList2}</div>
                            <div className="text-lg text-neutral-800">{language.methodsList3}</div>
                        </div>

                        {/* Paragraph */}
                        <div className="text-xl text-neutral-800">{language.methodsParagraph}</div>
                        
                        {/* Button */}
                        <Link href= {methodsButton}>
                            <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-32 text-white transition hover:scale-110 duration-200">
                                {language.methodsButton}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Methods