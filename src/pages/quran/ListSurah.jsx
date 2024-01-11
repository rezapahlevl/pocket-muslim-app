import { useState } from "react";
import Api from "../../hooks/Api";
import AudioBtn from "../../components/AudioButton/AudioBtn";
import { Link } from "react-router-dom";
import { PiHeartFill } from "react-icons/pi";

const ListSurah = () => {
  const url = "https://equran.id/api/v2/surat";
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
        <h1 className="text-2xl font-medium">Daftar Surah</h1>
        <input
          type="text"
          placeholder="Cari Surah..."
          className="w-full max-w-lg border border-black bg-base-200 input input-bordered text-base-content"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* <pre>{JSON.stringify(data.data, null, 2)}</pre> */}
        {data &&
          data.data
            .filter((surah) => surah.namaLatin.toLowerCase().includes(query))
            .map((surah) => (
              <div
                key={surah.nomor}
                className="border border-black rounded-md bg-base-100 hover:bg-base-200 card text-base-content"
              >
                <div className="items-center p-5 text-center card-body">
                  <h2 className="card-title ">
                    {surah.nomor}.{" "}
                    <span className="text-xl font-bold">{surah.nama}</span>{" "}
                  </h2>
                  <h2 className="text-xl">{surah.namaLatin}</h2>
                  <p>
                    {surah.arti}, {surah.tempatTurun} <br /> {surah.jumlahAyat}{" "}
                    ayat
                  </p>
                  {/* {surah.audioFull["05"]} */}
                  <div className="justify-end card-actions">
                    <Link
                      to={`/pocket-muslim-app/surah/${surah.nomor}`}
                      className="btn btn-primary text-primary-content"
                    >
                      Baca
                    </Link>
                    <AudioBtn audioUrl={surah.audioFull["05"]} />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ListSurah;
