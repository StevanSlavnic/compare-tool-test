import React from 'react'
import { CompareContext } from 'context/Compare/CompareContext/CompareContext'

export const withCompare = (Component: any) => {
  return function WrapperComponent(props: any) {
    return (
      <CompareContext.Consumer>
        {(state: any) => <Component {...props} compareContext={state} />}
      </CompareContext.Consumer>
    )
  }
}
