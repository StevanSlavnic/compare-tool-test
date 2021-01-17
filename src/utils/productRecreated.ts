/* eslint-disable prefer-const */
// import { subString } from 'utils'

type DataProps = {}

export const productRecreated = (items: DataProps[]) => {
  let products: Array<any> = []
  items.map((item: any) => {
    const {
      artikelnummer,
      // badges,
      name,
      productimage,
      listprice,
      ...rest
    } = item

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
