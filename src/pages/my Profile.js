import { useState, useEffect, useRef } from "react";
import Companies from "../components/my profile/companies";
import Education from "../components/my profile/education";
import ExperienceAdd from "../components/my profile/experience-add";
import EducationAdd from "../components/my profile/education-add";
import { Axios } from "../axios";
import LoadingScreen from "../loading";
import { useSelector } from "react-redux";
import "../style/myprofile.css";

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

  // const setImage = (e) => {
  //   setEdit(true);
  //   setInfo((prev) => ({ ...prev, image: e.target.files[0] }));
  // };
  const editInfo = async () => {
    resetData();
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.put(`/api/individuel/${id}`, info)
      .then((res) => console.log(res))
      .catch(() => console.log("error"));
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
    document.body.classList.remove("modal-open");
    Axios.get("api/city")
      .then((res) => res.data)
      .then((res) => setCities(res));

    Axios.get(`/api/individuel/${id}/edit`)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [isSet]);

  useEffect(() => {
    if (experience || education) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [education, experience]);

  if (!data) {
    document.body.classList.remove("modal-open");
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[url('../image/pattern.png')] flex flex-col sm:flex-row w-full pt-[70px] flex min-h-full">
      {!data && <LoadingScreen />}
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
        <div className="flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sm:sticky top-[80px] rounded-[5px] sm:w-[35vw] w-[90vw] py-[3%]">
          {edit && (
            <button
              onClick={editInfo}
              className="button active:bg-green-500 fixed sm:absolute bg-[#1F1F1F] border border-[#30363D] sm:top-2 sm:right-2 top-[80px] right-8"
            >
              <i class={`fa-solid fa-pen text-white`}></i>
            </button>
          )}
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-1/2 sm:h-[calc(35vw/2)] h-[calc(90vw/2)]  "></div>
            <div className="text-xl font-bold text-white mt-5">
              {data.ind[0].nom} {data.ind[0].prenom}
            </div>
          </div>
          <ul className="text-white flex  w-full mt-5 flex-col gap-2 items-center">
            <li className="flex gap-3 w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i class={`fa-solid fa-building text-white`}></i>
              </span>
              <input
                name="entreprise"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                defaultValue={data.ind[0].entreprise}
                className="bg-transparent outline-0 border-gray-500 border max-w-[200px] w-[70%] rounded pl-1"
              />
            </li>
            <li className="flex gap-3  w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i class={`fa-solid fa-location-dot text-white`}></i>
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
                  selected={data.ind[0].city == null}
                >
                  -
                </option>
                {cities.map((e) => (
                  <option
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                    selected={data.ind[0].city == e.id}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
            </li>
            <li className="flex gap-3 w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i class={`fa-solid fa-briefcase text-white`}></i>
              </span>
              <input
                name="post"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                defaultValue={data.ind[0].post}
                className="bg-transparent outline-0 border-gray-500 border max-w-[200px] w-[70%] rounded pl-1"
              />
            </li>
            <li className="flex gap-3 w-[50%]">
              <span className="button bg-black border border-[#30363D]">
                <i class={`fa-solid fa-phone text-white`}></i>
              </span>
              <input
                name="phone"
                onChange={(e) => setFormFunc(e)}
                onInput={() => setEdit(true)}
                defaultValue={data.ind[0].phone}
                className="bg-transparent outline-0 border-gray-500 border max-w-[200px] w-[70%] rounded pl-1"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[63%]  rounded-[15px] sm:p-2">
        <div>
          <div className="bg-[#0D1117] my-1 w-[90vw] sm:w-[80%] mx-auto p-5 rounded-[7px] border border-[#30363D]">
            <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">
              About
            </div>
            <textarea
              onInput={() => setEdit(true)}
              onChange={(e) => setFormFunc(e)}
              name="description"
              className="text-[15px] text-white w-full outline-none border-0 bg-transparent h-[200px] resize-none"
              defaultValue={data.ind[0].description}
            ></textarea>
          </div>
          <div className=" mt-1 w-[90vw] sm:w-[80%] p-5 mx-auto bg-[#0D1117] rounded-[7px] border border-[#30363D] ">
            <div className="text-gray-500 border-b mb-3 text-lg font-bold pb-3 pr-5 border-[#30363D] w-full flex justify-between">
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
                  class={`fa-solid fa-plus cursor-pointer duration-500 ${
                    skill && " text-red-500 "
                  }`}
                  style={{ transform: skill ? "rotate(45deg)" : "" }}
                  onClick={() => setSkill((prev) => !prev)}
                ></i>
              </div>
            </div>
            <ul className="text-white">
              {data.skill.map((e) => (
                <li id={e.id} className="mb-2 flex">
                  <span
                    onClick={(e) => deleteSkill(e)}
                    id={e.id}
                    class="fa-solid fa-xmark w-[25px] h-[25px] text-red-600 cursor-pointer border-[#30363D]  border mr-3 flex justify-center items-center rounded-full"
                  ></span>
                  <div>{e.title}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col border border-[#30363D]  my-1 bg-[#0D1117] w-[90vw] sm:w-[80%]  mx-auto rounded-[7px] p-5">
            <div className="text-gray-500 border-b border-[#30363D] pb-3  text-gray-500 text-lg font-bold pr-5   w-full flex justify-between">
              <div>Experience</div>{" "}
              <div onClick={() => setExperience(true)}>
                {" "}
                <i class="fa-solid fa-plus cursor-pointer"></i>
              </div>
            </div>
            {data.experience.map((e) => (
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
            ))}
          </div>
          <div className="flex flex-col border border-[#30363D]  mt-1 mb-5 bg-[#0D1117] w-[90vw] sm:w-[80%]  mx-auto rounded-[7px] p-5">
            <div className="text-gray-500 text-lg border-b border-[#30363D] pb-3  font-bold pr-5 w-full flex justify-between">
              <div>Education</div>{" "}
              <div onClick={() => setEducation(true)}>
                <i class="fa-solid fa-plus cursor-pointer"></i>
              </div>
            </div>
            {data.education.map((e) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
