import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <footer className="w-full h-[calc(100vh-50vh)]  bg-white overflow-hidden ">
      <div className="w-full h-[85%]">
        <ul className="flex  h-full w-full justify-around items-center py-5">
          <motion.li
            className="w-[25%] h-full"
            transition={{
              duration:1
            }}
            initial={{ translateX:-100}}
            whileInView={{ translateX:0 }}
             viewport={{ once: true }}
          >
            <div className="title-footer">Know Us</div>
            Welcome to Elite Careers, where prestige meets opportunity. Our
            platform is tailored for ambitious professionals seeking exclusive
            job listings and personalized career guidance. Join us to elevate
            your career to new heights.
          </motion.li>
          <motion.li
          className="h-full w-[25%] "
            transition={{
              duration:1
            }}
            initial={{ translateX:-100}}
            whileInView={{ translateX:0 }}
             viewport={{ once: true }}
          >
            <ul>
              <li className="title-footer">Contact</li>
              <li className="info-footer">
                <div>
                  <i className="fa-solid fa-house"></i>
                </div>
                <div>NewYork,NY 10012,Us</div>
              </li>
              <li className="info-footer">
                <div>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>+212 652-5039</div>
              </li>
              <li className="info-footer">
                <div>
                  <i className="fa-solid fa-fax"></i>
                </div>
                <div> (202) 456-1111</div>
              </li>
              <li className="info-footer">
                <div>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>eliteCarreers@elite.com</div>
              </li>
            </ul>
            </motion.li>
          <motion.li className="w-[25%]  h-full" 
            transition={{
              duration:1
            }}
            initial={{ translateX:100}}
            whileInView={{ translateX:0 }}    
             viewport={{ once: true }}
          >
            <div className="title-footer">Follow Us </div>
            <ul className=" flex flex-col  gap-5 w-[80%] brand-footer w-full [&>li]:flex">
                <li>
                  <i className="fa-brands fa-facebook"></i><span className="ml-3 flex items-center ">EliteCareers</span>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i><span className="ml-3 flex items-center ">EliteCareers</span>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i><span className="ml-3 flex items-center ">@EliteCareers</span>
                </li>
               
                <li>
                  <i className="fa-brands fa-twitter"></i><span className="ml-3 flex items-center ">@EliteCareers</span>
                </li>
              </ul>
            </motion.li>
          <motion.li className="w-[10%]"
         
            transition={{
              duration:1
            }}
            initial={{ translateX:100}}
            whileInView={{ translateX:0 }}
             viewport={{ once: true }}
       
          >
            <div className="title-footer">Useful Links</div>
            <ul>
              <li>Help</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
            </motion.li>
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
          <li><Link to={"/privacy"}>Cookies</Link></li>|<li><Link to={"/privacy"}>Legal&Privacy</Link></li>|<li><Link to={"/"}>Home page</Link></li>
        </ul>
      </div>
    </footer>
  );
}
