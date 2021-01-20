/* eslint-disable prefer-const */
import { subString } from 'helpers'
import { productProperties } from 'utils'

export const compareProductFeatures = (products: []) => {
  let tableValues: any = {
    badges: [],
    toepassing: [],
    hardheid: [],
    kleur: [],
    temperatuurgebied: [],
    materiaal: [],
    snoerdikte: [],
    inwendigediameter: []
  }

  products.map((product: any) => {
    if (!product.isHidden) {
      Object.keys(productProperties).map((property: any) => {
        tableValues[property].push(product.features[property])
      })
    }
  })

  const { badges, ...rest } = tableValues

  const badgesSubStrig = badges.map((badge: any) => {
    const result = subString(badge)
    return result
  })

  const modifiedTableValues = { badges: badgesSubStrig, ...rest }

  return modifiedTableValues
}
