import { Route, Routes } from "react-router-dom"
import Studentdetail from "./pages/Studentdetail"

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Studentdetail/>}/>
      </Routes>
    </>
  )
}

export default App
