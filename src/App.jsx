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
              <Route path="/pocket-muslim-app" element={<Home />} />

              <Route path="/pocket-muslim-app/surah" element={<ListSurah />} />
              <Route
                path="/pocket-muslim-app/surah/:nomor"
                element={<DetailSurah />}
              />
              <Route
                path="/pocket-muslim-app/hadis"
                element={<KategoriHadis />}
              />
              <Route
                path="/pocket-muslim-app/list-hadis/:kategori"
                element={<ListHadis />}
              />
              <Route
                path="/pocket-muslim-app/detail-hadis/:id"
                element={<DetailHadis />}
              />
              <Route
                path="/pocket-muslim-app/doa-harian"
                element={<ListDoa />}
              />
              <Route path="/pocket-muslim-app/tasbih" element={<Tasbih />} />
              <Route
                path="/pocket-muslim-app/tahlil"
                element={<ListTahlil />}
              />
              <Route
                path="/pocket-muslim-app/asmaul-husna"
                element={<ListAsmaulHusna />}
              />
            </Routes>
          </div>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
