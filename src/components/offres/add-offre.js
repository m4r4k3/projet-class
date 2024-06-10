import { useEffect, useState } from "react";
import { Axios } from "../../axios";
import LoadingScreen from "../../loading";

export default function AddOffre({ addMethod, setEdit }) {
  const [form, setForm] = useState();

  const [cities, setCities] = useState();
  const [contrat, setContrat] = useState();
  const [domain, setDomains] = useState();

  const setFormFunc = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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

  const submit = async () => {
    await Axios.get("/sanctum/csrf-cookie");
    await Axios.post("/api/offres", form)
      .then((res) => res)
      .then((data) => console.log(data));
    addMethod(false);
    setEdit((prev) => !prev);
  };
  if (!cities || !contrat || !domain) {
    return <LoadingScreen />;
  }
  return (
    <div
      className="fixed z-[3] h-screen top-0 w-screen glass menu-glass flex justify-center items-center"
      onClick={() => addMethod(false)}
    >
      <div
        className="w-[900px] h-[400px] bg-[#0D1117] rounded border-[#30363D]  border flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full mb-5 text-xl font-bold p-5 flex justify-center text-white">
          <p>Add Offer</p>
        </div>
        <div className="flex w-full">
          <div className="w-1/2">
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">Salary</label>
              <input
                type="number"
                onChange={(e) => setFormFunc(e)}
                name="salary"
                className="text-black outline-0 w-[40%] rounded pl-1"
              />
              <span className="w-[10%] pl-2">DH</span>
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">Post</label>
              <input
                type="text"
                onChange={(e) => setFormFunc(e)}
                name="post"
                className="text-black outline-0 w-[50%] rounded pl-1"
              />
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">Starting</label>
              <div className="w-[50%]">
                <input
                  onChange={(e) => setFormFunc(e)}
                  type="date"
                  name="starting"
                  className="text-black outline-0 w-full rounded pl-1"
                />
              </div>
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">City</label>
              <select
                className="text-black outline-0 w-[50%] rounded"
                name="city"
                onChange={(e) => setFormFunc(e)}
              >
                <option key={0} selected="true">
                  -
                </option>
                {cities.map((e) => (
                  <option
                    key={e.id}
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">Domain</label>
              <select
                className="text-black outline-0 w-[50%] rounded"
                name="domain_id"
                onChange={(e) => setFormFunc(e)}
              >
                <option key={0} selected="true">
                  -
                </option>
                {domain.map((e) => (
                  <option
                    key={e.id}
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                  >
                    {e.domain}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">Contrat</label>
              <select
                className="text-black outline-0 w-[50%] rounded"
                name="type_contrat"
                onChange={(e) => setFormFunc(e)}
              >
                <option key={0} selected="true">
                  -
                </option>
                {contrat.map((e) => (
                  <option
                    key={e.id}
                    className="text-white cursor-pointer bg-[#0D1117] border-gray-500 border "
                    value={e.id}
                  >
                    {e.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">
                Characteristic
              </label>
              <textarea
                name="characteristic"
                type="text"
                onChange={(e) => setFormFunc(e)}
                className="text-black outline-0 w-[50%] rounded pl-1 h-[80px] resize-none"
              ></textarea>
            </div>
            <div className="text-white w-full flex justify-center mb-5 ">
              <label className="w-[100px] inline-block pr-1">description</label>
              <textarea
                name="description"
                type="text"
                onChange={(e) => setFormFunc(e)}
                className="text-black outline-0 w-[50%] rounded pl-1 h-[80px] resize-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <button
            className="text-white rounded border px-8 py-2 border-[#30363D] duration-300 hover:bg-gray-800"
            onClick={submit}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
