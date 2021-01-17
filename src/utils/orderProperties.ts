/* eslint-disable prefer-const */
export const orderProperties = (data: any) => {
  let array: any = []
  data.map((el: object) => {
    const properties = Object.entries(el)
      .sort()
      .reduce(
        (el: any, [k, v]) => (
          (el[k.replace(/\s/g, '').replace(/_/g, '').toLowerCase()] = v), el
        ),
        {}
      )

    const obj = properties
    array.push(obj)
  })

  // console.log(array)
  return array
}
