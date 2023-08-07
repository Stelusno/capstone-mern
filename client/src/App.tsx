import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'

export default function App() {
  return (
    <div>
      <NavBar />
      <header>The Spot</header>
      <main>
        <ul className="product-list">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="product/:slug" element={<ProductPage/>} />
          </Routes>
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}
