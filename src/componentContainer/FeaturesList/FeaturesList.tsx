import React from 'react'

import { withCompare } from 'context'

import { FeaturesListView } from 'componentView'

import {
  FeaturesListRow,
  FeaturesListRowValues,
  FeaturesListRowValuesItem
} from './Styled/FeaturesListStyled'

interface FeaturesListProps {
  context: {
    state: {
      features: {}
    }
  }
}

const FeaturesList = (props: FeaturesListProps) => {
  const {
    context: {
      state: { features }
    }
  } = props

  const notEgual = (compareArray: string[]) => {
    return compareArray.every((v: string) => v === compareArray[0])
  }

  const tableData = Object.entries(features).map((row: any[], i: number) => {
    return (
      <FeaturesListRow key={i} className={notEgual(row[1]) ? '' : 'not-equal'}>
        <FeaturesListRowValues>
          {row[1].map((feature: string[], i: number) => {
            const badges = () => {
              return feature.map((badge: string, i: number) => (
                <img key={i} src={badge} alt={badge} />
              ))
            }
            if (row[0] === 'badges') {
              return (
                <FeaturesListRowValuesItem>
                  {badges()}
                </FeaturesListRowValuesItem>
              )
            } else {
              return (
                <FeaturesListRowValuesItem key={i}>
                  {feature}
                </FeaturesListRowValuesItem>
              )
            }
          })}
        </FeaturesListRowValues>
      </FeaturesListRow>
    )
  })

  return (
    <>
      <FeaturesListView tableData={tableData}></FeaturesListView>
    </>
  )
}

export default withCompare(FeaturesList)
