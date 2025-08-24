import { SectionWrapper } from '@/components/common/SectionWrapper/SectionWrapper.styled'
import React from 'react'
import './BannerSection.scss'
import '../../../app/page.css'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled';
import { Typography } from '@/elements/Typography/Typography.styled';

// assets

function BannerSection() {
  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects')
    projectSection?.scrollIntoView({ behavior: 'smooth', block: 'start'})
  }
  return (
    <div className={'BannerSection'}>
      <SectionWrapper height={'full'}>
        {/* <ContainerWrapper> */}
        <ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100vh' }}>

          <ParallaxBannerLayer translateY={["-10px", "20px"]} style={{ inset: "auto 1px 0 auto" }} speed={10} >
            <img src='/banner-bottom-illustration.png'
              alt='banner-illustration' className={"lowerIllustration"} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer translateY={["1px", "2px"]} style={{ inset: "auto 1px 0 auto" }} speed={100} >
            <img src='/banner-gradient.png'
              alt='background-gradient' className={"backgroundGradient"} />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-65} style={{ zIndex: 100 }}>
            <div
              style={{ inset: 0 }}
              className={"bannerCard position-absolute text-left p-4"}
            >
              <Typography font="Montserrat"
                sizeDesktop="48"
                sizeMobile="24"
                weightDesktop="700"
                weightMobile="700"
                color="white"
                className='mb-1'
              >Sai Venkatesh H</Typography>
              <Typography font="League Spartan"
                className='fst-italic mb-2'
                sizeDesktop="48"
                sizeMobile="20"
                weightDesktop="700"
                weightMobile="700"
                color="white"
              >Fullstack Web Developer</Typography>
              <div className='w-lg-50'>
                <Typography font="Nunito Sans"
                  className='fst-italic'
                  sizeDesktop="18"
                  sizeMobile="16"
                  weightDesktop="400"
                  weightMobile="400"
                  color="white"
                >I am a Software Engineer specializing in building website especially Frontend (and occasionaly designing) with expceptional Digital experience and Eye catching transitions.
                  Currently,I am focusing on websites with Augmented Reality and ORM database particularly Prisma
                </Typography>
              </div>
              <button className='px-4 py-1' onClick={scrollToProjects}>
                See my works
              </button>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        {/* </ContainerWrapper> */}
      </SectionWrapper>
    </div>
  )
}

export default BannerSection