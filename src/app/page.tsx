'use client'; 
import 'atropos/css'

import './page.css'
import NavigationBar from '../components/home/NavigationBar/NavigationBar'
import BannerSection from '../components/home/BannerSection/BannerSection'
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutSection from '@/components/home/AboutSection/AboutSection';
import ProjectSection from '@/components/home/ProjectSection/ProjectSection';
import ContactMe from '@/components/home/ContactMe/ContactMe';
import { routes } from '@/utils/constants';


const tempArray = [
  {
    name:"string",
    description:"string",
    image:"/React-icon.svg.png"
  },
  {
    name:"string",
    description:"string",
    image:"/React-icon.svg.png"
  }
]

export default function Home() {
  return (
    <main className={"main"}>
      <ParallaxProvider>
      <NavigationBar/>
      <BannerSection/>
      <div id={routes[0].id}>
      <AboutSection/>    
      </div>
      <div id={routes[1].id}>
      <ProjectSection/> 
      </div>
      <div id={routes[2].id} >
      <ContactMe/>
      </div>
      
      </ParallaxProvider>
    </main>
  )
}
