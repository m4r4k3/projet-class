import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Axios } from "../../axios";

export default function SearchBar({ type, addMethod }) {
  const isLoggedIn = useSelector((s) => s.store.loggedIn);
  const typeUser = useSelector((s) => s.store.type);

  const [cities, setCities] = useState();
  const [contrat, setContrat] = useState();
  const [domain, setDomains] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    document.body.classList.add("modal-open");

    Axios.get("api/city")
      .then((res) => res.data)
      .then((res) => setCities(res));

    Axios.get("api/domain")
      .then((res) => res.data)
      .then((res) => setDomains(res));

    Axios.get("api/contrat")
      .then((res) => res.data)
      .then((res) => setContrat(res));
  }, []);
  return (
    <>
      <form
        className="flex w-full justify-center items-center mt-5 relative"
        style={{ zIndex: 2 }}
      >
        <div className="pr-10 cursor-pointer">
          <div className="flex flex-col  items-center relative">
            <i
              className="fa-light fa-bars-filter text-white text-2xl"
              onClick={() => setFilter((prev) => !prev)}
            ></i>
            <ul
              className={`w-[100px]  md:w-[125px] h-[150px] bg-[#30363D] flex-col flex justify-around p-1 rounded absolute top-[-150px] duration-500 ${
                filter ? "translate-y-[200px]" : "hidden"
              } `}
            >
              <li>
                <select
                  className="text-white outline-0 w-full rounded  bg-[#0D1117] border-gray-500 border  "
                  name="city"
                  defaultValue={""}
                >
                  <option key={-1} value="" disabled>
                    City
                  </option>
                  {cities &&
                    cities.map((e) => (
                      <option
                        key={e.id}
                        className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border"
                        value={e.id}
                      >
                        {e.name}
                      </option>
                    ))}
                </select>
              </li>
              <li>
                <select
                  className="text-white outline-0 w-full rounded  bg-[#0D1117] border-gray-500 border  "
                  name="domain"
                  defaultValue={""}
                >
                  <option key={-1} value="" disabled>
                    domain
                  </option>
                  {domain &&
                    domain.map((e) => (
                      <option
                        key={e.id}
                        className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border"
                        value={e.id}
                      >
                        {e.domain}
                      </option>
                    ))}
                </select>
              </li>
              <li>
                <input
                  className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border w-full outline-0 pl-1 rounded "
                  placeholder="Salary"
                  name="salary"
                  type="number"
                />
              </li>
              {type == 2 && (
                <li>
                  <select
                    className="text-white outline-0 w-full rounded  bg-[#0D1117] border-gray-500 border  "
                    name="type_contrat"
                    defaultValue={""}
                  >
                    <option key={-1} value="" disabled>
                      Contrat
                    </option>
                    {contrat &&
                      contrat.map((e) => (
                        <option
                          key={e.id}
                          className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                          value={e.id}
                        >
                          {e.type}
                        </option>
                      ))}
                  </select>
                </li>
              )}
            </ul>
          </div>
        </div>
        <input
          type="text"
          name="q"
          className="outline-0 w-[60%] md:w-[25%] h-[30px] pl-2 rounded shadow-inner"
        />
        <button className="pl-5" type="submit">
          <i className="fa-solid fa-chevron-right text-white"></i>
        </button>
        {isLoggedIn && typeUser == type && (
          <div
            className="absolute sm:right-20 sm:top-0 right-5 top-[40px] text-center h-full cursor-pointer"
            onClick={() => addMethod(true)}
          >
            <i className="fa-solid fa-plus text-xl text-white"></i>
          </div>
        )}
      </form>
    </>
  );
}
