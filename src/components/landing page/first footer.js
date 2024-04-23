import steve from "../../image/steve jobs.png";
import { useEffect , useRef, useState} from "react"

export function Footer() {
  const fFooter = useRef(null)
  const [pos , setPos] = useState(0)
  useEffect(
  ()=>{
    window.addEventListener  ( "scroll" ,
      ()=>{
        const topDis =fFooter.current? fFooter.current.getBoundingClientRect().top :0
        setPos(0<topDis < window.innerHeight && !window.scrollY < 200 ? topDis : 0)
      }
    )
    } , []
  )
  return (
    <div className="w-full px-[5%] shadow-black shadow-inner p-5" ref={fFooter} >
      <div  className="h-[500px] overflow-hidden w-full  bg-[#0D1117] border-[#30363D] rounded-[5px] flex p-[2%] border pr-[20px] justify-between" >
        <div className="text-[40px] w-[60%] font-black text-white logo-font ">
          <i className="fa-solid fa-quote-left"></i>Your work is going to fill a
          large part of your life, and the only way to be truly satisfied is to
          do what you believe is great work. And the only way to do great work
          is to love what you do. <i className="fa-solid fa-quote-right"></i>
          <div className="w-full flex justify-end">
            <i className="mt-5 font-thin">Steve Jobs</i>
          </div>
        </div>

        <div className=" logo-font">
          <img src={steve} className="h-[500px] w-[400px]" style={{transform:`translatex(${pos  /5 }px)`}}/>
        </div>
      </div>
    </div>
  );
}
