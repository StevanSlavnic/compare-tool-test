type DataProps = {}

import { subString } from 'utils'

export const productRecreated = (products: DataProps[]) => {
  const array: Array<DataProps> = []
  products.map((product: any) => {
    const { name, productimage, listprice, badges, ...data } = product

    const badgesArr = subString(badges)

    const objectCopy = Object.assign({
      general: {
        name,
        productimage,
        listprice
      },

      features: {
        badgesArr,
        data
      }
    })

    array.push(objectCopy)
  })
  console.log(array)
  return array
}
