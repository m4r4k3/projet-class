import { useState } from "react";

export default function PhoneFooter() {
  const [exp, setExp] = useState([false, false, false, false]);
  return (
    <footer className="w-full  bg-white ">
      <div className="w-full ">
        <ul className="flex  h-full  flex-col flex-grow  px-2 py-5">
          <li className="" onClick={()=>setExp((el)=>{
                    return [!el[0] , false , false , false]
                })}>
            <div className="title-footer flex w-full justify-between px-2">
              <div>Know Us</div>
              <div>
                <i className={`fa-regular fa-chevron-down duration-500 ${exp[0]? "rotate-180":""}`}></i>
              </div>
            </div>
            <p
              className={`${!exp[0] ? "hidden" : ""} px-5 py-3`}
            >
              Welcome to Elite Careers, where prestige meets opportunity. Our
              platform is tailored for ambitious professionals seeking exclusive
              job listings and personalized career guidance. Join us to elevate
              your career to new heights.
            </p>
          </li>
          <li onClick={()=>setExp((el)=>{
                    return [ false, !el[1] , false , false]
                })}>
            <div className="title-footer flex w-full justify-between px-2">
              <div>Contact</div>
              <div>
              <i className={`fa-regular fa-chevron-down duration-500 ${exp[1]? "rotate-180":""}`} ></i>
              </div>
            </div>

            <ul
              className={`${!exp[1] ? "hidden" : ""} px-5 py-3`}
            >
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
                <div> 1 (929) 207-0142</div>
              </li>
              <li className="info-footer">
                <div>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>eliteCarreers@elite.com</div>
              </li>
            </ul>
          </li>
          <li onClick={()=>setExp((el)=>{
                    return [false , false , !el[2] , false]
                })}>
            <div className="title-footer flex w-full justify-between px-2">
              <div>Follow US</div>
              <div>
              <i className={`fa-regular fa-chevron-down duration-500 ${exp[2]? "rotate-180":""}`} ></i>
              </div>
            </div>
            <div
              className={`${
                !exp[2] ? "hidden" : ""
              } px-5 py-3 flex flex-col justify-around`}
            >
              <ul className=" flex flex-col  gap-[20px] w-[80%] brand-footer w-full [&>li]:flex">
                <li>
                  <i className="fa-brands fa-facebook"></i><span className="ml-3 flex items-center font-bold">EliteCareers</span>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i><span className="ml-3 flex items-center font-bold">EliteCareers</span>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i><span className="ml-3 flex items-center font-bold">@EliteCareers</span>
                </li>
               
                <li>
                  <i className="fa-brands fa-twitter"></i><span className="ml-3 flex items-center font-bold">@EliteCareers</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="" onClick={()=>setExp((el)=>{
                    return [false , false , false , !el[3]]
                })}>
            <div className="title-footer flex w-full justify-between px-2">
              <div>Usefull Links</div>
              <div>
              <i className={`fa-regular fa-chevron-down duration-500 ${exp[3]? "rotate-180":""}`} ></i>
              </div>
            </div>
            <ul
              className={`${!exp[3] ? "hidden" : ""} px-5 py-3 `}
            >
              <li>Help</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
          </li>
        </ul>
   
      </div>
      <div className="w-full h-[15%] flex items-center justify-between bg-black px-10">
        <div></div>
        <div
          className={`logo text-bold cursor-default tracking-wide select-none text-white`}
        >
          ELITE CAREERS
        </div>
        <div className=" text-white "> </div>
      </div>

    </footer>
  );
}
