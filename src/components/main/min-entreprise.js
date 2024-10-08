import { Link } from "react-router-dom";

export default function MinEntr ({
   id ,
   name
  }){
      return( 
     
      <Link className="h-[200px] w-[250px] flex relative  bg-white flex-col justify-around py-2 items-center rounded cursor-pointer" to={"/entreprise/"+id}>
  
                <div className="bg-[url(https://th.bing.com/th/id/OIP.mvDgxxXg6kr3mhytvcawiQHaHa?rs=1&pid=ImgDetMain)] bg-center bg-contain rounded-full w-[100px] h-[100px]"></div>
  
                <div className=" font-bold">{name}</div>
              </Link>)
  }