import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Service from "./Service";
import TrustElements from "../components/TrustElements";

function Home(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Service/>
            <TrustElements/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home