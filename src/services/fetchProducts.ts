/* Function for fetching products from API */

export const fetchProducts = async () => {
  const response = await fetch(
    'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all'
  )
  const data = await response.json()
  return data
}
