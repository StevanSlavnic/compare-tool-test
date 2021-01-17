/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react'
import { CompareContext } from 'context'
import { subString } from 'utils'

interface CompareProviderProps {
  children: React.ReactNode
  products: []
}

export const CompareProvider = (props: CompareProviderProps) => {
  const { children, products } = props
  const [features, setFeatures] = useState({})

  useEffect(() => {
    const recalcFeatures = recalculateCompare()
    setFeatures(recalcFeatures)
  }, [products])

  const recalculateCompare = () => {
    let values: any = {
      badges: [],
      toepassing: [],
      hardheid: [],
      kleur: [],
      temperatuurgebied: [],
      materiaal: [],
      snoerdikte: [],
      inwendigediameter: []
    }

    const properties = [
      'badges',
      'toepassing',
      'hardheid',
      'kleur',
      'temperatuurgebied',
      'materiaal',
      'snoerdikte',
      'inwendigediameter'
    ]

    products.map((product: any) => {
      if (!product.isHidden) {
        properties.forEach((property) => {
          values[property].push(product.features[property])
        })
      }
    })

    const { badges, ...rest } = values

    const badgesSubStrig = badges.map((badge: any) => {
      const result = subString(badge)
      return result
    })

    const newValues = { badges: badgesSubStrig, ...rest }

    return newValues
  }

  return (
    <CompareContext.Provider
      value={{
        state: {
          features
        },
        actions: {
          setFeatures
        }
      }}
    >
      {children}
    </CompareContext.Provider>
  )
}
