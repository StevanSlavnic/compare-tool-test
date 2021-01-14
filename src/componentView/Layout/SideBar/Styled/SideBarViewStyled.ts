import styled from 'styled-components'

export const SideBarViewWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.geyser};
  width: 200px;

  .product-list {
    display: flex;
    margin: 0 0 15px 0;

    label {
      font-size: ${(props) => props.theme.fontsSize.small};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      margin-left: 10px;
    }
  }
`

export const SideBarViewHeadline = styled.div`
  color: ${(props) => props.theme.colors.mirage};
  font-size: ${(props) => props.theme.fontsSize.h2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  padding: 10px 20px;
`

export const SideBarViewProductsList = styled.div`
  padding: 10px 20px;
`

export const SideBarViewFeaturesList = styled.div``

export const SideBarViewListItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
  font-size: ${(props) => props.theme.fontsSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  padding: 10px 20px;
`
