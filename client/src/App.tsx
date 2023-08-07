import './App.css'
import './components/NavBar/NavBar'
import { sampleProducts } from './data'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <NavBar />
      <header>The Spot</header>
      <main>
        <ul className="product-list">
          {sampleProducts.map((product) => (
            <li key={product.slug} className="product-item">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
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
