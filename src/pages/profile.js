import Companies from "../components/profile/companies";
import Education from "../components/profile/education";
import { useEffect } from "react";
import { Axios } from "../axios";
import { useState } from "react";
import { useParams } from "react-router";
import LoadingScreen from "../loading";
import { useNavigate  } from "react-router";
export default function Profile() {
  const Navigate = useNavigate();
  const id = useParams().id;
  const [data, setData] = useState();
  useEffect(() => {
    document.body.classList.remove("modal-open");
    Axios.get(`/api/individuel/${id}`)
      .then((res) => (res.data))
      .then((data) => setData(data))
      .catch(error=>Navigate("/"))
  }, []);
  if (!data) {
    document.body.classList.add("modal-open");
    return <LoadingScreen />;
  }
  return (
    <div className="bg-[url('../image/pattern.png')] w-full pt-[70px] flex min-h-full">
      <div className="w-[40%] flex flex-col items-end p-3">
        <div className=" flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sticky top-[80px] rounded-[5px] w-[35vw] py-[3%]">
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-1/2 h-[calc(35vw/2)]"></div>
            <div className="text-xl font-bold text-white mt-5">
              {data.ind.nom} {data.ind.prenom}
            </div>
          </div>
          <ul className="text-white flex w-1/2  align-center mt-5 flex-col gap-2">
         
            <li className="flex gap-3">
              <span className="button bg-black border border-[#30363D]  ">
                <i class="fa-solid fa-building text-white"></i>
              </span>
              <label> {data.ind.entreprise}</label>
            </li>
            <li className="flex gap-3">
              <span className="button bg-black border border-[#30363D]  ">
                <i class="fa-solid fa-location-dot text-white"></i>
              </span>
              <label>{data.ind.name}</label>
            </li>
            <li className="flex gap-3">
              <span className="button bg-black border border-[#30363D]  ">
                <i class="fa-solid fa-briefcase text-white"></i>
              </span>
              <label>{data.ind.post}</label>
            </li>{" "}
            <li className="flex gap-3">
              <span className="button bg-black border border-[#30363D]">
                <i class="fa-solid fa-phone text-white"></i>
              </span>
              <label>{data.ind.phone}</label>
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
            <div className="text-[15px] text-white ">
              {data.ind.description}
            </div>
          </div>
          <div className=" mt-1 w-[80%] p-5 mx-auto bg-[#0D1117] rounded-[7px] border border-[#30363D] ">
            <p className="text-gray-500 border-b mb-3 pb-3 text-lg font-bold border-[#30363D]">
              Skills{" "}
            </p>
            <ul className="text-white list-disc ml-5 list-outside ">
              {data.skill.map((e) => (
                <li>{e.title}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col border border-[#30363D]  my-1 bg-[#0D1117] w-[80%] mx-auto rounded-[7px] p-5">
            <div className="font-bold  text-lg text-gray-500">Experience</div>
            {data.experience.map((e) => (
              <Companies
                name={e.entr}
                ending={e.end}
                description={e.description}
                starting={e.start}
                post={e.post}
              />
            ))}
          </div>
          <div className="flex flex-col border border-[#30363D] bg-[#0D1117] w-[80%] mx-auto rounded-[7px] p-5 my-1">
            <div className="font-bold my-3 text-lg text-gray-500">
              Education
            </div>

            {data.education.map((e) => (
              <Education
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
