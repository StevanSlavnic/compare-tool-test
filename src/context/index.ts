// Products Context
import { ProductsContext } from 'context/Products/ProductsContext/ProductsContext'
import { ProductsProvider } from 'context/Products/ProductsProvider/ProductsProvider'
import { withProducts } from 'context/Products/ProductsConsumer'
// Compare Context
import { CompareContext } from 'context/Compare/CompareContext/CompareContext'
import { CompareProvider } from 'context/Compare/CompareProvider/ComapreProvider'
import { withCompare } from 'context/Compare/CompareConsumer'

export {
  //Products Context exports
  ProductsContext,
  ProductsProvider,
  withProducts,
  //Compare Context exports
  CompareContext,
  CompareProvider,
  withCompare
}
