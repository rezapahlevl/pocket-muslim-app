import { useState, useEffect } from "react";
import { PiPalette } from "react-icons/pi";
import { themeChange } from "theme-change";

const ThemeController = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div className="dropdown dropdown-end scrollbar-hide">
        <div
          tabIndex={0}
          role="button"
          className="text-lg border border-black hover:border hover:border-black btn hover:bg-neutral hover:text-neutral-content"
        >
          <PiPalette size={20} />
          <svg
            width="12px"
            height="12px"
            className="inline-block w-2 h-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl h-64 overflow-y-auto scrollbar-hide bg-base-300 rounded-md border border-black w-52"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              onClick={() => setTheme("light")}
              aria-label="Light"
              value="light"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              onClick={() => setTheme("dark")}
              aria-label="Dark"
              value="dark"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Synthwave"
              onClick={() => setTheme("synthwave")}
              value="synthwave"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Retro"
              onClick={() => setTheme("retro")}
              value="retro"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Cyberpunk"
              onClick={() => setTheme("cyberpunk")}
              value="cyberpunk"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Forest"
              onClick={() => setTheme("forest")}
              value="forest"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Aqua"
              onClick={() => setTheme("aqua")}
              value="aqua"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Lofi"
              onClick={() => setTheme("lofi")}
              value="lofi"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Wireframe"
              onClick={() => setTheme("wireframe")}
              value="wireframe"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Black"
              onClick={() => setTheme("black")}
              value="black"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Luxury"
              onClick={() => setTheme("luxury")}
              value="luxury"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Dracula"
              onClick={() => setTheme("dracula")}
              value="dracula"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Business"
              onClick={() => setTheme("business")}
              value="business"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Night"
              onClick={() => setTheme("night")}
              value="night"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Coffee"
              onClick={() => setTheme("coffee")}
              value="coffee"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Dim"
              onClick={() => setTheme("dim")}
              value="dim"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Nord"
              onClick={() => setTheme("nord")}
              value="nord"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start btn btn-sm btn-block btn-ghost"
              aria-label="Sunset"
              onClick={() => setTheme("sunset")}
              value="sunset"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ThemeController;
