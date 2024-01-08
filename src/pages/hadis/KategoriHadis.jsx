import { useState } from "react";
import Api from "../../hooks/Api";
import AudioBtn from "../../components/AudioButton/AudioBtn";
import { Link } from "react-router-dom";

const KategoriHadis = () => {
  const url = "https://hadeethenc.com/api/v1/categories/list/?language=id";
  const { data, error, loading } = Api(url);
  const [query, setQuery] = useState("");
  //   console.log(data.data);
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
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5">
        <h1 className="text-2xl font-medium">Daftar Hadis</h1>
        <input
          type="text"
          placeholder="Cari Hadis..."
          className="w-full max-w-lg border border-black bg-base-200 input input-bordered text-base-content"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:gap-5 lg:grid-cols-3">
        {/* <pre>{JSON.stringify(data.data, null, 2)}</pre> */}
        {data &&
          data
            .filter((hadis) => hadis.title.toLowerCase().includes(query))
            .map((hadis) => (
              <div
                key={hadis.id}
                className="border border-black rounded-md bg-base-100 hover:bg-base-200 card text-base-content"
              >
                <div className="p-5 card-body">
                  <h2 className="card-title">{hadis.title}</h2>
                  <h2 className="text-xl">{hadis.hadeeths_count} Hadis</h2>
                  {/* <p>
                    {hadis.arti}, {hadis.tempatTurun} <br /> {hadis.jumlahAyat}{" "}
                    ayat
                  </p> */}
                  {/* {hadis.audioFull["05"]} */}
                  <div className="flex items-end justify-end flex-1">
                    <Link
                      to={`/pocket-muslim-app/list-hadis/${hadis.id}`}
                      className="btn btn-primary text-primary-content"
                    >
                      Baca
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default KategoriHadis;
