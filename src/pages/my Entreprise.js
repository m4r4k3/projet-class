import { useParams } from "react-router";
import { Axios } from "../axios";
import { useEffect, useState } from "react";
import LoadingScreen from "../loading";
import { useSelector } from "react-redux";

export default function MyEntreprise() {
  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);
  const id = useSelector((s) => s.store.id);
  console.log(id);
  useEffect(() => {
    document.body.classList.remove("modal-open");
    Axios.get(`/api/entreprise/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data[0]))
      .catch((error) => console.log(error));
  }, []);
  const editSubmit = () => {
    Axios.put(`api/entreprise/${id}`)
      .then((res) => res)
      .then((res) => console.log(res));
  };
  if (!data) {
    document.body.classList.add("modal-open");
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[url('../image/pattern.png')] w-full flex justify-around pt-[70px] min-h-screen">
      <div className="w-[40%] flex flex-col items-end p-3">
        <div className=" flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sticky top-[80px] rounded-[5px] w-[35vw] py-[3%]">
          {edit && (
            <button
              onClick={editSubmit}
              className="button active:bg-green-500 absolute bg-black border border-[#30363D] top-2 right-2"
            >
              <i class={`fa-solid fa-pen text-white`}></i>
            </button>
          )}
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://logos-world.net/wp-content/uploads/2020/04/Apple-Emblem.png)] bg-center bg-cover bg-no-repeat rounded-full w-1/2 h-[calc(35vw/2)]"></div>
            <div className="text-xl font-bold text-white mt-5">{data.name}</div>
          </div>
        </div>
      </div>
      <div className="w-[55%]  bg-[#0D1117] border border-[#30363D] rounded h-[350px]">
        <div className="bg-[#0D1117] my-1 mx-auto p-5 rounded-[7px] ">
          <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">
            About
          </div>
          <textarea
            name="description"
            type="text"
            onInput={() => setEdit(true)}
            defaultValue={data.description}
            className="text-white outline-0 w-full bg-transparent border border-[#30363D] rounded pl-1 h-[200px] resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
