import { Axios } from "../../axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function OffresCard({
  isOffer,
  setOffer,
  id,
  salary,
  name,
  domain,
  city,
  created_at,
  description,
  characteristic,
  starting,
  post,
  contrat,
  apply,
  setEdit,
  setData,
  isApplied,
}) {
  const type = useSelector((s) => s.store.type);
  const deleteOffre = async (e) => {
    e.stopPropagation();
    setData(false);
    await Axios.get("/sanctum/csrf-cookie");
    Axios.delete(`/api/offres/${id}`).then((res) => res);
    setEdit((prev) => !prev);
  };
  return (
    <div
      key={id}
      className={`${
       "h-[300px] w-[350px]" 
      } flex relative cursor-pointer`}
      onClick={() => {
        setOffer({
          id: id,
          salary: salary,
          characteristic: characteristic,
          starting: starting,
          name: name,
          domain: domain,
          description: description,
          contrat: contrat,
          post: post,
          city: city,
          isApplied: isApplied,
        });
      }}
    >
      {!isOffer && (
        <div className="absolute top-1 left-[-35px] flex-text-[#888888] text-xl z-[1]">
          <button
            onClick={(e) => deleteOffre(e)}
            className="buttons bg-red-500 w-[30px]  text-white h-[30px] flex justify-center items-center mb-1 rounded-full"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <Link
            to={"/applicants/" + id}
            className="buttons bg-[#0D1117] border-gray border w-[30px] text-white  h-[30px] flex justify-center items-center mb-1 rounded-full"
          >
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      )}
      <div className="w-full h-full bg-white rounded-[15px] relative pt-[25px] text-[18px] shadow-inner">
        <div className="absolute top-0 w-full px-2 py-2 flex justify-end">
          <span className=" text-[#888888] text-[14px] flex gap-2 items-center">
            <i className="fa-solid fa-calendar text-gray-500"></i>
            {new Date(created_at).toDateString("y%/m%/d%")}
          </span>
        </div>
        <div className={`w-full flex flex-col justify-between  px-3 ${type==1 ?"h-[85%]" : "h-[90%]"} text-[0.9em]`}>
        <div className="font-bold text-xl my-2">
          Information d'offre

          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Entreprise :
            </label>
            <span>{name}</span>
          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Domain :
            </label>
            <span>{domain}</span>
          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Post :
            </label>
            <span>{post}</span>
          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Ville :
            </label>
            <span>{city}</span>
          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Date debut :
            </label>
            <span>{starting}</span>
          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Salaire :
            </label>
            <span>{salary} DH</span>
          </div>
          <div>
            <label className="font-semibold w-[100px] inline-block ">
              Contrat :
            </label>
            <span>{contrat}</span>
          </div>
        </div>
        <div className="w-full flex justify-end pr-[20px] ">
          {type == 1 && (
            <button
              className={`${
                isOffer ? "" : "hidden"
              } border-[2px] px-10 py-1 rounded-[5px] shadow-inner font-semibold text-[15px] ${
                isApplied ? "bg-green-500 text-white" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                apply(id);
              }}
              disabled={isApplied}
            >
              {isApplied ? "Applied" : "Apply"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
