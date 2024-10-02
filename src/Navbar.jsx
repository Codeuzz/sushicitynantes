import Hero from "./Hero"
function Navbar({changeClassName}) {

    return(
        <nav>
            <div id="nav-div">
                <img id="sushi-logo"
                 src="src\assets\SushiCity__4_-removebg-preview 1 (1).svg" alt="SushiCity Logo" />
                <img src="src\assets\SUSHICITY.svg" alt="SushiCity-text" id="sushi-text-logo"
                className={changeClassName ? 'black' : 'white'} />
            </div>
            <div>
                <a className={changeClassName ? 'black-anchor' : ''} href="#hero-section">Accueil</a>
                <a className={changeClassName ? 'black-anchor' : ''} href="#menu-section">Nos créations</a>
                <a className={changeClassName ? 'black-anchor' : ''} href="#contact-section">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar