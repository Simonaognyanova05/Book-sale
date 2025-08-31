import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
