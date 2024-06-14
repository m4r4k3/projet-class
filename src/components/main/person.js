import { Link } from "react-router-dom";

export default function Person({id , nom, prenom  }) {
  return (
    <Link className="h-[200px] w-[350px] flex relative  bg-white flex-col justify-center items-center rounded cursor-pointer" to={"/profile/"+id}>
      <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-[100px] h-[100px]"></div>

      <div className="mt-5 font-bold">{nom + " " + prenom}</div>
    </Link>
  );
}
