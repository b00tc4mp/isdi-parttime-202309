import { Button } from '../components'

function ResourceBook() {
  return (
    <article className="resource">
      <span>Libro</span>
      <h2>Leer te da alas</h2>

      <img src="https://www.farmersalmanac.com/wp-content/uploads/2020/11/rainbow-AdobeStock_2206323-1137x630.jpeg"></img>
      <p>
        Aromatic eu, cortado, to go sit coffee foam galão, cup caramelization
        iced spoon barista qui lungo. Roast cortado, to go whipped blue mountain
        rich aged, affogato froth, galão mazagran shop robust iced organic galão
        plunger pot bar mazagran brewed.
      </p>
      <span>Autor</span>
      <p>Diversidad cultural</p>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </article>
  )
}

export default ResourceBook
