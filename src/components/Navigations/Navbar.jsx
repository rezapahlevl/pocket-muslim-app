import { Link } from "react-router-dom";
import ThemeController from "../Theme/ThemeController";

const Navbar = () => {
  return (
    <>
      <div className="flex border-b border-black lg:border-none lg:px-0 lg:flex-row-reverse lg:py-5 navbar bg-base-100">
        <div className="flex-none">
          <label
            className="btn btn-square btn-ghost lg:hidden"
            htmlFor="my-drawer-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 lg:hidden">
          <Link
            to="/pocket-muslim-app"
            className="text-xl btn btn-ghost dark:text-xs"
          >
            Pocket
          </Link>
        </div>
        <div className="flex-none">
          <ThemeController />
        </div>
      </div>
    </>
  );
};

export default Navbar;
