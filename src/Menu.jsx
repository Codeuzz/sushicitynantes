import Card from "./Card"

function Menu() {
    return(
        <section id="menu-section">
            <h1>Découvrez nos rolls</h1>
            <div id="card-container">
                <Card />  
                <Card />  
                <Card />  
                <Card />  
                <Card />  
                <Card />  
                <Card />  
                <Card />  

            </div>
            <button id="voir-plus-btn">En voir plus</button>
        </section>
    )
}

export default Menu