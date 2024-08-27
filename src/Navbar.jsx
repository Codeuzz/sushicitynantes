import Hero from "./Hero"
function Navbar() {
    return(
        <>
        <nav>
            <img id="logo" src="src\assets\Sushicity-logo.svg" alt="My Happy SVG"/>
            <div>
                <a href="#accueil">Accueil</a>
                <a href="#nos-creations">Nos créations</a>
                <a href="#contact">Contact</a>
            </div>
        </nav> 
        <Hero />
        </>
    )
}

export default Navbar