import styled from 'styled-components'

export const ProductsSideBarViewWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.geyser};
  flex: 0 0 200px;

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

export const ProductsSideBarViewHeadline = styled.div`
  color: ${(props) => props.theme.colors.mirage};
  font-size: ${(props) => props.theme.fontsSize.h2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  padding: 10px 20px;
`

export const ProductsSideBarViewProductsList = styled.div`
  padding: 10px 20px;
`
