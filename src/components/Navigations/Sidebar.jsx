import { PiPlayPauseFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import AyatOfTheDay from "../AyatOfTheDay/AyatOfTheDay";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center h-screen drawer-content">
          {children}
        </div>
        <div className="drawer-side scrollbar-hide">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="min-h-full py-4 border-r border-black lg:px-8 menu w-80 bg-base-100 text-base-content lg:border-none">
            <Link
              to="/pocket-muslim-app"
              className="flex-none py-1 ml-3 text-xl font-semibold text-center lg:m-0 lg:text-3xl lg:text-left"
            >
              Pocket
            </Link>
            {/* Sidebar content here */}
            <div className="flex-1 overflow-y-auto text-lg mt-7">
              <li>
                <Link
                  to="/pocket-muslim-app/surah"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Quran
                </Link>
              </li>
              <li>
                <Link
                  to="/pocket-muslim-app/hadis"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Hadis
                </Link>
              </li>
              <li>
                <Link
                  to="/pocket-muslim-app/tahlil"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Tahlil
                </Link>
              </li>
              <li>
                <Link
                  to="/pocket-muslim-app/tasbih"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Tasbih
                </Link>
              </li>

              {/* <li>
                <a className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content">
                  Wirid
                </a>
              </li> */}
              <li>
                <Link
                  to="/pocket-muslim-app/doa-harian"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Doa Harian
                </Link>
              </li>
              {/* <li>
                <a
                  href="/doa-harian"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Tajwid
                </a>
              </li> */}
              <li>
                <Link
                  to="/pocket-muslim-app/asmaul-husna"
                  className="mb-3 border border-black bg-base-300 hover:border hover:border-black hover:bg-primary hover:text-primary-content"
                >
                  Asma'ul Husna
                </Link>
              </li>
            </div>
            <div className="flex-none lg:py-3">
              <AyatOfTheDay />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
