import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainSection from './components/MainSection.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import CardDetails from './components/CardDetails.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainSection />} />
      <Route path='card/:name' element={<CardDetails />} />
    </Route>
  ),
  { basename: '/Pokedex' }
)

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
