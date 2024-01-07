import AudioBtn from "../../../components/AudioButton/AudioBtn";
import Api from "../../../hooks/Api";

const Tafsir = ({ nomor }) => {
  const url = "https://equran.id/api/v2/tafsir/" + nomor;
  const { data: tafsir, error, loading } = Api(url);
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
  if (tafsir) {
    console.log("Data Berhasil Di Fetch");
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {tafsir && (
          <div key={tafsir.data.nomor} className="rounded-md">
            <div className="flex items-center justify-between">
              <div className="py-3 rounded-md bg-base-300">
                <h3 className="text-xl font-semibold">
                  Surah Ke {tafsir.data.nomor}
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-right md:text-2xl">
                  {tafsir.data.namaLatin}{" "}
                  <span className="text-xl text-base-content">
                    ({tafsir.data.arti})
                  </span>
                </h3>
              </div>
            </div>
            <h4 className="text-lg">
              Terdiri Dari {tafsir.data.jumlahAyat} Ayat
            </h4>
            <p className="mt-3 text-justify text-base-content">
              <span>Deskripsi Surah : </span> <br />
              {tafsir.data.deskripsi.replace(/<\/?[^>]+>/gi, "")}
            </p>
            <div className="flex justify-between pt-5">
              <div className="flex gap-3">
                <AudioBtn audioUrl={tafsir.data.audioFull["05"]} />
              </div>
            </div>
          </div>
        )}
        {tafsir &&
          tafsir.data.tafsir.map((tafsir) => (
            <div className="p-5 border border-black rounded-md bg-base-100">
              <h1 className="pb-3 font-medium">Ayat {tafsir.ayat}</h1>
              <h3 className="text-justify">{tafsir.teks}</h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default Tafsir;
