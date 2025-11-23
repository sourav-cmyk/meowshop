import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LatestGallery from './components/LatestGallery'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import DiscountCTA from './components/DiscountCTA'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <LatestGallery></LatestGallery>
      <ProductCard></ProductCard>
      <ProductList></ProductList>
      <DiscountCTA></DiscountCTA>
    </>
  )
}

export default App
