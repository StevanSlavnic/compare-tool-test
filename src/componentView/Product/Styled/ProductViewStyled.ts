import styled from 'styled-components'

export const ProductViewGeneral = styled.div`
  width: 200px;
  padding: 10px;
  position: relative;
`

export const ProductViewDelete = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const ProductViewGeneralImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  min-height: 100px;
  font-size: ${(props) => props.theme.fontsSize.h5};
`

export const ProductViewImage = styled.img`
  width: 100px;
  height: 100px;
`

export const ProductViewGeneralName = styled.div`
  color: ${(props) => props.theme.colors.mirage};
  font-size: ${(props) => props.theme.fontsSize.h5};
  font-weight: 700;
`

export const ProductViewGeneralPrice = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontsSize.h4};
  margin-top: 15px;
  font-weight: 900;
  padding: 10px 0 23px 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.geyser};

  div {
    font-size: ${(props) => props.theme.fontsSize.small};
    font-weight: 400;
    opacity: 0.3;
  }
`
