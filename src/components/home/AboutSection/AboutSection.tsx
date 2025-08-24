import React from 'react'
import './AboutSection.scss'
import { SectionWrapper } from '@/components/common/SectionWrapper/SectionWrapper.styled'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled'

import {useMediaQuery} from 'react-responsive'
import { Typography } from '@/elements/Typography/Typography.styled'

function AboutSection() {
const isDesktopOrLaptop = useMediaQuery({maxWidth:'1224px'})

let componentConstant
if(isDesktopOrLaptop){
  componentConstant={
    boxHeightA:"40",
    boxWidthA:"40"
  }
}else{
  componentConstant={
    boxHeightA:"24",
    boxWidthA:"24"
  }
}

  return (
    <div className={"aboutSection"}>
       <SectionWrapper height={'full'}>
      
        <ParallaxBanner style={{ aspectRatio: '2 / 1' ,height:'100%'}}>
         
          <ParallaxBannerLayer translateY={["1px","2px"]} style={{inset:"auto 1px 0 auto",position:'relative'}}  speed={100} >
            <img src='/second-section-gradient.png'
            alt='background-gradient'  className={"backgroundGradient"}/>
             
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-65} style={{zIndex:100}}>
          <div 
            style={{inset:0}} 
            className={"aboutUsCard position-absolute d-flex align-items-center justify-content-center"}
            >
              <div className='p-lg-5 p-4'>
                <Typography font="League Spartan"
                                    className='mb-1 fst-lg-normal fst-italic'
                                    sizeDesktop="42"
                                    sizeMobile="28"
                                    weightDesktop="700"
                                    weightMobile="700"
                                    color="white"
                                >About Me</Typography>
              <Typography font="Nunito Sans"
                                    className='mb-0 w-lg-50'
                                    sizeDesktop="18"
                                    sizeMobile="16"
                                    weightDesktop="400"
                                    weightMobile="400"
                                    color="white" >
                
I am a developer with 3 years of experience in developing web application
and worked on 10+ projects in different language and stack. I am curious on learning new things in short span and have tried serveral new technologies like 3D model website ( AR websites) and working on new stacks. Im specialized in React js
              </Typography>
              </div>
              
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      
        </SectionWrapper>
    </div>
  )
}

export default AboutSection