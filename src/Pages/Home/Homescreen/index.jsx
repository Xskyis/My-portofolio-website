import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortofolio from "../MyPortfolio";
import Testimonial from "../Testimonial";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home () {
    return(
        <>  
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortofolio />
            <Testimonial />
            <ContactMe />
            <Footer />
        </>
    )
}