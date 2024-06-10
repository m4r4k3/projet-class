import LandingPage from "./pages/landing-page";
import Nav from "./components/main/nav";
import Menu from "./components/main/menu";
import Offres from "./pages/offres";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainFooter from "./components/main/main footer";
import Demandes from "./pages/demandes";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import Saves from "./pages/save";
import Search from "./pages/search";
import MyProfile from "./pages/my Profile";
import Entreprise from "./pages/entreprise";
import Applicants from "./pages/postules";
import MyDemandes from "./pages/myDemandes";
import MyOffres from "./pages/myOffres.js";
import NotFound from "./pages/notfound";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogginDetails } from "./store";
import MyEntreprise from "./pages/my Entreprise";

export default function App() {
  const [isMenu, setIsMenu] = useState();
  const isLoggedIn = useSelector((s) => s.store.loggedIn);
  const type = useSelector((s) => s.store.type);
  const dispatch = useDispatch();

  document.body.classList.remove("modal-open");
  useEffect(() => {
    dispatch(fetchLogginDetails());
    if (isMenu) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isMenu]);
  return (
    <>
      <div className="w-full h-screen App ">
        <Nav setIsMenu={setIsMenu} isMenu={isMenu} />
        {isMenu && <Menu setIsMenu={setIsMenu} />}
        <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route element={<Offres />} path="/offres"></Route>
          <Route element={<Demandes />} path="/demandes"></Route>
          <Route element={<Profile />} path="/profile/:id"></Route>
          <Route element={<Search />} path="/search"></Route>
          {!isLoggedIn ? (
            <Route element={<SignIn />} path="/sign-in"></Route>
          ) : (
            <Route
              element={type == 1 ? <MyProfile /> : <MyEntreprise />}
              path="/myProfile"
            ></Route>
          )}
          {isLoggedIn && (
            <Route
              element={type == 1 ? <MyDemandes /> : <MyOffres />}
              path="/my-posts"
            ></Route>
          )}
          {isLoggedIn && (
            <>
              {" "}
              <Route element={<Applicants />} path="/applicants/:id" />
            </>
          )}
          <Route element={<Saves />} path="/save"></Route>
          <Route element={<Entreprise />} path="/entreprise/:id"></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <MainFooter />
      </div>
    </>
  );
}
