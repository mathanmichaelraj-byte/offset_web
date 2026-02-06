import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Service from "./Service";

function Home(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Service/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home