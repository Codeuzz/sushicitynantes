function Menu() {
    return(
        <section id="menu-section">
            <h1>Découvrez nos rolls</h1>
            <div id="card-container">
                <div className="card">
                    <div className="sushi-img-container">
                        <img src="src\assets\Full SUSHI ROLL.svg" alt="Signature Veggie"/>
                    </div>
                    <h3>Signature Veggie</h3>
                    <h4>8€</h4>
                    <p>Avocat, carotte, mangue, sésame, coriandre</p>
                </div>
                
            </div>
            <button id="voir-plus-btn">En voir plus</button>
        </section>
    )
}

export default Menu