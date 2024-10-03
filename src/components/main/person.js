import { Link } from "react-router-dom";

export default function Person({id , nom, prenom  ,city , entreprise}) {
  return (
    <Link className="h-[210px] w-[250px] bg-white flex flex-col  py-2 items-center rounded-lg cursor-pointer relative" to={"/profile/"+id}>
      <div className="bg-[url(https://th.bing.com/th/id/OIP.PJB4lxw88QRaADN8UWxV4AHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-[100px] h-[100px]"></div>
      <div className=" font-bold my-1">{nom + " " + prenom}</div>
      <div className=" text-gray-500 ">{city?city.name: "Morocco"}</div>
    { !entreprise &&  <div className="h-[30px] w-[150px] bg-green-500 absolute bottom-2 right-[-10px] rounded-full text-white font-black  flex items-center justify-center">Open to work</div>}
    </Link>
  );
}
