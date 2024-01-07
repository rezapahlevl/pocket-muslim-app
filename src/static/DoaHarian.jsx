const doaHarian = [
  {
    id: 1,
    title: "Doa Bangun Tidur",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    latin: "Alhamdulillahillazi ahyana ba'da ma amatana wa ilaihinnusyur.",
    indonesia:
      "Segala puji bagi Allah yang menghidupkan kami setelah mati, dan hanya kepada-Nya kita akan kembali.",
  },
  {
    id: 2,
    title: "Doa Masuk Kamar Mandi",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    latin: "Allahumma inni a'udzubika minal khubutsi wal khabaaitsi.",
    indonesia:
      "Ya Allah, aku berlindung kepada-Mu dari godaan syetan yang terkutuk dan setan-setan yang jahat.",
  },
  {
    id: 3,
    title: "Doa Keluar Kamar Mandi",
    arabic:
      "غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي",
    latin: "Ghufranakalhamdulillahillazi adzhaba 'annil adza waa'fani.",
    indonesia:
      "Aku memohon ampunan-Mu, segala puji bagi Allah yang telah menghilangkan kesusahan dariku dan telah menyembuhkanku.",
  },
  {
    id: 4,
    title: "Doa Sebelum Berpakaian",
    arabic: "بِسْمِ اللَّهِ",
    latin: "Bismillah, wala haula wala quwwata illa billah.",
    indonesia:
      "Dengan nama Allah, tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.",
  },
  {
    id: 5,
    title: "Doa Setelah Berpakaian",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي مَا أُوَارِي بِهِ عَوْرَتِي وَأَتَجَمَّلُ بِهِ عِنْدَ رَبِّي",
    latin:
      "Alhamdulillahillazi kasaani maa uwaari bihi 'awraati wa atajammalu bihi 'inda Rabbi.",
    indonesia:
      "Segala puji bagi Allah yang telah memberi pakaian untuk menutupi auratku dan yang telah menghiasiku di hadapan Rabbku.",
  },
  {
    id: 6,
    title: "Doa Sebelum Makan",
    arabic: "بِسْمِ اللَّهِ",
    latin: "Bismillah.",
    indonesia: "Dengan nama Allah.",
  },
  {
    id: 7,
    title: "Doa Setelah Makan",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
    latin: "Alhamdulillahillazi at'amana wasqana waja'alana minal muslimin.",
    indonesia:
      "Segala puji bagi Allah yang memberi kami makan dan minum, dan menjadikan kami dari kalangan orang-orang Muslim.",
  },
  {
    id: 8,
    title: "Doa Pagi",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ",
    latin: "Bismillahirrahmanirrahim. Qul huwa Allahu ahad.",
    indonesia:
      "Dengan nama Allah, Yang Maha Pengasih, Maha Penyayang. Katakanlah, Dia Allah yang Maha Esa.",
  },
  {
    id: 9,
    title: "Doa Sebelum Beraktivitas",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
    latin: "Bismillahi tawakkaltu 'ala Allah.",
    indonesia: "Dengan nama Allah, aku bertawakal kepada Allah.",
  },
  {
    id: 10,
    title: "Doa Ketika Hendak Belajar",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    latin: "Rabbi zidni 'ilma.",
    indonesia: "Ya Allah, tambahkanlah aku ilmu.",
  },
  {
    id: 11,
    title: "Doa Pergi dan Pulang",
    arabic:
      "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin:
      "Bismillahi tawakkaltu 'ala Allah, wa la hawla wa la quwwata illa billah.",
    indonesia:
      "Dengan nama Allah, aku bertawakal kepada Allah, tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.",
  },
  {
    id: 12,
    title: "Doa Ketika Hendak Tidur Siang",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    latin: "Bismillahirrahmanirrahim.",
    indonesia: "Dengan nama Allah, Yang Maha Pengasih, Maha Penyayang.",
  },
  {
    id: 13,
    title: "Doa Petang",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ",
    latin: "Bismillahirrahmanirrahim. Qul huwa Allahu ahad.",
    indonesia:
      "Dengan nama Allah, Yang Maha Pengasih, Maha Penyayang. Katakanlah, Dia Allah yang Maha Esa.",
  },
  {
    id: 14,
    title: "Doa Sebelum Menyantap Makan Malam",
    arabic: "بِسْمِ اللَّهِ",
    latin: "Bismillah.",
    indonesia: "Dengan nama Allah.",
  },
  {
    id: 15,
    title: "Doa Malam",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    latin: "Qul huwa Allahu ahad.",
    indonesia: "Katakanlah, Dia Allah yang Maha Esa.",
  },
  {
    id: 16,
    title: "Doa Sebelum Tidur",
    arabic: "بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    latin: "Bismikallahumma amuutu wa ahya.",
    indonesia: "Dengan nama-Mu, ya Allah, aku mati dan aku hidup.",
  },
  {
    id: 17,
    title: "Doa Penghapus Kesalahan",
    arabic: "أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ",
    latin: "Astaghfirullah Rabbi min kulli dhanbin wa atuubu ilaih.",
    indonesia:
      "Aku memohon ampun kepada Allah, Tuhanku, dari segala dosa dan aku bertaubat kepada-Nya.",
  },
  {
    id: 18,
    title: "Doa Perlindungan dari Jahannam",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ النَّارِ وَمِنْ عَذَابِ الْقَبْرِ",
    latin: "Allahumma innii a'udzubika minan naar wa min 'adzaabil qabr.",
    indonesia:
      "Ya Allah, aku berlindung kepada-Mu dari api neraka dan dari siksa kubur.",
  },
  {
    id: 19,
    title: "Doa Perlindungan dari Syetan",
    arabic:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    latin:
      "A'udhu bikalimatillahit-taammati min kulli syaithanin wahammatin wa min kulli 'ainin lammah.",
    indonesia:
      "Aku berlindung dengan kalimat-kalimat Allah yang sempurna, dari setiap syaitan dan binatang melata, serta dari setiap pandangan mata yang hasad.",
  },
  {
    id: 20,
    title: "Doa Perlindungan untuk Anak",
    arabic:
      "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    latin:
      "A'uizukuma bikalimatillahit-taammati min kulli syaithanin wahammatin wa min kulli 'ainin lammah.",
    indonesia:
      "Aku berlindungkan kalian berdua dengan kalimat-kalimat Allah yang sempurna, dari setiap syaitan dan binatang melata, serta dari setiap pandangan mata yang hasad.",
  },
  {
    id: 21,
    title: "Doa Sebelum Bekerja",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    latin:
      "Allahumma innii as-aluka 'ilman naafi'an wa rizqan thayyiban wa 'amalan mutaqabbalan.",
    indonesia:
      "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.",
  },
  {
    id: 22,
    title: "Doa Ketika Mendengar Adzan",
    arabic:
      "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    latin:
      "Allahumma rabba hadhihid-da'watit-taammati wassalatil-qaaimati aati Muhammadan al-waseelata wal-fadheelata wab'ath-hu maqaman mahmoodan allathee wa'adtahu.",
    indonesia:
      "Ya Allah, Tuhan pemilik seruan yang sempurna ini dan shalat yang didirikan, berilah Muhammad kedudukan wasilah dan keutamaan, dan bangkitkanlah dia pada hari kiamat dengan kedudukan terpuji yang telah Engkau janjikan kepadanya.",
  },
  {
    id: 23,
    title: "Doa Khusus di Akhir Hari",
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    latin:
      "Allahumma bika amsaina wa bika ash-bahna wa bika nahya wa bika namutu wa ilaikal-mashiir.",
    indonesia:
      "Ya Allah, dengan-Mu kami menjalani waktu petang, dengan-Mu kami memasuki waktu pagi, dengan-Mu kami hidup, dengan-Mu kami mati, dan kepada-Mu kami kembali.",
  },
  {
    id: 24,
    title: "Doa Memohon Perlindungan dari Fitnah Dajjal",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    latin:
      "Allahumma innii a'udzubika min 'adzabil jahannama wa min 'adzabil qabri wa min fitnatil mahyaa wal-mamaati wa min fitnatil masihid-dajjal.",
    indonesia:
      "Ya Allah, aku berlindung kepada-Mu dari siksa neraka Jahannam, siksa kubur, fitnah kehidupan dan mati, dan fitnah Al-Masih Ad-Dajjal.",
  },
  {
    id: 25,
    title: "Doa Memohon Keselamatan di Dunia dan Akhirat",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin:
      "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adzaban-naar.",
    indonesia:
      "Ya Tuhan kami, berikanlah kami kebaikan di dunia ini dan kebaikan di akhirat, dan peliharalah kami dari siksa api neraka.",
  },
  {
    id: 26,
    title: "Doa Sebelum Bercermin",
    arabic: "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    latin: "Allahumma kama hasanta kholqi fahassin khuluqi.",
    indonesia:
      "Ya Allah, sebagaimana Engkau telah menciptakan rupaku dengan indah, maka sempurnakanlah akhlakku.",
  },
  {
    id: 27,
    title: "Doa Memohon Ilmu yang Bermanfaat",
    arabic:
      "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي",
    latin: "Allahumma infa'nii bima 'allamtanii wa 'allimnii maa yanfa'unii.",
    indonesia:
      "Ya Allah, manfaatkanlah aku dengan ilmu yang Engkau ajarkan padaku, dan ajarkanlah padaku apa yang bermanfaat bagiku.",
  },
  {
    id: 28,
    title: "Doa Memohon Perlindungan dari Syetan",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    latin: "A'udhu bikalimatillahit-tammati min syarri maa khalaq.",
    indonesia:
      "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakan-Nya.",
  },
  {
    id: 29,
    title: "Doa Memohon Hidayah dan Taufiq",
    arabic:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
    latin:
      "Rabbanaa laa tuzigh quluubanaa ba'da idz hadaytanaa wahab lanaa mil ladunka rahmah innaka antal Wahhaab.",
    indonesia:
      "Ya Tuhan kami, janganlah Engkau jadikan hati kami condong sesat setelah Engkau beri petunjuk, dan karuniakanlah rahmat dari sisi-Mu, karena sesungguhnya Engkau-lah Yang Maha Pemberi.",
  },
  {
    id: 30,
    title: "Doa Memohon Kesehatan dan Keselamatan",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    latin:
      "Allahumma innii as-aluka al-'afwa wal-'aafiyata fiid-dunya wal-aakhirah.",
    indonesia:
      "Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan di dunia dan akhirat.",
  },
  {
    id: 31,
    title: "Doa Ketika Hujan",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    latin: "Allahumma sayyiban naafi'an.",
    indonesia: "Ya Allah, hujanlah yang bermanfaat.",
  },
  {
    id: 32,
    title: "Doa Ketika Mendengar Petir",
    arabic:
      "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    latin:
      "Subhanallazii sya'qas samawaati wal ard wa idzaa 'azamal amrufa la yarusyu lahuu illa bi idznihi.",
    indonesia:
      "Maha suci Allah yang petir bertasbih dengan memuji-Nya dan para malaikat karena takut kepada-Nya.",
  },
  {
    id: 33,
    title: "Doa Ketika Melihat Angin Kencang",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ",
    latin:
      "Allahumma innii as-aluka khairaha wa khaira maa fiha wa khaira maa ur-silat bihi.",
    indonesia:
      "Ya Allah, aku memohon kepada-Mu kebaikannya, kebaikan yang ada di dalamnya, dan kebaikan yang diutus dengan hujan ini.",
  },
  {
    id: 34,
    title: "Doa Ketika Melihat Bulan Baru",
    arabic:
      "اللَّهُمَّ أَحِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَىٰ",
    latin:
      "Allahumma ahillahu 'alaina bil-amni wal-imaan was-salamati wal-islam wa'thmati minar-rizqi wal-afiyati fii syahri hadza wa fi kulli waqtin.",
    indonesia:
      "Ya Allah, bukakanlah pintu rezeki, keamanan, iman, keselamatan, Islam, dan berkah pada kita di bulan ini dan setiap waktu.",
  },
  {
    id: 35,
    title: "Doa Ketika Melihat Orang Sakit",
    arabic: "لا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
    latin: "La ba'sa tahurun insya Allah.",
    indonesia: "Tidak apa-apa, semoga suci, jika Allah menghendaki.",
  },
  {
    id: 36,
    title: "Doa Ketika Berpergian",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
    latin: "Bismillahi tawakkaltu 'ala Allah.",
    indonesia: "Dengan nama Allah, aku bertawakal kepada Allah.",
  },
  {
    id: 37,
    title: "Doa Ketika Masuk dan Keluar Rumah",
    arabic:
      "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin:
      "Bismillahi tawakkaltu 'ala Allah, wa la hawla wa la quwwata illa billah.",
    indonesia:
      "Dengan nama Allah, aku bertawakal kepada Allah, tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.",
  },
  {
    id: 38,
    title: "Doa Ketika Bercerita dan Mendengar Cerita yang Baik",
    arabic:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
    latin:
      "Rabbanaa laa tuzigh quluubanaa ba'da idz hadaytanaa wahab lanaa mil ladunka rahmah innaka antal Wahhaab.",
    indonesia:
      "Ya Tuhan kami, janganlah Engkau jadikan hati kami condong sesat setelah Engkau beri petunjuk, dan karuniakanlah rahmat dari sisi-Mu, karena sesungguhnya Engkau-lah Yang Maha Pemberi.",
  },
  {
    id: 39,
    title: "Doa Ketika Mimpi Buruk",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ وَمِنْ شَرِّ مَا رَأَيْتُ",
    latin: "A'uudhu billahi minas syaithaani wa min syarri maa ro-aitu.",
    indonesia:
      "Aku berlindung kepada Allah dari godaan syaitan dan dari kejahatan apa yang aku lihat.",
  },
  {
    id: 40,
    title: "Doa Ketika Menerima Kabar Gembira",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    latin: "Alhamdulillahi llatii bini'matihi tatimmus shalaahat.",
    indonesia:
      "Segala puji bagi Allah yang dengan nikmat-Nya segala kebaikan dapat sempurna.",
  },
  {
    id: 41,
    title: "Doa Ketika Mendengar Kabar Buruk",
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    latin: "Inna lillahi wa inna ilaihi raaji'un.",
    indonesia:
      "Sesungguhnya kita adalah milik Allah dan kepada-Nya kita kembali.",
  },
];
export default doaHarian;
