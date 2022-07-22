import React from "react";
import "./App.css"
import Navbar from "./components/nabbar/Navbar";
import Login  from "./pages/login/Login"

const App = () => {
  return(
    <div className="app">
      <Navbar/>
      <div>
        <Login/> 
      </div>
    </div>
  )
}

export default App