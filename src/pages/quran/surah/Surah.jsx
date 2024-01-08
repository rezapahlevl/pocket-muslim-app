import AudioBtn from "../../../components/AudioButton/AudioBtn";
import Api from "../../../hooks/Api";

const Surah = ({ nomor }) => {
  const url = "https://equran.id/api/v2/surat/" + nomor;
  const { data: surah, error, loading } = Api(url);
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
  if (surah) {
    console.log("Data Berhasil Di Fetch");
  }
  //   console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {surah && (
          <div key={surah.data.nomor} className="rounded-md">
            <div className="flex items-center justify-between">
              <div className="py-3 rounded-md bg-base-300">
                <h3 className="text-xl font-semibold">
                  Surah Ke {surah.data.nomor}
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-right md:text-2xl">
                  {surah.data.namaLatin}{" "}
                  <span className="text-lg text-base-content">
                    ({surah.data.arti})
                  </span>
                </h3>
              </div>
            </div>
            <h4 className="text-lg">
              Terdiri Dari {surah.data.jumlahAyat} Ayat
            </h4>
            <p className="mt-3 text-justify text-base-content">
              <span>Deskripsi Surah : </span> <br />
              {surah.data.deskripsi.replace(/<\/?[^>]+>/gi, "")}
            </p>
            <div className="flex justify-between pt-5">
              <div className="flex gap-3">
                <AudioBtn audioUrl={surah.data.audioFull["05"]} />
              </div>
            </div>
          </div>
        )}
        {surah &&
          surah.data.ayat.map((ayat) => (
            <div className="p-5 border border-black rounded-md bg-base-100 text-base-content">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h1>({ayat.nomorAyat})</h1>
                  <h1 className="pb-3 text-2xl leading-loose text-right lg:ml-64">
                    {ayat.teksArab}
                  </h1>
                </div>
                <h2 className="pb-3 italic lg:mr-64">{ayat.teksLatin}</h2>
                <h2 className="lg:mr-64">{ayat.teksIndonesia}</h2>
                <div className="pt-5">
                  <AudioBtn audioUrl={ayat.audio["05"]} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Surah;
