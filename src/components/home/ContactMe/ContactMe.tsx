import React from "react";
import Image from "next/image";
import { SectionWrapper } from "../../common/SectionWrapper/SectionWrapper.styled";
import "./ContactMe.scss";

//assets
import LinkedInIcon from "../../../../public/linkedin.png";
import githubIcon from "../../../../public/github.png";
import gmailIcon from "../../../../public/gmail.png";
import contactUsIllustration from "../../../../public/contact_us_illustration.png";
import { ContainerWrapper } from "@/components/common/Container/ContainerWrapper.styled";
import { Typography } from "@/elements/Typography/Typography.styled";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ContactMe = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: "1224px" });
  console.log(isDesktopOrLaptop);
  return (
    <div className="contact-me">
      <SectionWrapper height="full">
        <ContainerWrapper>
          <div className="m-auto">
            <div className="d-flex flex-lg-row flex-column ">
              <div className="ContactMeCard px-lg-4 px-2 d-flex justify-content-between align-items-center">
                <div className=" d-flex flex-column justify-content-center p-3">
                  <Typography
                    font="League Spartan"
                    className="mb-1 fst-lg-normal fst-italic"
                    sizeDesktop="42"
                    sizeMobile="28"
                    weightDesktop="700"
                    weightMobile="700"
                    color="white"
                  >
                    Contact Me
                  </Typography>
                  <Typography
                    font="League Spartan"
                    className="fst-italic"
                    sizeDesktop="42"
                    sizeMobile="28"
                    weightDesktop="700"
                    weightMobile="700"
                    color="white"
                  >
                    Get in touch
                  </Typography>
                  <Typography
                    font="Nunito Sans"
                    className="mb-0"
                    sizeDesktop="18"
                    sizeMobile="16"
                    weightDesktop="400"
                    weightMobile="400"
                    color="white"
                  >
                    Share your thoughts and Feedbacks.{" "}
                  </Typography>
                </div>
                <div className="mx-auto text-center">
                  {isDesktopOrLaptop ? (
                    <Image
                      src={contactUsIllustration}
                      unoptimized={true}
                      alt="contact-us"
                      width={250}
                      height={250}
                    />
                  ) : (
                    <Image
                      src={contactUsIllustration}
                      unoptimized={true}
                      alt="contact-us"
                      width={50}
                      height={50}
                    />
                  )}
                </div>
              </div>

              <div className="d-flex flex-column w-100 gap-4 justify-content-center align-item-center px-4">
                <Link
                  passHref={true}
                  href="https://linkedin.com/in/sai-venkatesh-h-react"
                  target="__blank"
                >
                  <div className="d-flex align-items justify-content-center gap-2 contact-button">
                    <p>LinkedIn</p>
                    <Image
                      src={"/linkedin.png"}
                      unoptimized={true}
                      alt="linkedIn"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
                <Link
                  passHref={true}
                  href={"https://github.com/SaivenkateshHC"}
                  target="__blank"
                >
                  <div className="d-flex align-items justify-content-center gap-2 contact-button">
                    <p>Github</p>
                    <Image
                      src={githubIcon}
                      unoptimized={true}
                      alt="linkedIn"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
                <Link href={"mailto:saivenkateshhc@gmail.com"}>
                  <div className="d-flex align-items justify-content-center gap-2 contact-button">
                    <p>Gmail</p>
                    <Image
                      unoptimized={true}
                      src={gmailIcon}
                      alt="linkedIn"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </SectionWrapper>
    </div>
  );
};

export default ContactMe;
