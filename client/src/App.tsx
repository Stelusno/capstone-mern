import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>The Spot</header>
      <main></main>
      <footer>All rights reserved</footer>
    </div>
  )
}