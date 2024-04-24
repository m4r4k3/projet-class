import LandingPage from "./pages/landing-page";
import Nav from "./components/main/nav";
import Menu from "./components/main/menu";
import Offres from "./pages/offres";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainFooter from "./components/main/main footer";
import Demandes from "./pages/demandes"
import Profile from "./pages/profile"
import SignIn from "./pages/signin";

export default function App() {
  const [isMenu, setIsMenu] = useState();
  return (
    <div className="w-full h-screen App ">
      <Nav setIsMenu={setIsMenu} isMenu={isMenu}/>
      {isMenu && <Menu setIsMenu={setIsMenu}/>}
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<Offres />} path="/offres"></Route>
        <Route element={<Demandes />} path="/demandes"></Route>
        <Route element={<Profile />} path="/profile/:id"></Route>
        <Route element={<SignIn />} path="/sign-in"></Route>
      </Routes>
      <MainFooter />
    </div>
  );
}
