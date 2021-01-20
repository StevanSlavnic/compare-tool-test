import React from 'react'

import { FeaturesListViewList } from './Styled/FeaturesListViewStyled'

interface FeaturesListViewProps {
  children: JSX.Element[]
}

export const FeaturesListView = (props: FeaturesListViewProps) => {
  const { children } = props

  return <FeaturesListViewList>{children}</FeaturesListViewList>
}
