function Card() {
    return (
            <div className="card">
                <div className="sushi-img-container">
                    <img src="src\assets\Full SUSHI ROLL.svg" alt="Signature Veggie"/>  
                </div>
                <div className="sushi-text">
                    <h3>Signature Veggie</h3>
                    <h4>8€</h4>
                    <p>Avocat, carotte, mangue, sésame, coriandre</p>
                </div>
                <button>
                <i className="fa-solid fa-cart-plus"></i>
                </button>
            </div>
    )
}

export default Card