import styled from 'styled-components'

export const LayoutViewOuter = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: calc(100vh - 51px);

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`

export const LayoutViewWrapper = styled.div`
  display: flex;
  height: 100%;
`

export const LayoutViewProducts = styled.div`
  display: flex;
`
