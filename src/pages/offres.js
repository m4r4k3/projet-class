import OffresCard from "../components/offres/offres-card";
import FullScreenOffer from "../components/offres/fullscreen-card"
import "../style/navigate.css";
import { useState } from "react";
export default function Offres() {
    const [fullScreen , setFullScreen] = useState(null)
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
        <div className="flex w-full justify-center items-center mt-5">
          <input
            type="text"
            className="outline-0 w-[25%] h-[30px] pl-2 rounded shadow-inner"
          />
          <button className="pl-5">
            <i className="fa-solid fa-chevron-right text-white"></i>
          </button>
        </div>
       {fullScreen && <FullScreenOffer setOffer={setFullScreen}/>}
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
          <OffresCard setOffer={setFullScreen} isOffer={true} />
        </div>
      </div>
    </>
  );
}
