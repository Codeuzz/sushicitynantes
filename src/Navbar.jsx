import Hero from "./Hero"
import SushiLogo from './assets/SushiCity__4_-removebg-preview 1 (1).svg';
import SushiTextLogo from './assets/SUSHICITY.svg';

function Navbar({changeClassName}) {

    return(
        <nav>
            <div id="nav-div">
                <img id="sushi-logo"
                 src={SushiLogo} alt="SushiCity Logo" />
                <img src={SushiTextLogo} alt="SushiCity-text" id="sushi-text-logo"
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