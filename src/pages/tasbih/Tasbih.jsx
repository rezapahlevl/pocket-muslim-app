import { useState } from "react";

const Tasbih = () => {
  const [tasbih, setTasbih] = useState(0);

  const handleTasbih = () => {
    setTasbih(tasbih + 1);
  };

  const resetTasbih = () => {
    setTasbih(0);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <div className="p-16 text-center border border-black rounded-md bg-base-100">
          <h1 className="text-3xl font-medium">Tasbih</h1>
          <div className="">
            <h1 className="font-medium text-center text-7xl">{tasbih}</h1>
            <button
              onClick={handleTasbih}
              className="mt-3 text-3xl border border-black btn btn-lg btn-primary"
            >
              Klik
            </button>
          </div>

          {/* <div className="flex-1"></div> */}
          <button
            onClick={resetTasbih}
            className="mt-16 border border-black btn btn-sm btn-error"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Tasbih;
