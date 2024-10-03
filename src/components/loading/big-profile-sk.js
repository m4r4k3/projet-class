import { AnimatedDivDark } from "./sks";

export const SkillSk = () =>
  [50, 60, 70, 35].map((e) => (
    <li className="mb-2">
      <AnimatedDivDark w={e} h={20} />
    </li>
  ));
export const AboutSk = () => (
  <div className="h-[200px] w-full">
    {[100, 80, 90, 35].map((e) => (
      <div className="mb-2">
        <AnimatedDivDark w={e} h={20} />
      </div>
    ))}
  </div>
);

export const NameSk = () => (
  <div className="w-full flex justify-center">
    {[20, 20].map((e) => (
      <AnimatedDivDark w={e} h={20} />
    ))}
  </div>
);
export const NameEntrSk = () => (
  <div className="w-full flex mt-5 justify-center">
    {[20].map((e) => (
      <AnimatedDivDark w={e} h={20} />
    ))}
  </div>
);
export const EducationSk = () => (
  <div className=" py-5">
    <div className=" border-[#30363D] w-full   py-2 border-t flex px-[5%] ">
      <div className="w-full">
        <div className="flex justify-between ">
          <label className="f ">
            <AnimatedDivDark w={100} h={20} c="px" />
          </label>
          <div>
            <AnimatedDivDark w={120} h={15} c="px" />
          </div>
        </div>
        <div className="flex w-[200px] justify-between mt-2">
          <div className=" flex items-center">
            <AnimatedDivDark w={40} h={10} c="px" /> -{" "}
            <AnimatedDivDark w={40} h={10} c="px" />
          </div>
        </div>
        <div>
          <div className=" mt-2 flex flex-col gap-2">
            <AnimatedDivDark w={100} h={10} />
            <AnimatedDivDark w={80} h={10} />
            <AnimatedDivDark w={10} h={10} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ExperienceSk = ()=>(
    <div className="my-5 ">
    <div className=" border-[#30363D] w-full    py-2  border-t flex ">
     
      <div className="w-full pr-[5%]">
        <div className="flex justify-between">
          <label className=" "> <AnimatedDivDark w={100} h={20} c="px" /></label>
          <div>    <AnimatedDivDark w={40} h={15} c="px" /></div>
        </div>
        <div className="flex w-[200px] justify-between">
        <div className="flex items-center">
            <AnimatedDivDark w={40} h={10} c="px" /> -{" "}
            <AnimatedDivDark w={40} h={10} c="px" />
          </div>
        </div>
        <div>
          <div className="">   <AnimatedDivDark w={120} h={10} c="px" /></div>
          <div className="mt-2 flex flex-col gap-2">
          <AnimatedDivDark w={100} h={10} />
            <AnimatedDivDark w={80} h={10} />
            <AnimatedDivDark w={10} h={10} />
          </div>
        </div>
      </div>
    </div>
  </div>
)