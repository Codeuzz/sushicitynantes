import Hero from "./Hero"
function Navbar() {
    return(
        <>
        <nav>
            <img id="logo" src="src\assets\Sushicity-logo.svg" alt="My Happy SVG"/>
            <div>
                <a href="#hero-section">Accueil</a>
                <a href="#menu-section">Nos créations</a>
                <a href="#contact">Contact</a>
            </div>
        </nav> 
        </>
    )
}

export default Navbar