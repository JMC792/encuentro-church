import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"

function Vertical({
    language,
    verticalButton,
    svg
}){

    return(
        <Fragment>
            
            <div className="container py-20" id="vertical">

                {/* Header */}
                <div className="grid gap-y-4 text-center">
                            <h2 className="text-2xl font-bold text-yellow-600">{language.verticalHeading}</h2>
                            <h1 className="text-6xl font-bold">{language.verticalTitle}</h1>
                </div>

                <div className="pt-32 grid gap-y-10">

                    {/* Item 1 */}
                    <div className="grid lg:grid-cols-2">

                        {/* Image */}
                        <div className="">
                            <Image src={svg} alt="2 people" className="rounded-xl" height={500}/>
                        </div>

                        {/* Text */}
                        <div className="grid md:p-32 gap-y-5">
                            <div className="text-4xl font-bold">{language.verticalTitle}</div>
                            <div className="text-xl font-bold text-yellow-600">{language.verticalHeading}</div>
                            <div className="text-xl text-neutral-800">{language.verticalParagraph}</div>
                            <Link href= {verticalButton}>
                                <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-24 md:mx- text-white">{language.verticalButton}</button>
                            </Link>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="grid lg:grid-cols-2 ">

                        {/* Image */}
                        <div className="">
                            <Image src={svg} alt="2 people" className="rounded-xl" height={500}/>
                        </div>

                        {/* Text */}
                        <div className="grid md:p-32 gap-y-5">
                            <div className="text-4xl font-bold">{language.verticalTitle}</div>
                            <div className="text-xl font-bold text-yellow-600">{language.verticalHeading}</div>
                            <div className="text-xl text-neutral-800">{language.verticalParagraph}</div>
                            <Link href= {verticalButton}>
                                <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-24 md:mx- text-white">{language.verticalButton}</button>
                            </Link>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="grid lg:grid-cols-2">

                        {/* Image */}
                        <div className="">
                            <Image src={svg} alt="2 people" className="rounded-xl" height={500}/>
                        </div>

                        {/* Text */}
                        <div className="grid md:p-32 gap-y-5">
                            <div className="text-4xl font-bold">{language.verticalTitle}</div>
                            <div className="text-xl font-bold text-yellow-600">{language.verticalHeading}</div>
                            <div className="text-xl text-neutral-800">{language.verticalParagraph}</div>
                            <Link href= {verticalButton}>
                                <button type="button" className="border rounded-lg bg-amber-900 py-4 mx-24 md:mx- text-white">{language.verticalButton}</button>
                            </Link>
                        </div>
                    </div>

                </div>

                
            </div>
        </Fragment>
    )
}

export default Vertical