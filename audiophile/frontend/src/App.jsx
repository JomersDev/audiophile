import { useQuery, useMutation } from 'react-query'
import { Routes, Route } from 'react-router-dom'

// Components & Pages
import Home from './Pages/Home'
import Category from './Pages/Category'
import ProductDetail from './Pages/ProductDetail'
import Nav from './Components/shared/Nav'
import Footer from './Components/Shared/Footer'

function App() {
  
  async function fetchProducts() {
    const response = await fetch('http://localhost:4000/api/products')
    const data = await response.json()
    return data
  }

  const productQuery = useQuery('products', fetchProducts)

  if(productQuery.isLoading) return <h1>Loading...</h1>
  if(productQuery.isError) return <h1>Error...</h1>
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/productdetail' element={<ProductDetail/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

/*
  <div>
    {productQuery.data.map(product => {
      return <p key={product._id}>{product.name}</p>
    })}
  </div>
*/