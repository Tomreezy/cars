import { Route,Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import SubMenu from "./components/SubMenu"
import { useGlobalState } from "./context/ContextApi"


const App = () => {
  
  
  return (
    <div className="relative" >
      <NavBar />
      <SubMenu />
      <Routes >
        <Route exact path="/" element={<Home />}  />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  )
}

export default App