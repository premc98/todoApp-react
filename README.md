# To-Do App Front End in React

## Init

- npm create vite@latest
- choose React framework
- choose JavaScript + SWC
- cd into the folder created
- run npm i to install all the necessary dependencies in package.json
- npm i axios react-router-dom react-hot-toast sass
  //sass is for advanced styling using css
- npm run dev
- now you have setup a basic react app on your localhost

## Adding basic styling

- Create a folder inside inside src such that /src/styles
- create a file named app.scss in styles and add css styles
- in your main.jsx intead of importing index.css, replace it with import "./styles/app.scss"
- Delete pre-existing App.css and index.css
- Delete pre-existing assets folder
- <title>ToDo App</title> in index.html
- added all the styles from git repo

## Frontend

- add this in App.jsx
  import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
- add route "/"
- create /src/pages
- create Home.jsx in pages then rfce to buld basic function block
- import ./pages/Home in app.jsx
- Create a folder called /src/components
- Create /src/components/Header.jsx
- Create Header fn using rafce
- add <Header /> in App.jsx such that it renders ireespective of the route
- create <vav classname="header"></nav> with subsequent tags and create the Header.jsx
- create the rest of the routes in App.jsx
- create the necessary pages in /src/pages
- create Login page with necessary forms
- create Register page with necessary forms
- in Register.jsx, create an onSubmit handler for the form that was created
- use the useState functionality of react to implement the sign up functionality
