import React from 'react'

import { FeaturesListViewList } from './Styled/FeaturesListViewStyled'

interface FeaturesListViewProps {
  tableData: any
}

export const FeaturesListView = (props: FeaturesListViewProps) => {
  const { tableData } = props
  // console.log(featuresData)

  return (
    <>
      <FeaturesListViewList>{tableData}</FeaturesListViewList>
    </>
  )
}
