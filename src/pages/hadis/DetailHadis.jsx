import { useParams } from "react-router-dom";
import Api from "../../hooks/Api";
import { useState } from "react";
const DetailHadis = () => {
  const { id } = useParams();
  const [bahasa, setBahasa] = useState("id");

  const handleId = () => {
    setBahasa("id");
  };
  const handleAr = () => {
    setBahasa("ar");
  };
  const handleEn = () => {
    setBahasa("en");
  };
  const url =
    "https://hadeethenc.com/api/v1/hadeeths/one/?language=" +
    bahasa +
    "&id=" +
    id;
  const { data, error, loading } = Api(url);

  console.log(data);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (data) {
    console.log("Data Berhasil Di Fetch");
  }

  return (
    <>
      {" "}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-5 pb-5">
          <button onClick={handleId} className="btn btn-sm btn-primary">
            Indonesia
          </button>
          <button onClick={handleAr} className="btn btn-sm btn-primary">
            Arab
          </button>
          <button onClick={handleEn} className="btn btn-sm btn-primary">
            Inggris
          </button>
        </div>
        <h1 className="pb-5 text-xl font-medium text-center">{data.title}</h1>
        <h1 className="pb-5 text-justify">{data.hadeeth}</h1>
        <h1 className="pb-5">
          {data.grade} | {data.attribution}
        </h1>
        <div className="text-justify">
          <h1 className="font-medium">Penjelasan :</h1>
          <h1 className="">{data.explanation}</h1>
        </div>
        <div className="py-5">
          <h1 className="font-medium text-justify">Kesimpulan :</h1>
          {data.hints &&
            data.hints.map((hint, index) => (
              <h1 className="">
                {index + 1}. {hint}
              </h1>
            ))}
        </div>
        {/* <h1>Referensi :</h1>
        <h1>{data.reference}</h1> */}
      </div>
    </>
  );
};

export default DetailHadis;
