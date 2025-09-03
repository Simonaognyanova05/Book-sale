import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import HomeForm from "./components/HomeForm/HomeForm";
import OverviewForm from "./components/OverviewForm/OverviewForm";
import AuthorForm from "./components/AuthorForm/AuthorForm";
import PricesForm from "./components/PricesForm/PricesForm";
import { AuthProvider } from "./contexts/AuthContext";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />


        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editHome' element={<HomeForm />} />
          <Route path='/editOverview' element={<OverviewForm />} />
          <Route path='/editAuthor' element={<AuthorForm />} />
          <Route path='/editPrices' element={<PricesForm />} />
          <Route path='/logout' element={<Logout />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
