/* Function for fetching products from API */

export const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/products/all`
  )
  const data = await response.json()
  return data
}
