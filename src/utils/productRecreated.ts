/* eslint-disable prefer-const */

interface Products {
  id: string
  general: {
    name: string
    productimage: string
    listprice: string
  }
  features: Record<string, unknown>
  isHidden: boolean
}

/* Function iterate over objects and creates new order of object properties */
export const productRecreated = (data: any[]) => {
  let products: Array<Products> = []
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
