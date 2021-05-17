
# Greple Frontend

### Prerequisites

1. ```NodeJS``` preferred version 10 or greater.

### Installing

1. Clone the project.
2. Run  ```yarn install``` or ```npm install``` root directory to install node dependencies.
3. Run  ```yarn start``` or ```npm start``` to start dev server.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
5. Used the following script for test cases ```yarn test``` or ```npm test```

**Implementation discription**
 1. React
    - As a general rule, the functional components with hooks are used
 2. Architecture
    - As a general rule, the app architecture is composed by pages, containers and components.
    - Pages - are supposed to be very readable, so we try to make them just a set of high-level containers or components that showcase the layout of the page.
    - Containers - encapsulate all the logic regarding the state of the app, and data fetching. They then pass down the data and callbacks down to the component.
    - Components - should only be concerned with presentational logic.
 3. [Ant Design](https://ant.design/) UI library for components
 4. [Styled Components](https://styled-components.com/) for CSS properties
 5. [Redux Toolkit](https://redux-toolkit.js.org/) for state management
 6. [React Router Dom](https://reactrouter.com/) for routing of app
 7. [Prettier Standard](https://prettier.io/) for code formatting
 8. Deployed on Netlify

### Frontend is deployed using netlify 
- https://gifted-engelbart-b601a9.netlify.app
### Author

* **Abdullah Warraich** 
