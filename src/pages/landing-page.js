import "../style/landing-page.css";
import { Footer } from "../components/landing page/first footer";
import Main from "../components/landing page/main";

function LandingPage() {
  return (
    <>
      <div
        className="landing-page 
      bg-opacity-0
       w-full
       bg-[url('../image/city-phone.jpeg')] 
      sm:bg-[url('../image/city.jpg')] 
      h-screen
      "
      >
        <Main />
      </div>
      <Footer />
</>
  );
}

export default LandingPage;
