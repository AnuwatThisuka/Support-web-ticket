import React from "react";
import Registerpage from "./pages/Registerpage";
import { Route, Routes } from "react-router-dom";
import Formlogin from "./pages/Formlogin";
import Home from "./components/Home";
import Pagenotfound from "./pages/pagenotfound";

function App() {
   return (
      <>
         <Routes>
            <Route exact path="/" element={<Formlogin />} />
            <Route exact path="/register" element={<Registerpage />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="*" element={<Pagenotfound />} />
         </Routes>
      </>
   );
}

export default App;
