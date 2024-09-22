import Navbar from "./Navbar"

function Contact() {
    const changeClassName = true;
    return(
        <section id="contact-section">
            <Navbar changeClassName={changeClassName} />
            <div id="contact-div">
                <div className="contact-text">
                    <h1>Retrouvez-Nous sur Nantes !</h1>
                    <h3>Du mardi au dimanche<br/>
                        de 19h30 à 23h.</h3>
                    <div className="contact-address">
                        <i className="fa-solid fa-location-dot"></i> 
                        <p>3B rue du moulin laheux<br/>
                        44340 Bouguenais</p>
                    </div>
                    <div className="contact-telephone">
                        <i className="fa-solid fa-phone"></i>
                        <p>07 69 74 31 84</p>
                    </div>
                </div>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.7334555694706!2d-1.6108329242227235!3d47.17711091753792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eb0e5c961145%3A0x33e12e6c470fbd35!2s3B%20Rue%20du%20Moulin%20Laheux%2C%2044340%20Bouguenais!5e1!3m2!1sfr!2sfr!4v1726410837444!5m2!1sfr!2sfr"  allowFullScreen=""  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com/sushicitynantes/" target="_blank">
                    <i className="fi fi-brands-instagram"></i>
                </a>
                <a href="https://www.snapchat.com/add/sushicitynantes" target="_blank">
                    <i className="fi fi-brands-snapchat"></i>
                </a>

            </div>
        </section>
    )
}


export default Contact


