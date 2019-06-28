# SKIM - Soup Kitchen Inventory Manager

This document is last updated on `June 28, 2019 02:20:20 GMT+1`

This project is a week long project to reinforce a better understanding of React and Redux.

## Team
* `Author:` [Josemaria Chukwuebuka Nriagu](https://github.com/josenriagu)
* `Team Lead / Reviewer:` [Maxime Salomon](https://github.com/maximesalomon)

## Overview
This project was initiated to help soup kitchen managers easily create, track and update their inventory.

## Milestones
* `22nd June:` start Figma Designs
* `23rd June:` complete Figma UI/X Designs
* `24th June:` build user authentication page components
* `25th June:` test auth endpoints, define actions, action creators and create redux store
* `26th June:` complete the dashboard UI components and test all CRUD endpoints - `MVP ready`
* `27th June:` add PWA and Image upload functionality (only upon creating inventory item, for now) - `Stretch`

## Packages Used

* `React, React-dom & React-scripts:` are the core packages installed by the `CRA` and consumed by the app
* `Redux:` takes care of the core state management of the app
* `React-redux:` adds extra react bindings to the redux
* `React-router-dom:` adds routing functionalities to the app
* `React-loader-spinner:` offers a set of custom tailored UI loader components for the `requesting: true` slice of state
* `Redux-devtools-extension;` offers more flexibility in connecting and controlling the redux store from redux devtools chrome extension
* `Redux-thunk` is the middleware that permits asynchronous function calls.
* `axios` takes care of the HTTP/AJAX requests
* `form-data` adds extra functioanlity for specifying form-data types while making HTTP requests
* `styled-components` offers a robust way of styling react components using CSS combined with the flexibility of Preprocessors.

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.  Check out the [React documentation](https://reactjs.org/) and learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Overall Notes
Some parts of the forms and other components still require great refactoring to make it DRY.

`Collaborations and PRs` especially on how hooks can be implemented using functional components are highly welcome!

Designed with :heart: in LambdaSchool under `Paystack/Lambda Africa Pilot Program`