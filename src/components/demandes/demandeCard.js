import { useRef } from "react";
import "../../style/demande.css";
export default function DemandeCard() {
  const description = useRef(null);
  return (
    <div className="h-[350px] w-[350px] flex relative">
      <div className="buttons absolute top-[15px] left-[-40px]">
        <div className="button">
          <i class="fa-solid fa-bookmark"></i>
        </div>
        <div className="button">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <div
        className="w-full h-full bg-white rounded-[15px] relative text-[18px]  shadow-inner overflow-hidden"
        onMouseOut={() => description.current.classList.remove("descriptionUP")}
        onMouseOver={() => description.current.classList.add("descriptionUP")}
      >
        <div className="absolute top-1 right-3 text-[#888888] text-[14px] z-[1]">
          20/24
        </div>
        <div
          className="absolute w-full h-full bg-white rounded-[15px] duration-500 p-5 translate-y-[100%] "
          ref={description}
        >
          <span className="block font-semibold mb-2"> Description :</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </div>
        <div className="h-[70%] flex flex-col justify-center items-center">
          <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-[100px] h-[100px]"></div>

          <div className="mt-5 font-bold">Marouane Akchar</div>
        </div>
        <div className="h-[30%] flex justify-around">
          <div className="w-[45%]">
            <div>
              <label className="font-semibold">Domain :</label>
              <span>IT</span>
            </div>
            <div>
              <label className="font-semibold">Experience :</label>
              <span>+2 Ans</span>
            </div>
            <div>
              <label className="font-semibold">Niveau :</label>
              <span>Bac +3 </span>
            </div>
          </div>
          <div className="w-[45%]">
            <div>
              <label className="font-semibold">Salaire :</label>
              <span>3000 DH</span>
            </div>
            <div>
              <label className="font-semibold">Ville :</label>
              <span>Casablanca</span>
            </div>
            <div>
              <label className="font-semibold">Role :</label>
              <span>Comptable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
