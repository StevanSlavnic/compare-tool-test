import styled from 'styled-components'
import { devices } from 'helpers'

export const ProductsSideBarViewWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.geyser};
  flex-shrink: 0;
  width: 165px;

  @media ${devices.mobileS} {
    width: 200px;
  }

  .product-list {
    display: flex;
    margin: 0 0 10px 0;

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

  @media ${devices.mobileS} {
    padding: 10px 10px;
  }
`

export const ProductsSideBarViewProductsList = styled.div`
  padding: 0 20px;
  height: 265px;
  overflow: auto;
`

export const ProductsSideBarViewLables = styled.div`
  height: 200px;
  padding: 0;

  align-items: center;
  justify-content: center;

  > * {
    border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
    &:first-child {
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }
  }

  > .not-equal {
    background-color: #ddd;
  }
`
