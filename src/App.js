import LandingPage from "./pages/landing-page";
import Nav from "./components/main/nav";
import Menu from "./components/main/menu";
import Offres from "./pages/offres";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainFooter from "./components/main/main footer";
import Demandes from "./pages/demandes"
import Profile from "./pages/profile"
import SignIn from "./pages/signin";
import Saves from "./pages/save"
import Search from "./pages/search";
import MyProfile from "./pages/my Profile";
import Entreprise from "./pages/entreprise"
import Applicants from "./pages/postules";
import { useSelector } from "react-redux";


export default function App() {
  const [isMenu, setIsMenu] = useState();
  const isLoggedIn = useSelector(s=>s.store.loggedIn);
  console.log(isLoggedIn) 
  useEffect( ()=>{
    if(isMenu ){
      document.body.classList.add('modal-open');
    }else{
      document.body.classList.remove('modal-open');
    }
  } , [isMenu ])
  return (
    <>
    <div className="w-full h-screen App ">

      <Nav setIsMenu={setIsMenu} isMenu={isMenu}/>
      {isMenu && <Menu setIsMenu={setIsMenu}/>}
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<Search />} path="/search"></Route>
        <Route element={<Offres />} path="/offres"></Route>
        <Route element={<Demandes />} path="/demandes"></Route>
        <Route element={<Profile />} path="/profile/:id"></Route>
        {!isLoggedIn &&<Route element={<SignIn />} path="/sign-in"></Route>}
        <Route element={<Saves />}  path="/save"></Route>
        <Route element={<Entreprise />}  path="/entreprise/:id"></Route>
        <Route element={<MyProfile />}  path="/myProfile"></Route>
        <Route element={<Applicants />}  path="/applicants/:id"></Route>
      </Routes>
      <MainFooter />
    </div>
    </>
  );
}
