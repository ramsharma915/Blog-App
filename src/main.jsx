import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './store/store.js'
import {createBrowserRouter, RouterProvider }from 'react-router-dom'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'
import Search from './components/pages/Search.jsx'
import AddPost from './components/pages/AddPost';
import AllPosts from './components/pages/AllPosts'
import EditPost from './components/pages/EditPost'
import Home from './components/pages/Home'
import Post from './components/pages/Post'
import { AuthLayout } from './components/index.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:(
            <AuthLayout Authentication={false}>
              <Login/>
            </AuthLayout>
          )
        },
        {
          path:'/signup',
          element:(
            <AuthLayout Authentication={false}>
              <Signup/>
            </AuthLayout>
          )
        },
        {
          path:'/post/:slug',
          element:<Post/>
        },
        {
          path:'/all-posts',
          element:(
            <AuthLayout Authentication>
              <AllPosts/>
            </AuthLayout>
          )
        },
        {
          path:'/edit-post/:slug',
          element:(
            <AuthLayout Authentication>
              {""}
              <EditPost />
            </AuthLayout>
          )
        },
        {
          path:'/add-post',
          element:(
            <AuthLayout Authentication>
              <AddPost/>
            </AuthLayout>
          )
        },
        {
          path:'/search',
          element:(
            <Search/>
          )
        }
      ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
