import asmaulHusna from "../../static/AsmaulHusna";

const ListAsmaulHusna = () => {
  const data = asmaulHusna;
  return (
    <>
      <div className="mx-auto">
        <h1 className="pb-5 text-2xl font-medium text-center underline">
          99 Asmaul Husna
        </h1>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {data.map((asma) => (
            <div
              key={asma.id}
              className="flex flex-col items-center justify-center p-5 border border-black rounded-md bg-base-100 hover:bg-base-200"
            >
              <h1 className="pb-3 text-2xl font-bold font-arab">
                {asma.id}. {asma.arab}
              </h1>
              <h1>{asma.latin}</h1>
              <h1 className="text-center">{asma.indonesia}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListAsmaulHusna;
