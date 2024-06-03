export default function Education({school , certificate ,end , start , description}){
    return (
    <div className="pl-[5%] ml-[5%] py-5">
      <div className=" border-[#30363D] w-[95%]  pl-10 py-2 border-t flex ">
        <div className="w-[90%]">
          <div className="flex justify-between pr-5 text-white">
            <label className="font-semibold text-lg ">{school}</label>
            <div>{certificate}</div>
          </div>
          <div className="flex w-[200px] justify-between">
          <div className="text-gray-400 text-sm">{(new Date(start)).getFullYear} - {(new Date(end)).getFullYear}</div>
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-400">
              {description}</div>
          </div>
        </div>
      </div>
    </div>
    )
}