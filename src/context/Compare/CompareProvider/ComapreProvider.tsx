import React, { useEffect, useState } from 'react'

import { CompareContext } from 'context'

import { productFeatures, productProperties } from 'utils'

interface CompareProviderProps {
  children: React.ReactNode
  products: []
}

export const CompareProvider = (props: CompareProviderProps) => {
  const { children, products } = props
  const [features, setFeatures] = useState({})

  useEffect(() => {
    const recalculatedFeatures = productFeatures(products)
    setFeatures(recalculatedFeatures)
  }, [products])

  const productFeaturesEntries = Object.entries(features)

  const tableData = productFeaturesEntries.map((row: any[]) => {
    const rowName = () => {
      for (const key in productProperties) {
        if (key === row[0]) {
          return productProperties[key]
        }
      }
    }

    const name = rowName()
    const label = row[0]
    const values = row[1]

    const checkEquality = (value: any) =>
      value.every((v: any) => v === value[0])

    const isEqual = checkEquality(values)

    const data = row[1].map((feature: string[]) => {
      return feature
    })

    return { name, label, isEqual, data }
  })

  return (
    <CompareContext.Provider
      value={{
        state: {
          tableData,
        },
        actions: {},
      }}
    >
      {children}
    </CompareContext.Provider>
  )
}
