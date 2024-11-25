import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Why from "./components/Why.jsx";
import Pricing from "./components/Pricing.jsx";
import Banner from "../src/assets/img/bg-banner.png";
import Download from "./components/Download.jsx";
import Cta from "./components/CTA.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
    return (

        <main className="relative scroll-smooth">
            <div className="img absolute w-screen max-md:top-16 top-12 h-screen -z-50 ">
                <img src={Banner} className="w-100% bg-cover object-cover fixed z-0"
                     alt=""/>
            </div>
            <Navbar/>
            <Hero/>
            <Why/>
            <Pricing/>
            <Download/>
            <Cta/>
            <Footer/>
        </main>
    )
}
export default App
