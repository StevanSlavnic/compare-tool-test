/* eslint-disable prefer-const */

interface DataProps {}

interface Product {
  id: string
  general: {
    name: string
    productimage: string
    listprice: string
  }
  features: {}
  isHidden: Boolean
}

export const productRecreated = (data: DataProps[]) => {
  let products: Array<Product> = []
  data.map((item: any) => {
    const { artikelnummer, name, productimage, listprice, ...rest } = item

    const product = {
      id: artikelnummer,
      general: {
        name,
        productimage,
        listprice
      },
      features: rest,
      isHidden: false
    }

    if (product) {
      products.push(product)
    }
  })

  return products
}
