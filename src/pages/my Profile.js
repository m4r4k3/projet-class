import { useState, useEffect, useRef } from "react";
import Companies from "../components/my profile/companies";
import Education from "../components/my profile/education";
import ExperienceAdd from "../components/my profile/experience-add";
import EducationAdd from "../components/my profile/education-add";
import { Axios } from "../axios";
import { useSelector } from "react-redux";
import {
  AboutSk,
  EducationSk,
  ExperienceSk,
  NameSk,
  SkillSk,
} from "../components/loading/big-profile-sk";
import "../style/myprofile.css";
import { motion } from "framer-motion";

export default function MyProfile() {
  const id = useSelector((s) => s.store.id);
  const [data, setData] = useState();
  const [isSet, setIsSet] = useState(false);
  const [skill, setSkill] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState({});
  const [cities, setCities] = useState();
  const resetData = () => setData(false);
  const skillInput = useRef();

  const setFormFunc = (e) =>
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const setImage = (e) => {
    setEdit(true);
    console.log(e.target)
    setInfo((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const editInfo = async () => {
    resetData();
    const formData = new FormData() ;
    for ( let i in info) {
      formData.append(i , [info[i]]) ;
   }
    await Axios.get("/sanctum/csrf-cookie");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]); // Key: Value
    }

    await Axios.post(`/api/individuel`, formData ).then((res) =>
      console.log(res)
    );
    setIsSet((prev) => !prev);
  };

  const addSkill = async () => {
    resetData();
    const value = skillInput.current.value;
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/skill", { title: value })
      .then((res) => res)
      .catch(() => console.log("error"));
    setIsSet((prev) => !prev);
  };

  const deleteSkill = async (e) => {
    resetData();
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.delete(`/api/skill/${e.target.id}`)
      .then((res) => res)
      .catch(() => console.log("error"));
    setIsSet((prev) => !prev);
  };

  useEffect(() => {
    Axios.get("api/city")
      .then((res) => res.data)
      .then((res) => setCities(res));

    Axios.get(`/api/individuel/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [isSet]);

  return (
    <div className="bg-[url('../image/pattern.png')] flex flex-col sm:flex-row w-full pt-[70px] flex min-h-full">
      {experience && (
        <ExperienceAdd
          setExperience={setExperience}
          setIsSet={setIsSet}
          resetData={resetData}
        />
      )}
      {education && (
        <EducationAdd
          setEducation={setEducation}
          setIsSet={setIsSet}
          resetData={resetData}
        />
      )}
      <div className="sm:w-[40%] w-full flex flex-col items-center sm:items-end  sm:p-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          className="flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sm:sticky top-[80px] rounded-[5px] sm:w-[35vw] w-[90vw] py-[3%]"
        >
          {edit && (
            <button
              onClick={editInfo}
              className="button active:bg-green-500 fixed sm:absolute bg-[#1F1F1F] border border-[#30363D] sm:top-2 sm:right-2 top-[80px] right-8"
            >
              <i className={`fa-solid fa-pen text-white`}></i>
            </button>
          )}
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div
              className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)]  relative bg-center  overflow-hidden
             bg-contain rounded-full w-1/2 sm:h-[calc(35vw/2)] h-[calc(90vw/2)]   "
            >
              <div
                className="image-form"
              >
                <div>Change image</div>
                <input
                  onChange={e=>setImage(e)}
                  type="file"
                  className="rounded-full w-full h-full absolute opacity-0 left-0 top-0 absolute"
                />
              </div>
            </div>

            <div className="text-xl font-bold text-white mt-5 w-full text-center ">
              {data ? (
                <>
                  {data.nom} {data.prenom}{" "}
                </>
              ) : (
                <NameSk />
              )}
            </div>
          </div>
          <ul className="text-white flex  w-full mt-5 flex-col gap-2 items-center">
            <li className="flex gap-3 w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i className={`fa-solid fa-building text-white`}></i>
              </span>
              <input
                name="entreprise"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                defaultValue={data ? data.entreprise : ""}
                className="bg-transparent outline-0 border-gray-500 border max-w-[200px] w-[70%] rounded pl-1"
              />
            </li>
            <li className="flex gap-3  w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i className={`fa-solid fa-location-dot text-white`}></i>
              </span>
              <select
                name="city"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                className="text-white bg-transparent outline-0  border-gray-500 border max-w-[200px] w-[70%] block rounded pl-1"
              >
                <option
                  className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border  "
                  value={null}
                  selected={data && data.city == null}
                >
                  -
                </option>
                {cities &&
                  cities.map((e) => (
                    <option
                      className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                      value={e.id}
                      selected={data && data.city.id == e.id}
                    >
                      {e.name}
                    </option>
                  ))}
              </select>
            </li>
            <li className="flex gap-3 w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i className={`fa-solid fa-briefcase text-white`}></i>
              </span>
              <input
                name="post"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                defaultValue={data ? data.post : ""}
                className="bg-transparent outline-0 border-gray-500 border max-w-[200px] w-[70%] rounded pl-1"
              />
            </li>
            <li className="flex gap-3 w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i className={`fa-solid fa-phone text-white`}></i>
              </span>
              <input
                name="phone"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                defaultValue={data ? data.phone : ""}
                className="bg-transparent outline-0 border-gray-500 border max-w-[200px] w-[70%] rounded pl-1"
              />
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="w-full sm:w-[63%]  rounded-[15px] sm:p-2">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className="bg-[#0D1117] my-1 w-[90vw] sm:w-[80%] mx-auto p-5 rounded-[7px] border border-[#30363D]"
          >
            <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">
              About
            </div>
            {data ? (
              <textarea
                onInput={() => setEdit(true)}
                onChange={(e) => setFormFunc(e)}
                name="description"
                className="text-[15px] text-white w-full outline-none border-0 bg-transparent h-[200px] resize-none"
                defaultValue={data.description}
              ></textarea>
            ) : (
              <AboutSk />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className=" mt-1 w-[90vw] sm:w-[80%] p-5 mx-auto bg-[#0D1117] rounded-[7px] border border-[#30363D] "
          >
            <div className="text-gray-500 border-b mb-3 text-lg font-bold pb-3  border-[#30363D] w-full flex justify-between">
              <div>Skills</div>{" "}
              <div className="relative  overflow-hidden w-[280px] flex justify-end items-center">
                <div
                  className={`absolute  left-0  pl-2  duration-500  ${
                    !skill && "translate-x-[200%]"
                  }`}
                >
                  <input
                    className={`outline-none border-[#30363D]  border pl-2 text-black font-thin  text-base rounded w-[220px] `}
                    ref={skillInput}
                  />
                  <i
                    className="fa-solid fa-check text-green-500 ml-[10px] cursor-pointer hover:text-green-100 duration-300"
                    onClick={addSkill}
                  ></i>
                </div>
                <i
                  className={`fa-solid fa-plus cursor-pointer duration-500 ${
                    skill && " text-red-500 "
                  }`}
                  style={{ transform: skill ? "rotate(45deg)" : "" }}
                  onClick={() => setSkill((prev) => !prev)}
                ></i>
              </div>
            </div>
            <ul className="text-white">
              {data ? (
                data.skill.map((e) => (
                  <li id={e.id} className="mb-2 flex">
                    <span
                      onClick={(e) => deleteSkill(e)}
                      id={e.id}
                      className="fa-solid fa-xmark w-[25px] h-[25px] text-red-600 cursor-pointer  mr-3 flex justify-center items-center rounded-full"
                    ></span>
                    <div>{e.title}</div>
                  </li>
                ))
              ) : (
                <SkillSk />
              )}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className="flex flex-col border border-[#30363D] overflow-hidden  my-1 bg-[#0D1117] w-[90vw] sm:w-[80%]  mx-auto rounded-[7px] p-5"
          >
            <div className="text-gray-500 border-b border-[#30363D] pb-3  text-gray-500 text-lg font-bold    w-full flex justify-between">
              <div>Experience</div>{" "}
              <div onClick={() => setExperience(true)}>
                <i className="fa-solid fa-plus cursor-pointer"></i>
              </div>
            </div>
            {data
              ? data.experience.map((e) => (
                  <Companies
                    resetData={resetData}
                    setIsSet={setIsSet}
                    id={e.id}
                    name={e.entr}
                    ending={e.end}
                    description={e.description}
                    starting={e.start}
                    post={e.post}
                  />
                ))
              : [...Array(1)].map(() => <ExperienceSk />)}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className="flex flex-col border border-[#30363D] overflow-hidden  mt-1 mb-5 bg-[#0D1117] w-[90vw] sm:w-[80%]  mx-auto rounded-[7px] p-5"
          >
            <div className="text-gray-500 text-lg border-b border-[#30363D] pb-3  font-bold  w-full flex justify-between">
              <div>Education</div>{" "}
              <div onClick={() => setEducation(true)}>
                <i className="fa-solid fa-plus cursor-pointer"></i>
              </div>
            </div>
            {data
              ? data.education.map((e) => (
                  <Education
                    id={e.id}
                    resetData={resetData}
                    setIsSet={setIsSet}
                    school={e.school}
                    certificate={e.certificate}
                    description={e.description}
                    end={e.end}
                    start={e.start}
                  />
                ))
              : [...Array(1)].map(() => <EducationSk />)}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
