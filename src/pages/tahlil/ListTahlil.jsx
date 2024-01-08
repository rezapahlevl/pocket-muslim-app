import { PiInfo } from "react-icons/pi";
import tahlil from "../../static/Tahlil";

const ListTahlil = () => {
  const data = tahlil;
  return (
    <>
      <h1 className="pb-5 text-2xl font-medium text-center underline">
        Tahlil dan Doa
      </h1>
      <div className="flex flex-col items-center justify-between">
        {data.map((tahlil) => (
          <div key={tahlil.id} className="w-full pb-5">
            <h1 className="pb-3 text-xl font-medium text-center">
              {tahlil.title}
            </h1>
            <h3 className="pb-3 text-2xl font-medium leading-loose text-right">
              {tahlil.arabic}
            </h3>
            <h3 className="pb-3 text-lg text-justify">{tahlil.indonesia}</h3>
          </div>
        ))}
      </div>
      <div className="pb-5">
        <div
          className="tooltip tooltip-right"
          data-tip="https://www.nu.or.id/syariah/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya-drr3t"
        >
          <button className="border border-black btn btn-primary">
            <PiInfo size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListTahlil;
