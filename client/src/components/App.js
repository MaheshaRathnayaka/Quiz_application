import '../styles/App.css';
//creating all routes
import { createBrowserRouter,RouterProvider} from "react-router-dom"

//import components
import Main from './Main';

import Quiz from './Quiz';

import Result from './Result';

import { CheckUserExist } from '../helper/helper';

//react routes  - 1st step

const router = createBrowserRouter([
  {
    path : "/",
    element :<Main></Main>
  },

  {
    path : "/quiz",
    element :<CheckUserExist><Quiz/></CheckUserExist>
  },

  {
    path : "/result",
    element :<CheckUserExist><Result/></CheckUserExist>
  },
])


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
