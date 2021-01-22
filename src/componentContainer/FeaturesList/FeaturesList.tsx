import React from 'react' // useEffect

import { withCompare } from 'context'
import { FeaturesListView } from 'componentView'

import {
  FeaturesListRow,
  FeaturesListRowValues,
  FeaturesListRowImages
} from './Styled/FeaturesListStyled'

interface FeaturesListProps {
  compareContext: {
    state: {
      tableData: []
    }
    actions: {
      setLabels: (prevLabels: []) => void
    }
  }
}

const FeaturesList = (props: FeaturesListProps) => {
  const { tableData } = props.compareContext.state

  console.log(tableData)

  /* Iterate over array of badges and return images */
  const badges = (item: []) => (
    <FeaturesListRowImages>
      {item.map((badge: string, i: number) => (
        <img key={i} src={badge} alt={badge} />
      ))}
    </FeaturesListRowImages>
  )

  /* tableRows function is repsosible for iterating over tableData that is provided by Compare Context */
  const tableRows = tableData.map((row: any, i: number) => {
    return (
      <FeaturesListRow key={i} className={!row.isEqual ? 'not-equal' : ''}>
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
