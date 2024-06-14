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
    Axios.delete(`/api/offres/${id}`)
      .then((res) => res)
      .then((res) => console.log(res));
    setEdit((prev) => !prev);
  };
  return (
    <div
      className={`${
        isOffer ? "h-[350px] w-[350px]" : "h-[300px] w-[350px] "
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
          isApplied: isApplied ,
        });
      }}
    >
      {!isOffer && (
        <div className="absolute top-1 left-[-35px] flex-text-[#888888] text-xl z-[1]">
          <button
            onClick={(e) => deleteOffre(e)}
            className="buttons bg-red-500 w-[30px]  text-white h-[30px] flex justify-center items-center mb-1 rounded-full"
          >
            {" "}
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
      <div className="w-full h-full bg-white rounded-[15px] relative pt-[45px] text-[18px] shadow-inner">
        <div className="absolute top-1 right-3 text-[#888888] text-[14px]">
          20/24
        </div>
        <div className="w-full flex flex-col gap-1 px-2 h-[75%]">
          <div>
            <label className="labels">Entreprise :</label>
            <span>{name}</span>
          </div>
          <div>
            <label className="labels">Domain :</label>
            <span>{domain}</span>
          </div>
          <div>
            <label className="labels">Post :</label>
            <span>{post}</span>
          </div>
          <div>
            <label className="labels">Ville :</label>
            <span>{city}</span>
          </div>
          <div>
            <label className="labels">Salaire :</label>
            <span>{salary} DH</span>
          </div>
          <div className="flex ">
            <label className="labels">Description :</label>
            <span className="w-[70%] block">{description}</span>
          </div>
        </div>
        <div className="w-full flex justify-end pr-[20px] mt-[20px]">
          {type == 1 && (
            <button
              className={`${
                isOffer ? "" : "hidden"
              } border-[2px] px-10 py-1 rounded-[5px] shadow-inner font-semibold text-[15px] ${isApplied ?"bg-green-500 text-white":""}`}
              onClick={(e) => {
                e.stopPropagation();
                apply(id);
              }}
              disabled={isApplied}
            >
              {isApplied ?"Applied":"Apply"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
