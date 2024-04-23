import "../style/landing-page.css";
import { Footer } from "../components/landing page/first footer";
import Main from "../components/landing page/main";

function LandingPage() {

  return (
    <div className="bg-[url('../image/pattern.png')]">
      <div className="landing-page w-full h-screen bg-[#121212]" >
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
