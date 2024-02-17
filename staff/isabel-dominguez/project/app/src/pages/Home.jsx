import React from 'react'
import IconButton from '../library/IconButton'
import Product from '../components/Product'


export default function Home() {

    const handleClickRawMaterial = () => {
        console.log('Se hizo clic en el apartado de MATERIA PRIMA')
    }

    const handleClickPackings = () => {
        console.log('Se hizo clic en el apartado ENVASES')
    }

    const handleClickUtensils = () => {
        console.log('Se hizo clic en el partado UTENSILIOS')
    }

    const handleClickRecipes = () => {
        console.log('Se hizo clic en el apartado RECETAS')
    }

    const handleClickHeart = () => {
        console.log('Se hizo clic en el botón de corazón')
    }

    const handleClickShoppingTrolley = () => {
        console.log('Se hizo clic en el botón del carrito');
    }

    const handleClickUser = () => {
        console.log('Se hizo clic en el botón de usuario')
    }

    return (
        <>
            <header>
                <div className="home-header">
                    <h1><a className="home-link" href="">Maketics</a></h1>
                    <div className="search-container">
                        <input className="search-input" type="text" placeholder="Buscar..." />
                        <button className="search-button" type="submit">Buscar</button>
                    </div>
                </div>
            </header>

            <section>
                <div className="first-section">
                    <h2><a className="raw-material" href="#" onClick={handleClickRawMaterial}>MATERIA PRIMA</a></h2>
                    <h2><a className="packings" href="#" onClick={handleClickPackings}>ENVASES</a></h2>
                    <h2><a className="utensils" href="#" onClick={handleClickUtensils}>UTENSILIOS</a></h2>
                    <h2><a className="recipes" href="#" onClick={handleClickRecipes}>RECETAS</a></h2>
                    <nav>
                        <ul className="icons">
                            <li><IconButton imageSrc="images/icons8-user-64.png" onClick={handleClickUser} /></li>
                            <li><IconButton imageSrc="images/icons8-heart-50.png" onClick={handleClickHeart} /></li>
                            <li><IconButton imageSrc="images/icons8-shopping-trolley-64.png" onClick={handleClickShoppingTrolley} /></li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section>
                <div className="second-section">
                    <h2>Encuentra los mejores productos al mejor precio</h2>
                </div>
            </section>

            <section className="products">
                <Product image="../images/producto1.png" productName="Producto 1" price="10.99" />
                <Product image="../images/producto2.png" productName="Producto 2" price="15.99" />
                <Product image="../images/producto3.png" productName="Producto 3" price="20.99" />
                <Product image="../images/producto1.png" productName="Producto 1" price="10.99" />
                <Product image="../images/producto2.png" productName="Producto 2" price="15.99" />
                <Product image="../images/producto3.png" productName="Producto 3" price="20.99" />
                <Product image="../images/producto1.png" productName="Producto 1" price="10.99" />
                <Product image="../images/producto2.png" productName="Producto 2" price="15.99" />
                <Product image="../images/producto3.png" productName="Producto 3" price="20.99" />
            </section>
        </>
    )
}