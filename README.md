Hello. This is short documentation on Compare Products App.

Purpose - This document provides an architectural overview of the app. It is intended to capture and convey the significant architectural decisions which have been made on the app.

Scope - This subject provides an architectural overview of the Compare Products App. Compare Products App is being developed by Stevan Slavnic with purpose to demonstrates experience building SPA by using React.

App is created by using Container - View pattern.

Responsibilities of a Container Component are:

- data fetching
- React context integration
- side-effects handling, heavy computation or data mapping
- passing the required props down to the View.

Container Components are located in /src/componentContainer folder with the following structure, all the components are registered and exported from index.ts file for a single access point:

    - FeaturesList - This component resposible for showing tableData props received from Compare Context

    ```javascript
        const { tableData } = props.compareContext.state

        /_ Iterate over array of badges and return images of singe badge _/
        const badges = (item: []) => (
            <FeaturesListRowImages>
                {item.map((badge: string, i: number) => (
                    <img key={i} src={badge} alt={badge} />
                ))}
            </FeaturesListRowImages>
        )

        /_ tableRows function is repsosible for iterating over tableData that is provided by Compare Context _/
        const tableRows = tableData.map((row: any, i: number) => {
            return (
                <FeaturesListRow key={i} className={!row.isEqual ? 'not-equal' : ''}>
                    {row.data.map((item: string | any, i: number) => {
                        if (row.label === 'badges') {
                            return badges(item)
                            }
                        else {
                            return (
                                <FeaturesListRowValues key={i}>
                                    <div>{item}</div>
                                </FeaturesListRowValues>
                            )
                        }
                    })}
                </FeaturesListRow>
            )
        })
    ```

    - ProductsList - Component is resposible for showing the list of products, based on product isHidden status
    - ProductsSideBar - Component is showing checkboxes for hide/show products in sidebar list and showing labels of product features

View Components contains presentation part, and they are responsible for:

- UI/presentation logic.
- utilizing props, render, and context.
- receiving data and callbacks from props by its container or parent component.

```

```
