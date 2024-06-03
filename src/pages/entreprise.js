export default function Entreprise() {
  return (
    <div className="bg-[url('../image/pattern.png')] w-full flex justify-around pt-[70px] min-h-screen">
     <div className="w-[40%] flex flex-col items-end p-3">
        <div className=" flex  justify-between items-center  flex-col  bg-[#0D1117] border border-[#30363D] sticky top-[80px] rounded-[5px] w-[35vw] py-[3%]">
          <div className="w-full flex flex-col justify-between items-center gap-3">
            <div className="bg-[url(https://logos-world.net/wp-content/uploads/2020/04/Apple-Emblem.png)] bg-center bg-cover bg-no-repeat rounded-full w-1/2 h-[calc(35vw/2)]"></div>
            <div className="text-xl font-bold text-white mt-5">Marouane Akchar</div>
          </div>
          </div>
      </div>
      <div className="w-[55%]  bg-[#0D1117] border border-[#30363D] rounded ">
 <div className="bg-[#0D1117] my-1 mx-auto p-5 rounded-[7px] ">
            <div className="font-bold border-b mb-3 pb-3 text-lg text-gray-500 border-[#30363D]">About</div>
            <div className="text-[15px] text-white ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
      </div>
    </div>
  );
}
