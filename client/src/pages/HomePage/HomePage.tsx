import { Link } from 'react-router-dom'
import { sampleProducts } from '../../data'

export default function HomePage() {
  return (
    <>
      {sampleProducts.map((product) => (
        <li key={product.slug} className="product-item">
          <Link to={"/product/" + product.slug}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </li>
      ))}
    </>
  )
}
