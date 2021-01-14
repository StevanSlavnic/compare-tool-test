// type DataProps = {
//   name: string
//   productimage: string
//   listprice: string
// }

export const productRecreated = (products: any) => {
  const array: Array<{ product: { general: {}; features: {} } }> = []
  products.map((product: any) => {
    const { name, productimage, listprice, ...features } = product

    const objectCopy = Object.assign({
      general: {
        name,
        productimage,
        listprice
      },
      features
    })

    array.push(objectCopy)
  })
  console.log(array)
  return array
}
