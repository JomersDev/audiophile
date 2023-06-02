import { useQuery, useMutation } from 'react-query'

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
    <div>
      {productQuery.data.map(product => {
        return <p key={product._id}>{product.name}</p>
      })}
    </div>
  )
}

export default App
