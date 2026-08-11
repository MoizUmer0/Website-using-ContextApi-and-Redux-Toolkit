import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Popular from './pages/Popular.jsx'
import Watchlist from './pages/Watchlist.jsx'
import Genres from './pages/Genres.jsx'
import { UserContextProvider } from './components/UserContext.jsx'
import { Provider } from 'react-redux'
import Store from './app/store.js' 
import Details from './pages/Details.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/popular' element={<Popular/>}/>
     <Route path='/genres' element={<Genres/>}/>
    <Route path='/watchlist' element={<Watchlist/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <Provider store={Store}>
    <RouterProvider router={router}/>
      </Provider>
    </UserContextProvider>
  </StrictMode>,
)
