/* eslint-disable prefer-const */

/* Function that transforms object properties to lowercase, removes _ from 
property name and empty spaces
*/
export const orderProperties = (data: []) => {
  let array: string[] = []
  data.map((el: Record<string, unknown>) => {
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

  return array
}
