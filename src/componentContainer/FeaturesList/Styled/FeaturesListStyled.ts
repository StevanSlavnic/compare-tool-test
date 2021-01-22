import styled from 'styled-components'

export const FeaturesListRow = styled.div`
  display: flex;
  font-size: 10px;
  font-weight: 600;
  text-align: center;

  &.not-equal {
    background-color: #ddd;
  }
`

export const FeaturesListRowLabel = styled.div`
  // width: 200px;
`

export const FeaturesListRowValues = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  width: 200px;
  padding: 0 10px;
`

export const FeaturesListRowImages = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  width: 200px;
  padding: 0 10px;

  img {
    width: 27px;
    height: 27px;
    margin-right: 5px;
  }
`

export const FeaturesListRowValuesItem = styled.div`
  width: 200px;
`
