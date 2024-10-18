import { useKeenSlider } from "keen-slider/react";
import {motion} from "framer-motion"
import "keen-slider/keen-slider.min.css";

export function Footer() {
  const clients = [
    {
      name: "NovaTech Industries",
      since: 2022,
      description:
        "Helped NovaTech automate their project tracking and reporting system with a custom-built web application using React and Node.js. Improved team efficiency by 40%.",
    },
    {
      name: "Zenith Financial Group",
      since: 2015,
      description:
        "Built a secure and intuitive portal for Zenith’s clients to track and manage their financial portfolios with real-time updates.",
    },
    {
      name: "EcoVision Solutions",
      since: 2019,
      description:
        "Redesigned their website with a focus on user experience and mobile optimization. Increased web traffic by 25%.",
    },
    {
      name: "EcoVision Solutions",
      since: 2017,
      description:
        "Redesigned their website with a focus on user experience and mobile optimization. Increased web traffic by 25%.",
    },
    {
      name: "EcoVision Solutions",
      since: 2024,
      description:
        "Redesigned their website with a focus on user experience and mobile optimization. Increased web traffic by 25%.",
    },
  ];

  const [sliderRef, instance] = useKeenSlider({
    renderMode: "performance",
    drag: true,
    mode: "free",
    loop: true,
    slides: {
      perView: 3,
      spacing: 50,
    },
  });
  return (
    <div className="bg-[url('../image/pattern.png')] hidden sm:block ">
      <div className="w-full  shadow-black shadow-inner py-10 ">
        <div className="flex w-full  items-center gap-2 px-10 py-5">
          <div className="text-2xl font-bold text-white ">Our Clients</div>
          <div
            onClick={() => instance.current.prev()}
            className="w-[30px] h-[30px] menu-glass bg-[rgb(69 69 69 / 50%)] ml-auto cursor-pointer grid place-content-center rounded-full"
          >
            <i className="fa-solid fa-chevron-left text-white"></i>
          </div>
          <div
            onClick={() => instance.current.next()}
            className="w-[30px] h-[30px] menu-glass bg-[rgb(69 69 69 / 50%)] grid cursor-pointer place-content-center rounded-full"
          >
            <i className="fa-solid fa-chevron-right text-white"></i>
          </div>
        </div>
        <motion.div 
        
        transition={{
          duration: 0.5,
        }}
        initial={{ opacity:0 , translateX:-200}}
        whileInView={{ opacity:1 ,translateX:0}}
        viewport={{once:1}}

        className="flex w-full overflow-hidden   mx-auto" ref={sliderRef}>
          {clients.map((client) => (
            <div
         
        
            className="keen-slider__slide select-none relative cursor-grab active:cursor-grabbing   flex flex-col justify-around h-[200px] w-[350px] bg-[#0D1117] border border-[#30363D] shadow rounded-lg p-6 max-w-md  ">
              <h2 className="text-2xl font-semibold text-gray-200 mb-2 text-center ">
                {client.name}
              </h2>
              <p className="text-gray-100 text-sm absolute top-2 right-3">
                {client.since}
              </p>

              <p className="text-gray-300 text-center">{client.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
