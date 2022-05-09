import { useState } from 'react'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from "./pages";
import About from "./pages/about/about";
import RouterComponent from './router';
console.log(RouterComponent)
function Appaaa() {
  return (
    <div className="app">
      {/*<BrowserRouter>
        <RouterComponent></RouterComponent>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>*/}
    </div>
  )
}
const App = () => {
  return (

  <div>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>

  </div>

  );
};
export default App
