import React from 'react' // useEffect

import { withCompare } from 'context'
import { FeaturesListView } from 'componentView'

import {
  FeaturesListRow,
  FeaturesListRowValues,
  FeaturesListRowImages
} from './Styled/FeaturesListStyled'

interface FeaturesListProps {
  // productsContext: {
  //   state: { products: [] }
  // }
  compareContext: {
    state: {
      tableData: []
    }
    actions: {
      setLabels: (prevLabels: any) => void
    }
  }
}

const FeaturesList = (props: FeaturesListProps) => {
  const {
    compareContext: {
      state: { tableData }
    }
  } = props

  const badges = (item: any) => (
    <FeaturesListRowImages>
      {item.map((badge: string, i: number) => (
        <img key={i} src={badge} alt={badge} />
      ))}
    </FeaturesListRowImages>
  )

  const tableRows = tableData.map((row: any) => {
    return (
      <FeaturesListRow key={row[0]} className={!row.isEqual ? 'not-equal' : ''}>
        {row.data.map((item: string | any, i: number) => {
          if (row.label === 'badges') {
            return badges(item)
          } else {
            return (
              <FeaturesListRowValues key={i}>
                <div>{item}</div>
              </FeaturesListRowValues>
            )
          }
        })}
      </FeaturesListRow>
    )
  })

  return <FeaturesListView>{tableRows}</FeaturesListView>
}

export default withCompare(FeaturesList)
