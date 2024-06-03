import Person from "../components/main/person";

export default function Applicants() {
  return (
    <>
      <div className="bg-[url('../image/pattern.png')] w-full  pt-[70px]">
        <div
          className={`grid grid-cols-3 w-full justify-items-center p-[50px] gap-[50px]`}
        >
            <Person />           
            <Person />           
            <Person />           
            <Person />           
            <Person />           
        </div>
      </div>
    </>
  );
}
