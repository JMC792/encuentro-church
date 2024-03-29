import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import footerEnglish from "public/locales/english/footer.js"
import footerSpanish from "public/locales/spanish/footer.js"
import {useRouter} from "next/router";
import logo from "../../public/icons/logo.svg"

export default function Footer({
  smButton1,
  smButton2,
}) {

  const router = useRouter();
  const {locale} = router;
  const t =locale === 'en-US'
      ? footerEnglish
      :footerSpanish

  return (
    <Fragment>
      <footer className="bg-slate-800">

        {/* Footer Container */}
        <div className="container text-white">
          {/* Footer padding and Margin */}
          <div className="py-20">

            {/* Footer Layout*/}
            <div className="grid gap-x-24 gap-y-20 sm:items-center lg:flex">

              {/* ----------- Overview Section ----------- */}
              <div className="basis-1/4 grid gap-y-8">

                {/* Overview Title */}
                <div className="text-[1.5rem] text-neutral-200 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                  <Link href="/">
                    <Image src={logo} height={60} width={300} alt={"logo"} className={"cursor-pointer"}/>
                  </Link>
                </div>

                  {/* Overview Paragraph*/}
                  <div className="text-white">
                    {t.overviewParagraph}
                  </div>

                    {/* Overview Contact Information */}
                    <div className="grid gap-y-4 text-white">

                        {/* Overview Phone Number */}
                        <div className="flex gap-x-2 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                          <span className="material-symbols-outlined">call</span>
                          <Link href="tel: 980-290-7074">{t.overviewPhoneNumber}</Link>
                        </div>

                          {/* Overview Email */}
                          <div className="flex gap-x-2 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                            <span className="material-symbols-outlined">mail</span>
                            <Link href="mailto: jesus@encuentro.church">{t.overviewEmail}</Link>
                          </div>

                            {/* Overview Address */}
                            <div className="flex gap-x-2 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                              <span className="material-symbols-outlined">location_on</span>
                              <Link href= {t.overviewAddressLink}>
                                {t.overviewAddress}
                              </Link>
                            </div>

                </div>

              </div>

              {/* ----------- Useful Links Section ----------- */}
              <div className="basis-1/4 grid gap-y-8">

                {/* Links Title */}
                <label className="text-[1.5rem] font-bold">{t.usefulLinkTitle}</label>

                  {/* About Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href={t.usefulLink1Path}>{t.usefulLink1}</Link>
                  </div>

                  {/* Sermons Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href={t.usefulLink2Path}>{t.usefulLink2}</Link>
                  </div>

                  {/* Donation Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href={t.usefulLink3Path}>{t.usefulLink3}</Link>
                  </div>

                  {/* Team Link*/}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href={t.usefulLink4Path}>{t.usefulLink4}</Link>
                  </div>

              </div>

              {/* ----------- Social Media Section ----------- */}
              <div className="basis-1/4 grid gap-y-8">

                {/* Social Media Title */}
                <label className="text-[1.5rem] font-bold">{t.socialMediaTitle}</label>
                  
                  {/* Facebook Link*/}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <a href={smButton1}>
                      {t.socialMedia3}
                    </a>
                  </div>

                  {/* Instagram Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href="https://www.instagram.com/atlimmigration/" >
                      {t.socialMedia1}
                    </Link>
                  </div>

                  {/* Youtube Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href="https://www.youtube.com/channel/UCvTGSmdDliKBpuIM0kZvKiQ">
                      {t.socialMedia2}
                    </Link>
                  </div>

                  {/* Twitter Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href="https://twitter.com/valentinlawllc">
                      {t.socialMedia4}
                    </Link>
                  </div>

              </div>

              {/* ----------- Legal Section ----------- */}
              <div className="basis-1/4 grid gap-y-8">

                {/* Legal Title */}
                <label className="text-[1.5rem] font-bold">Legal</label>

                  {/* About Link */}
                  <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href="#about">About</Link>
                  </div >

                    {/* Privacy Policy Link */}
                    <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                      <Link href="#">
                        {t.legalLink2}
                      </Link>
                    </div>

                      {/*Licensing Link*/}
                      <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                        <Link href="#">
                          {t.legalLink3}
                        </Link>
                      </div>

                        {/* Contact Link */}
                        <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                          <Link href="#contact-us">
                            {t.legalLink4}
                          </Link>
                        </div>

              </div>

            </div>
          </div>

          {/*----------------------- Dividing Line ----------------------- */}
          <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/*----------------------- Trademark ----------------------- */}
          <span className="flex justify-center text-sm text-neutral-200 sm:text-center dark:text-gray-400 py-4">
            © 2022{" "}
            <a href="https://jesuschavez.dev" className="hover:underline px-2">
              Encuentro Church
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  );
}
