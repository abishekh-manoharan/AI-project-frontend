import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Err from "./Err";
import Header from "./Header"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="about" element={<Home/>}/>
          <Route path="home" element={<About/>}/>
          <Route path="*" element={<Err/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

