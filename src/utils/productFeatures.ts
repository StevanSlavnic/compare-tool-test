/* eslint-disable prefer-const */
import { subString } from 'helpers'
import { productProperties } from 'utils'

/* Function that matches valuest of product features and sets them by
matching properties.
*/
export const productFeatures = (products: []) => {
  let tableValues: { [property: string]: string[] } = {
    badges: [],
    hardheid: [],
    inwendigediameter: [],
    kleur: [],
    materiaal: [],
    snoerdikte: [],
    temperatuurgebied: [],
    toepassing: []
  }

  products.map(
    (product: {
      isHidden: Boolean
      features: { [property: string]: string }
    }) => {
      if (!product.isHidden) {
        Object.keys(productProperties).map((property: string) => {
          tableValues[property].push(product.features[property])
        })
      }
    }
  )

  const { badges, ...rest } = tableValues

  const badgesSubStrig = badges.map((badge: string) => {
    const result = subString(badge, '|')
    return result
  })

  const modifiedTableValues = { badges: badgesSubStrig, ...rest }

  return modifiedTableValues
}
