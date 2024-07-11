import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import BgChange from './components/BgChange.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/GitHub/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:'/bgChange',
//         element:<BgChange />
//       }
//     ]
//   }
// ])

// Another Method To create BrowserRouter 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/bgChange' element={<BgChange />} />
      <Route path='/user/:id' element={<User />} />
      {/* for more optimizing we can call the api on loader 
      means when a person clicks on link it gets the data even before useEffect */}

      <Route 
      loader={githubInfoLoader}
      path='/github' 
      element={<Github />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
