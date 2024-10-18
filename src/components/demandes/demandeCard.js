import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../style/demande.css";
import { useSelector } from "react-redux";
import { Axios } from "../../axios";
export default function DemandeCard({
  isDemande,
  id,
  salaire,
  nom,
  prenom,
  location,
  created_at,
  niveau,
  experience,
  description,
  domain,
  role,
  setEdit,
  setData,
  user_id,
}) {
  console.log(domain);
  const descriptionVar = useRef(null);
  const type = useSelector((s) => s.store.type);
  const deleteDemande = async () => {
    setData(false);
    await Axios.get("/sanctum/csrf-cookie");
    Axios.delete(`/api/demandes/${id}`).then((res) => res);
    setEdit((prev) => !prev);
  };
  return (
    <Link
      to={isDemande && "/profile/" + user_id}
      className={` shadow shadow-inner shadow-black ${
        isDemande ? "h-[300px] w-[350px] " : "h-[250px] w-[350px] "
      }flex relative `}
    >
      {!isDemande && (
        <div className="absolute top-1 left-[-35px] flex-text-[#888888] text-xl z-[1]">
          <button
            onClick={deleteDemande}
            className="buttons bg-red-500 w-[30px]  text-white h-[30px] flex justify-center items-center mb-1 rounded-full"
          >
            {" "}
            <i className="fa-solid fa-trash"></i>
          </button>
          {type == 2 && (
            <Link
              to={"/applicants/" + id}
              className="buttons bg-blue-500 w-[30px] text-black  h-[30px] flex justify-center items-center mb-1 rounded-full"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
        </div>
      )}
      <div
        className="w-full h-full bg-white rounded-[15px] relative text-[18px]  shadow-inner overflow-hidden"
        onMouseOut={() =>
          descriptionVar.current.classList.remove("descriptionUP")
        }
        onMouseOver={() =>
          descriptionVar.current.classList.add("descriptionUP")
        }
      >
        <div className="absolute top-1 right-3 gap-2 items-center z-[1] flex ">
          <i className="fa-solid fa-calendar text-gray-500"></i>
          <span className="text-[#888888] text-[14px]">
            {new Date(created_at).toDateString("y%/m%/d%")}
          </span>
        </div>
        <div
          className="absolute w-full h-full  overflow-y-scroll bg-white rounded-[15px] duration-500 p-5 translate-y-[100%] "
          ref={descriptionVar}
        >
          <span className="block font-semibold "> Description :</span>
          {description}
        </div>
        <div className="h-[30%]  py-3 px-5">
          <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-[60px] h-[60px]"></div>

          <div className=" mt-2  text-xl font-bold text-blue-500">
            {prenom} {nom}
          </div>
        </div>
        <div className="h-[70%] flex-col pl-5 flex gap-1 mt-6  text-[0.9em]">
          <div>
            <label className="font-medium  mr-2">Domain :</label>
            <span>{domain}</span>
          </div>
          <div>
            <label className="font-medium mr-2">Experience :</label>
            <span>{experience} years</span>
          </div>
          <div>
            <label className="font-medium mr-2">Niveau :</label>
            <span>{niveau}</span>
          </div>
          <div>
            <label className="font-medium mr-2">Salaire :</label>
            <span>{salaire}</span>
          </div>
          <div>
            <label className="font-medium mr-2">Ville :</label>
            <span>{location}</span>
          </div>
          <div>
            <label className="font-semibold mr-2">Role :</label>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
