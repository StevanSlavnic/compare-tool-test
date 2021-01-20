import styled from 'styled-components'

export const HeaderViewWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.geyser};
  color: ${(props) => props.theme.colors.mirage};
  font-size: ${(props) => props.theme.fontsSize.h2};
  min-height: 45px;
  padding: 0 10px;
`
