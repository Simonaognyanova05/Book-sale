import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contacts from "./components/Contacts";
import Info from "./components/Info";
import Us from "./components/Us";
import Client from "./components/Client";
import Result from "./components/Result";


function App() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Us />
      <Client />
      <Result />
      <Info />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
