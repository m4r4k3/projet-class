import { useParams } from "react-router";
import { Axios } from "../axios";
import { useEffect, useState } from "react";
import LoadingScreen from "../loading";

export default function Entreprise() {
  const [data, setData] = useState();
  const id = useParams().id;
  useEffect(() => {
    document.body.classList.remove("modal-open");
    Axios.get(`/api/entreprise/${id}`)
      .then((res) => res.data)
      .then((data) =>  setData(data[0]))
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    document.body.classList.add("modal-open");
    return <LoadingScreen />;
  }
  return (
    <div className="bg-[url('../image/pattern.png')] w-full flex justify-around pt-[70px] min-h-screen">
      <div className="w-[40%] flex flex-col items-end p-3">
        <div className=" flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sticky top-[80px] rounded-[5px] w-[35vw] py-[3%]">
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://th.bing.com/th/id/OIP.mvDgxxXg6kr3mhytvcawiQHaHa?rs=1&pid=ImgDetMain)] bg-center bg-cover bg-no-repeat rounded-full w-1/2 h-[calc(35vw/2)]"></div>
            <div className="text-xl font-bold text-white mt-5">{data.name}</div>
          </div>
        </div>
      </div>
      <div className="w-[55%]  bg-[#0D1117] border border-[#30363D] rounded h-[350px]">
        <div className="bg-[#0D1117] my-1 mx-auto p-5 rounded-[7px] ">
          <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">
            About
          </div>
          <div className="text-[15px] text-white">{data.description}</div>
        </div>
      </div>
    </div>
  );
}
