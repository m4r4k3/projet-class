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
       pt-[-70px]
       bg-[url('../image/city-phone.jpeg')] 
      md:bg-[url('../image/city.jpg')] 
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
