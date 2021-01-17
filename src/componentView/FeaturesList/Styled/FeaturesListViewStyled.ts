import styled from 'styled-components'

export const FeaturesListViewList = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`

export const FeaturesListViewListItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
  font-size: ${(props) => props.theme.fontsSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  padding: 10px 20px;
`
