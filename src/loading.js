import logo from "./image/elite-11-logo.png";

export default function LoadingScreen(){
    return (
        <div className="w-screen h-screen bg-white fixed flex top-0 justify-center items-center" style={{zIndex:99}}>
            <img src={logo} className="w-[150px] animate-pulse "/>
        </div>
    )
}