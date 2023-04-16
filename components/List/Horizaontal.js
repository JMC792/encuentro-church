const { Fragment } = require("react");

function Horizontal({
    language,
    id
}){
    
    return(
        <Fragment>
            <div className="container py-20" id={id}>
                <div className="grid gap-y-5">

                    {/* Header */}
                    <div className="grid gap-y-4 text-center">
                        <h2 className="text-2xl font-bold text-yellow-600">{language.listHeading}</h2>
                        <h1 className="text-6xl font-bold">{language.listTitle}</h1>
                    </div>

                    {/* list Members */}
                    <div className="grid lg:grid-cols-4 gap-10 pt-12 h-[2000px] md:h-[450px] text-white">

                        {/* Band */}
                        <div className="grid md:hover:-translate-y-6 duration-500 delay-50">
                            <div className="bg-[url('..//public/images/praying.jpg')] rounded-xl relative ">
                                <div className=" absolute bottom-10 left-5 gap-y-1.5">
                                    <div className="text-3xl pt-12">{language.listMember1}</div>
                                    <div className="italic">{language.listMember1Title}</div>
                                </div>
                            </div>                            
                        </div>

                        {/* Production */}
                        <div className="grid md:hover:-translate-y-6 duration-500 delay-50">
                            <div className="bg-[url('..//public/images/coffee.jpg')] bg-left-bottom rounded-xl relative ">
                                <div className="absolute bottom-10 left-5 gap-y-1.5">
                                    <div className="text-3xl pt-12">{language.listMember2}</div>
                                    <div className="italic">{language.listMember2Title}</div>
                                </div>
                            </div>                            
                        </div>

                        {/* Maintenance */}
                        <div className="grid md:hover:-translate-y-6 duration-500 delay-50">
                            <div className="bg-[url('..//public/images/coffee.jpg')] rounded-xl relative ">
                                <div className="absolute bottom-10 left-5 gap-y-1.5">
                                    <div className="text-3xl pt-12">{language.listMember3}</div>
                                    <div className="italic">{language.listMember3Title}</div>
                                </div>
                            </div>                            
                        </div>

                        {/* Circles */}
                        <div className="grid md:hover:-translate-y-6 duration-500 delay-50">
                            <div className="bg-[url('..//public/images/coffee.jpg')] rounded-xl relative ">
                                <div className="absolute bottom-10 left-5 gap-y-1.5">
                                    <div className="text-3xl pt-12">{language.listMember4}</div>
                                    <div className="italic">{language.listMember4Title}</div>
                                </div>
                            </div>                            
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Horizontal