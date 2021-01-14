import React from 'react'

import {
  SideBarViewWrapper,
  SideBarViewHeadline,
  SideBarViewProductsList,
  SideBarViewFeaturesList,
  SideBarViewListItem
} from './Styled/SideBarViewStyled'

type SideBarViewProps = {
  productsList: JSX.Element[]
}

export const SideBarView = (props: SideBarViewProps) => {
  const { productsList } = props
  return (
    <>
      <SideBarViewWrapper>
        <SideBarViewHeadline>Je selectie</SideBarViewHeadline>

        <SideBarViewProductsList>{productsList}</SideBarViewProductsList>

        <SideBarViewFeaturesList>
          <SideBarViewListItem>Kerumerk</SideBarViewListItem>
          <SideBarViewListItem>Materiaal</SideBarViewListItem>
          <SideBarViewListItem>Hardheid</SideBarViewListItem>
          <SideBarViewListItem>Inwendige diameter (mm)</SideBarViewListItem>
          <SideBarViewListItem>Snoerdikte (mm)</SideBarViewListItem>
          <SideBarViewListItem>Internationale maataanduiding</SideBarViewListItem>
          <SideBarViewListItem>Kleur</SideBarViewListItem>
          <SideBarViewListItem>Compound</SideBarViewListItem>
          <SideBarViewListItem>Toepassing</SideBarViewListItem>
          <SideBarViewListItem>Handelsnaam</SideBarViewListItem>
          <SideBarViewListItem>Seal volgens norm</SideBarViewListItem>
          <SideBarViewListItem>Temperatuurgebied</SideBarViewListItem>
        </SideBarViewFeaturesList>
      </SideBarViewWrapper>
    </>
  )
}
