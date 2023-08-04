import { useState } from 'react'
import './App.css'
import { sampleProducts } from './data'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>The Spot</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
              <li key={product.slug}>
                <img className='product-image' src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </li>
            ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}
