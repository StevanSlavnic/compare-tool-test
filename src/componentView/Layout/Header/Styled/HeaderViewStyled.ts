import styled from 'styled-components'

export const HeaderViewWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
  color: ${(props) => props.theme.colors.mirage};
  font-size: ${(props) => props.theme.fontsSize.h1};
  min-height: 50px;
`
