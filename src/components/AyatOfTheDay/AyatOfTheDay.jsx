import { useEffect, useState } from "react";
import Api from "../../hooks/Api";
import { PiPlayPauseFill } from "react-icons/pi";
import AudioBtn from "../AudioButton/AudioBtn";
import { Link } from "react-router-dom";

const AyatOfTheDay = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 113) + 1; // Adjust the range from 1 to 113
  };
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const lastGeneratedDate = localStorage.getItem("lastGeneratedDate");
    const currentDate = new Date().toLocaleDateString();
    const currentDay = new Date().getDay(); // Sunday is 0, Monday is 1, ..., Friday is 5

    if (currentDay === 5) {
      // Friday
      setRandomNumber(18);
      localStorage.setItem("randomNumber", "18");
      localStorage.setItem("lastGeneratedDate", currentDate);
    } else if (lastGeneratedDate !== currentDate) {
      const newRandomNumber = getRandomNumber();
      setRandomNumber(newRandomNumber);
      localStorage.setItem("randomNumber", newRandomNumber.toString());
      localStorage.setItem("lastGeneratedDate", currentDate);
    } else {
      const storedRandomNumber = localStorage.getItem("randomNumber");
      setRandomNumber(Number(storedRandomNumber));
    }
  }, []);

  const url = "https://equran.id/api/v2/surat/" + randomNumber;
  const { data: surah, error, loading } = Api(url);

  return (
    <>
      {surah && (
        <div className="border border-black rounded-md shadow-md bg-base-300 card text-base-content">
          <div className="items-center p-5 text-center card-body">
            <h2 className="card-title">Surah Hari Ini</h2>
            <h2>
              {surah.data.namaLatin} ({surah.data.nama})
            </h2>
            <h2>{surah.data.jumlahAyat} Ayat</h2>
            <div className="justify-end card-actions">
              <Link
                to={`pocket-muslim-app/surah/${surah.data.nomor}`}
                className="btn btn-primary text-primary-content"
              >
                Baca
              </Link>
              <AudioBtn audioUrl={surah.data.audioFull["05"]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AyatOfTheDay;
