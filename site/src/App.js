import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import HomeForm from "./components/HomeForm/HomeForm";

function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/editHome' element={<HomeForm />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
