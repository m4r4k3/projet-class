import { useState } from "react";
import Companies from "../components/profile/companies";
import Education from "../components/profile/education";
export default function MyProfile() {
  const [skill , setSkill ] =useState(false);
  const [experience , setExperience ] =useState(false);
  const [education , setEducation ] =useState(false);
  return (
    <div className="bg-[url('../image/pattern.png')] w-full pt-[70px] flex min-h-full">
      <div className="w-[40%] flex flex-col items-end p-3">
        <div className=" flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sticky top-[80px] rounded-[5px] w-[35vw] py-[3%]">
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0)] bg-center bg-contain rounded-full w-1/2 h-[calc(35vw/2)]"></div>
            <div className="text-xl font-bold text-white mt-5">
              Marouane Akchar
            </div>
          </div>
          <ul className="text-white flex w-1/2  align-center mt-5 flex-col gap-2">
            <li className="flex gap-3">
              <span className="button bg-gray-500">
                <i class="fa-solid fa-building text-white"></i>
              </span>
              <label> Apple</label>
            </li>
            <li className="flex gap-3">
              <span className="button bg-gray-500">
                <i class="fa-solid fa-location-dot text-white"></i>
              </span>
              <label>Casablanca ,Maroc</label>
            </li>
            <li className="flex gap-3">
              <span className="button bg-gray-500">
                <i class="fa-solid fa-briefcase text-white"></i>
              </span>
              <label>Comptable</label>
            </li>{" "}
            <li className="flex gap-3">
              <span className="button bg-gray-500">
                <i class="fa-solid fa-envelope text-white"></i>
              </span>
              <label>Email Me</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[63%]  rounded-[15px] p-2">
        <div>
          <div className="bg-[#0D1117] my-1 w-[80%] mx-auto p-5 rounded-[7px] border border-[#30363D]">
            <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">
              About
            </div>
            <textarea
              className="text-[15px] text-white w-full outline-none border-0 bg-transparent h-[200px] resize-none"
              value="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.k"
            ></textarea>
          </div>
          <div className=" mt-1 w-[80%] p-5 mx-auto bg-[#0D1117] rounded-[7px] border border-[#30363D] ">
            <div className="text-gray-500 border-b mb-3 text-lg font-bold pb-3 pr-5 border-[#30363D] w-full flex justify-between">
              <div>Skills</div>{" "}
              <div className="relative  overflow-hidden w-[280px] flex justify-end items-center">
              
                <input className={`absolute  left-0 outline-none border-[#30363D]  border pl-2 text-black font-thin  text-base rounded w-[240px] duration-500 ${!skill && "translate-x-[200%]"}`} />
                <i class={`fa-solid fa-plus cursor-pointer duration-500 ${skill && " text-red-500 "}`} style={{transform:skill ? "rotate(45deg)":""}} onClick={()=>setSkill(prev=>!prev)}></i>
              </div>
            </div>
            <ul className="text-white list-disc ml-5 list-outside ">
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="flex flex-col border border-[#30363D]  my-1 bg-[#0D1117] w-[80%] mx-auto rounded-[7px] p-5">
            <div className="text-gray-500 text-lg font-bold pr-5   w-full flex justify-between">
              <div>Experience</div>{" "}
              <div>
                {" "}
                <i class="fa-solid fa-plus cursor-pointer"></i>
              </div>
            </div>
            <Companies />
            <Companies />
            <Companies />
            <Companies />
          </div>
          <div className="flex flex-col border border-[#30363D] bg-[#0D1117] w-[80%] mx-auto rounded-[7px] p-5 my-1">
            <div className="text-gray-500 text-lg font-bold pr-5 w-full flex justify-between">
              <div>Education</div>{" "}
              <div>
                {" "}
                <i class="fa-solid fa-plus cursor-pointer"></i>
              </div>
            </div>
            <Education />
            <Education />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
