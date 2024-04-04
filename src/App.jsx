// import { useState } from 'react'
import './App.css'
import React from 'react'
// import { useState } from 'react'
import NavBar from './components/navBar/navbar'
import SideBar from './components/sideBar/sidebar'
import AllSchools from './components/schools/allSchools/allSchools'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
        <SideBar />
        <div>
          <AllSchools />

        </div>
      </div>  
    </>
  )
}

export default App
