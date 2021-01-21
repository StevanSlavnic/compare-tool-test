/* eslint-disable prefer-const */
import { subString } from 'helpers'
import { productProperties } from 'utils'

export const compareProductFeatures = (products: []) => {
  let tableValues: { [property: string]: string[] } = {
    badges: [],
    toepassing: [],
    hardheid: [],
    kleur: [],
    temperatuurgebied: [],
    materiaal: [],
    snoerdikte: [],
    inwendigediameter: []
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
    const result = subString(badge)
    return result
  })

  const modifiedTableValues = { badges: badgesSubStrig, ...rest }

  return modifiedTableValues
}
