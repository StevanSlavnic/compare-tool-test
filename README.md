Hello. This is short documentation on Compare Products App.

Purpose - This document provides an architectural overview of the app. It is intended to capture and convey the significant architectural decisions which have been made on the app.

Scope - This subject provides an architectural overview of the Compare Products App. Compare Products App is being developed by Stevan Slavnic with purpose to demonstrates experience building SPA by using React.

App is created by using Container - View pattern.

Responsibilities of a container component are:

- data fetching
- React context integration
- side-effects handling, heavy computation or data mapping
- passing the required props down to the View.

View Components contains presentation part, and they are responsible for:

- UI/presentation logic.
- utilizing props, render, and context.
- receiving data and callbacks from props by its container or parent component.
