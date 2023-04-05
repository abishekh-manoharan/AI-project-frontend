import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home";
import Err from "./Err";
import Layout from "./Layout"
import Predict from "./Predict"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="predict" element={<Predict/>}/>
          <Route path="*" element={<Err/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

