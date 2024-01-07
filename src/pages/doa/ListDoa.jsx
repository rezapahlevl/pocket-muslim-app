import { useState } from "react";
import doaHarian from "../../static/DoaHarian";

const ListDoa = () => {
  const data = doaHarian;
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5">
        <h1 className="text-2xl font-medium">Daftar Doa Harian</h1>
        <input
          type="text"
          placeholder="Cari Doa"
          className="w-full max-w-lg border border-black input input-bordered"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-5">
        {data
          .filter((doa) => doa.title.toLowerCase().includes(query))
          .map((doa) => (
            <details
              key={doa.id}
              className="border border-black rounded-md collapse collapse-arrow bg-base-200"
            >
              <summary className="text-xl font-medium collapse-title">
                {doa.title}
              </summary>
              <div className="flex flex-col collapse-content">
                <h3 className="py-3 text-2xl font-medium text-right font-arab">
                  {doa.arabic}
                </h3>
                <h4 className="text-lg italic">{doa.latin}</h4>
                <h4 className="text-lg">{doa.indonesia}</h4>
              </div>
            </details>
          ))}
      </div>
    </>
  );
};

export default ListDoa;
