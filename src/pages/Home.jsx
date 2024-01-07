import { Link } from "react-router-dom";
import TypingText from "../components/Effects/TypingText";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col">
          <div className="flex justify-between border border-black rounded-md shadow-md lg:gap-8 bg-base-100">
            <img src="/p2.png" className="w-32 h-32 lg:h-auto" alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-medium text-center lg:text-3xl">
                Hi👋, Assalamu'alaikum.
              </h1>
              <p className="mr-3 text-lg text-center lg:m-0">
                {/* Your Partner Of Spiritual Journey */}
                Selamat Datang di Pocket.
              </p>
            </div>
            <img
              src="/p1.png"
              className="hidden w-32 h-32 transform lg:h-auto lg:block -scale-x-100"
              alt=""
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 py-5">
            <Link
              to="/surah"
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Baca Quran
            </Link>
            <Link
              to="/hadis"
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Hadis
            </Link>
            <Link
              to="/tahlil"
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Tahlil
            </Link>
            <Link
              to="/tasbih"
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Tasbih
            </Link>

            {/* <a
              href=""
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Wirid
            </a> */}
            <Link
              to="/doa-harian"
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Doa Harian
            </Link>
            {/* <a
              href=""
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Tajwid
            </a> */}
            <Link
              to="/asmaul-husna"
              className="text-lg rounded-md btn btn-md btn-ghost hover:border hover:border-black hover:bg-primary hover:text-primary-content"
            >
              Asma'ul Husna
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
