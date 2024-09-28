import LandingPage from "./pages/landing-page";
import Nav from "./components/main/nav";
import Menu from "./components/main/menu";
import Offres from "./pages/offres";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainFooter from "./components/main/main footer";
import Demandes from "./pages/demandes";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import Search from "./pages/search";
import MyProfile from "./pages/my Profile";
import Entreprise from "./pages/entreprise";
import Applicants from "./pages/applicants";
import Entreprises from "./pages/Entreprises.js";
import MyDemandes from "./pages/myDemandes";
import MyOffres from "./pages/myOffres.js";
import NotFound from "./pages/notfound";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogginDetails } from "./store";
import MyEntreprise from "./pages/my Entreprise";
import People from "./pages/people.js";
import PhoneFooter from "./components/main/phonefooter.js";
import Privacy from "./components/main/privacy.js";
import ProfileSk from "./components/loading/profile-sk.js";

export default function App() {
  const [isMenu, setIsMenu] = useState();
  const isLoggedIn = useSelector((s) => s.store.loggedIn);
  const type = useSelector((s) => s.store.type);
  const location = useLocation() ;
  const dispatch = useDispatch();
  
  useEffect(()=>setIsMenu(false) ,[location])
  useEffect(() => {
    dispatch(fetchLogginDetails());
    if (isMenu) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isMenu  ]);

  return (
    <>
      <div className=" h-screen App ">
     <Nav setIsMenu={setIsMenu} isMenu={isMenu} />
    
        {isMenu && <Menu setIsMenu={setIsMenu}  />}
      

      
        <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route element={<Offres />} path="/offres"></Route>
          <Route element={<Demandes />} path="/demandes"></Route>
          <Route element={<Privacy />} path="/privacy"></Route>
          <Route element={<Profile />} path="/profile/:id"></Route>
          <Route element={<ProfileSk />} path="/test"></Route>
          <Route element={<Search />} path="/search"></Route>
          <Route element={<People />} path="/people"></Route>
          {!isLoggedIn ? (
            <Route element={<SignIn />} path="/sign-in"></Route>
          ) : (
            <Route
            element={type === 1 ? <MyProfile /> : <MyEntreprise />}
            path="/myProfile"
            ></Route>
          )}
          {isLoggedIn && (
            <Route
            element={type === 1 ? <MyDemandes /> : <MyOffres />}
            path="/my-posts"
            ></Route>
          )}
          {isLoggedIn && (
            <>
              <Route element={<Applicants />} path="/applicants/:id" />
            </>
          )}
          <Route element={<Entreprise />} path="/entreprise/:id"></Route>
          <Route element={<Entreprises />} path="/entreprises"></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        

        <div className="block md:hidden"><PhoneFooter /></div>
        <div className="hidden md:block"><MainFooter /></div>

        </div>
      
    </>
  );
}
