
export default function Home() {




    return (
        <>
            <header>
                <div className="container">
                    <h1>Maketics</h1>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar..." />
                        <button type="submit">Buscar</button>
                    </div>
                </div>
            </header>

            <section>
                <div className="section2">
                    <h2>MATERIA PRIMA</h2>
                    <h2>ENVASES</h2>
                    <h2>UTENSILIOS</h2>
                    <h2 className="receta">RECETAS</h2>
                    <nav>
                        <ul>
                            <li><a href="#"><img src="images/icons8-heart-50.png" alt="Heart Icon" /></a></li>
                            <li><a href="#"><img src="images/icons8-cosmetic-64.png" alt="Cosmetic Icon" /></a></li>
                            <li><a href="#"><img src="images/icons8-user-64.png" alt="User Icon" /></a></li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section>
                <div className="section1">
                    <h2>Encuentra los mejores productos al mejor precio</h2>
                </div>
            </section>

            <section id="productos">
                <div className="container">
                    <h2>Nuestros productos</h2>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                    <div className="product">
                        <img src="images/producto1.png" alt="Producto 1" />
                        <h3>Hidrolato de rosas</h3>
                        <p>Precio: 11,46 €</p>
                        <a href="#" className="btn">Agregar al carrito</a>
                    </div>
                </div>
            </section>
        </>
    )
}