interface DataProps {
  general: {
    name: string
    productimage: string
    listprice: string
  }
  features: object
}

export const orderProperties = (data: DataProps[]) => {
  const array: Array<DataProps> = []
  data.map((el: object) => {
    const properties = Object.entries(el)
      .sort()
      .reduce((el: any, [k, v]) => ((el[k.toLowerCase()] = v), el), {})

    console.log('properties', properties)
    const obj = properties
    array.push(obj)
  })

  console.log(array)
  return array
}
