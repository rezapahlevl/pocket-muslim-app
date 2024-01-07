import { useParams } from "react-router-dom";
import Surah from "./surah/Surah";
import { useState } from "react";
import Tafsir from "./surah/Tafsir";

const DetailSurah = () => {
  const { nomor } = useParams();
  const [activeTab, setActiveTab] = useState("surah");
  //  Functions to handle Tab Switching
  const handleSurah = () => {
    // update the state to tab1
    setActiveTab("surah");
  };
  const handleTafsir = () => {
    // update the state to tab2
    setActiveTab("tafsir");
  };
  //   console.log(nomor);
  return (
    <>
      <div role="tablist" className="border border-black tabs tabs-boxed">
        <a
          role="tab"
          className={`tab ${
            activeTab === "surah" ? "tab-active" : ""
          } text-lg font-medium`}
          onClick={handleSurah}
        >
          Surah
        </a>
        <a
          role="tab"
          className={`tab ${
            activeTab === "tafsir" ? "tab-active" : ""
          } text-lg font-medium`}
          onClick={handleTafsir}
        >
          Tafsir
        </a>
      </div>
      {activeTab === "surah" ? <Surah nomor={nomor} /> : ""}
      {activeTab === "tafsir" ? <Tafsir nomor={nomor} /> : ""}
    </>
  );
};

export default DetailSurah;
