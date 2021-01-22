Hello. This is short documentation on Compare Products App.

Purpose - This document provides an architectural overview of the app. It is intended to capture and convey the significant architectural decisions which have been made on the app.

Scope - This subject provides an architectural overview of the Compare Products App. Compare Products App is being developed by Stevan Slavnic with purpose to demonstrates experience building SPA by using React.

# App overview:

- App is created by using Container - View pattern.
- All the components are registered and exported from index.ts file for a single access point.
- Styling of app is done by using Styled Components.
- Type checking is done by using TypeScript.
- Since app is created using create-react-app I haven't included Webpack in my project. For accessing Webpack configuration app could be ejected by runnuing yarn eject command.

## Container components

### Responsibilities of a Container Component are:

- data fetching
- React context integration
- side-effects handling, heavy computation or data mapping
- passing the required props down to the View.

Container Components are located in **/src/componentContainer** folder with the following structure, all the components are registered and exported from index.ts file for a single access point:

- FeaturesList - This component is resposible for showing tableData props received from Compare Context.
- ProductsList - Component is resposible for showing the list of products, based on product isHidden status.
- ProductsSideBar - Component is showing checkboxes for hide/show products in sidebar list and showing labels of product features.

## View components

### View Components contains presentation part, and they are responsible for:

- UI/presentation logic.
- utilizing props, render, and context.
- receiving data and callbacks from props by its container or parent component.

View components are located in **/src/componentView** folder with the following structure:

- FeaturesList - This componenent is accepting children props from /src/componentContainer and render data.
- Layout - Component is a wrapper componet that holds layout of app and accept props from Products Context. Folder of this component holds:
  - Header - Component that accepts props from Layout for showing number of fetched products from API.
  - Footer - Statical component with no props passed.
- Product - Component that accept props from ProductsList component and its resposible for showing single producgeneral information.
- ProductList - Handles the view of ProductList container component and accept props.
- ProductsSideBar - Handles the view of ProductsSideBar container component - list of checkboxes and product feature labels.

All View components have Styled folder where styles of certain component.

## Context - State managment

Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the DOM tree.

Contexts are located in **/src/context** folder. For purpose of this app there are two contexts: the - Compare context located in **/src/context/Compare** and consists out of:

#### Compare Context

- CompareContext - function that creates CompareContext, that hold two objects: state and actions.
- CompareProvider - component that handles ability of components to subscribe to context changes and hold a logic for computation of comparing products feature values, are they equal or not, and returns array of objects.
- CompareConsumer - Is HOC that subscribe wrapped component to context. Over this function every component can subscribe to compareContext by wrapping it in **withCompare()** ex. **withCompare(FeaturesList)**, this way data from compareContext will be passed as props to FeatureList component.

You can access passed props with **const { compareContext } = props**

#### Products Context

- ProductsContext - function that creates ProductsContext, that hold two objects: state and actions.
- ProductsProvider - component that handles ability of components to subscribe to context changes and holds fetching products from API and sets them in store state. Also this component handles hide/unhide products in list and sets new state every time when event is occured.
- ProductsConsumer - Is HOC that subscribe wrapped component to context. Over this function every component can subscribe to ProductsContext by wrapping it in **withProducts()** ex. **withProducts(Layout)**, this way data from ProductsContext will be passed as props to Layout component.

You can access passed props with **const { productsContext } = props**

## Helpers

Are located in **/src/helpers** and holds helper methods and constants that can be shared across project are here.

- devices.ts - Is a helper for defining device width
- subString.ts - Is a helper function that extracts a substring from a string with certain delimiter.

## Services

Folder **/src/services** is dedicated for backend calls

- fetchProducts.ts - Function for fetching products from API

## Theme

Module **theme.ts** located in **/src/theme** holds application-level styles. It can include theme definition (font, colours, typography) of the app UI, and global or commonly used styles.

## Utils

All the utility methods that can be shared across our entire project are located **/src/utils** .

- compareProductFeatures - method that compares the product features
- orderProperties.ts - Function that transforms object properties to lowercase, removes \_ (lowdash) from
  property name and empty spaces.
- productPoperties.ts - constant that holds predefined object properties.
- productRecreated.ts - method that is responsible for destructuring object.
