import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigations/Navbar";
import Sidebar from "./components/Navigations/Sidebar";
import Home from "./pages/Home";
import ListSurah from "./pages/quran/ListSurah";
import ListDoa from "./pages/doa/ListDoa";
import ListTahlil from "./pages/tahlil/ListTahlil";
import ListAsmaulHusna from "./pages/asmaul-husna/ListAsmaulHusna";
import DetailSurah from "./pages/quran/DetailSurah";
import KategoriHadis from "./pages/hadis/KategoriHadis";
import ListHadis from "./pages/hadis/ListHadis";
import DetailHadis from "./pages/hadis/DetailHadis";
import Tasbih from "./pages/tasbih/Tasbih";

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <BrowserRouter>
        <Sidebar>
          <Navbar />
          <div className="flex-1 w-full px-3 py-3 overflow-y-auto lg:px-8 lg:py-7 lg:rounded-t-md lg:border lg:border-black lg:shadow-md bg-base-300 scrollbar-hide">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/surah" element={<ListSurah />} />
              <Route path="/surah/:nomor" element={<DetailSurah />} />

              <Route path="/hadis" element={<KategoriHadis />} />
              <Route path="/hadis/:kategori" element={<ListHadis />} />
              <Route path="/detail-hadis/:id" element={<DetailHadis />} />

              <Route path="/doa-harian" element={<ListDoa />} />
              <Route path="/tasbih" element={<Tasbih />} />
              <Route path="/tahlil" element={<ListTahlil />} />
              <Route path="/asmaul-husna" element={<ListAsmaulHusna />} />
            </Routes>
          </div>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
