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

/* Feaures list component is resposible for showing tableData props received from Compare Context */
const FeaturesList = (props: FeaturesListProps) => {
  const { tableData } = props.compareContext.state

  /* Iterate over array of badges and return images of singe badge */
  const badges = (item: []) => (
    <FeaturesListRowImages>
      {item.map((badge: string, i: number) => (
        <img key={i} src={badge} alt={badge} />
      ))}
    </FeaturesListRowImages>
  )

  /* tableRows function is repsosible for iterating over tableData that is provided by Compare Context */
  const tableRows = tableData.map(
    (row: { data: Array<[]>; isEqual: boolean; label: string }, a: number) => {
      return (
        <FeaturesListRow key={a} className={!row.isEqual ? 'not-equal' : ''}>
          {row.data.map((item: string | any, i: number) => {
            if (row.label === 'badges') {
              return <React.Fragment key={i}>{badges(item)}</React.Fragment>
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
    }
  )

  return <FeaturesListView>{tableRows}</FeaturesListView>
}

export default withCompare(FeaturesList)
