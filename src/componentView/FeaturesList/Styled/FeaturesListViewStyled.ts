import styled from 'styled-components'

export const FeaturesListViewList = styled.div`
  // display: flex;
  // flex-direction: column;

  > * {
    border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
    &:first-child {
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`

export const FeaturesListViewListItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
  font-size: ${(props) => props.theme.fontsSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  padding: 10px 20px;
`
