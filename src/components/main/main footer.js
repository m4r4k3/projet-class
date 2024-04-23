

export default function MainFooter() {

  return (
    <footer className="w-full h-[calc(100vh-50vh)]  bg-white ">
      <div className="w-full h-[90%]">
        <ul className="flex  h-full w-full justify-around items-center">
          <li className="w-[20%]">
            <div className="title-footer">Know Us</div>
            Welcome to Elite Careers, where prestige meets opportunity. Our
            platform is tailored for ambitious professionals seeking exclusive
            job listings and personalized career guidance. Join us to elevate
            your career to new heights.
          </li>
          <li>
            <ul>
              <li className="title-footer">Contact</li>
              <li className="info-footer"><div><i class="fa-solid fa-house"></i></div><div>NewYork,NY 10012,Us</div></li>
              <li className="info-footer"><div><i class="fa-solid fa-phone"></i></div><div>+212 652-5039</div></li>
              <li className="info-footer"><div><i class="fa-solid fa-fax"></i></div><div> 1 (929) 207-0142</div></li>
              <li className="info-footer"><div><i class="fa-solid fa-envelope"></i></div><div>eliteCarreers@elite.com</div></li>
            </ul>
          </li>
          <li className="w-[20%] h-[50%]">
            <div className="title-footer">Follow Us </div>
          <div className=" h-[50%] flex flex-col justify-around ">

            <ul className=" grid grid-cols-3 justify-items-center  gap-[10px] w-[80%] brand-footer w-full">
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-linkedin"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-github"></i> </li>
              <li><i class="fa-brands fa-google"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
            </ul>
          </div>
          </li>
          <li className="w-[10%]">
            <div className="title-footer">Useful Links</div>
            <ul>
              <li>Help</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-full h-[15%] flex items-center justify-between bg-black px-10">
        <div className=" text-white w-[270px]">© 2024 Copyright</div>
        <div
          className={`logo text-bold cursor-default tracking-wide select-none text-white`}
        >
          ELITE CAREERS
        </div>
        <ul className="text-white flex w-[270px] justify-between">
          <li>Cookies</li>|<li>Legal&Privacy</li>|<li>Home page</li>
        </ul>
      </div>
    </footer>
  );
}
