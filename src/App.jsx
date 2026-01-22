import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import MainSection from './components/MainSection.jsx'
import { Outlet } from "react-router-dom"


const TypesColorData = [
  { "grass": "green" },
  { "fire": "red" }
]


function App() {
  return (
    <>
      <div>
        {/* Header Section */}
        <Header></Header>

        <Outlet></Outlet>

      </div>
    </>
  )
}

export default App
