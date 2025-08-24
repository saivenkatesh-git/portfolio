import React from 'react'
import './ProjectSection.scss'
import { SectionWrapper } from '../../common/SectionWrapper/SectionWrapper.styled'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { projects } from '../../../utils/sampleData'
import Atropos from 'atropos/react';
import { ContainerWrapper } from '@/components/common/Container/ContainerWrapper.styled';
import { Typography } from '@/elements/Typography/Typography.styled';

//assets
import projectCardBg from '../../../../public/images/glassCard.png'
import { truncateDescription } from '@/utils/utilityFunctions';
import Image from 'next/image';


const ProjectSection = () => {
    return (
        <div className='project-section'>

            <SectionWrapper height='full'>


                <Typography font="League Spartan"
                    className='fst-italic mb-3 text-center'
                    sizeDesktop="32"
                    sizeMobile="28"
                    weightDesktop="700"
                    weightMobile="700"
                    color="white"
                >Personal Projects</Typography>
                <ContainerWrapper className='align-items-start'>
                    <div className='mx-auto'>
                        <div className='d-flex flex-column justify-content-between '>
                            <div className='section-title'>

                            </div>

                            <div className='project-list-wrapper'>
                                <Swiper
                                    loop={true}
                                    slidesPerView={'auto'}
                                    centeredSlides={true}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    // autoplay={{
                                    //     delay: 2000,
                                    // }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination, Autoplay]}
                                // className="mySwiper"
                                >
                                    {
                                        projects.map((item, index) => {
                                            return <SwiperSlide key={index}>
                                                <div className='project-card'>
                                                    <Atropos
                                                        className="atropos-banner"
                                                        highlight={true}
                                                        onEnter={() => console.log("enter")}
                                                    >
                                                        {/* <img
                                                            data-atropos-offset="-4.5"
                                                            src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
                                                            alt=""
                                                        /> */}
                                                        <Image
                      unoptimized={true}
                                                            data-atropos-offset="-4.5"
                                                            className='project-card-bg'
                                                            src={'/glassCard.png'}
                                                            alt=""
                                                        />
                                                        <div className='featuredImage-wrapper' data-atropos-offset="-1">
                                                            <div className='featuredImage'>
                                                                {
                                                                    item.stackImages.map(image => {
                                                                        return <Image
                      unoptimized={true} key={image} src={image} alt={'stackImage'} />
                                                                    })
                                                                }
                                                            </div>
                                                        </div>

                                                        <div className='project-content pr-3 ' data-atropos-offset="3">

                                                            <Typography font="Nunito Sans"
                                                                className=' mb-3'
                                                                sizeDesktop="18"
                                                                sizeMobile="16"
                                                                weightDesktop="400"
                                                                weightMobile="400"
                                                                color="white"
                                                            >{item.name}</Typography>
                                                            <Typography font="Nunito Sans"
                                                                className=' mb-3 fst-italic '
                                                                sizeDesktop="16"
                                                                sizeMobile="14"
                                                                weightDesktop="400"
                                                                weightMobile="400"
                                                                color="white"
                                                            >{truncateDescription(45, item.description)}</Typography>
                                                        </div>
                                                    </Atropos>
                                                    {/* image */}
                                                    {/* title */}
                                                </div>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>


                        </div>
                    </div>
                </ContainerWrapper>
            </SectionWrapper>
        </div>
    )
}

export default ProjectSection