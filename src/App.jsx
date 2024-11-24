import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Why from "./components/Why.jsx";

const App = () => {
    return (

        <main className="relative scroll-smooth">
            <div className="img absolute w-screen max-md:top-16 top-12 h-screen -z-50 ">
                <img src="src/assets/img/bg-banner.png" className="w-100% bg-cover object-cover fixed z-0"
                     alt=""/>
            </div>
            <Navbar/>
            <Hero/>
            <Why/>
        </main>
    )
}
export default App
