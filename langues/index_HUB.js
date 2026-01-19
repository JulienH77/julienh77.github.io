		const translations = {
			fr: {
				tab_title: "Julien Houziaux | Projets",
				name: "Julien Houziaux",
				subtitle: "Projets de cartographie et sites webs interactifs",

				nav_album: "Album",
				nav_trip: "Trajets",
				nav_cartography: "Cartographie",
				nav_photogrammetry: "Photogrammétrie",
				nav_guessr: "Guessr",
				nav_dataviz2024: "Dataviz 2024",
				nav_dataviz2025: "Dataviz 2025",

				badge_phare: "Projet phare",
				badge_heart: "Projet de cœur",		
				
				project_album_title: "Album Vacances",
				album_desc: "Carte interactive et photos de mes voyages à partir de 2025.",

				project_trip_title: "Trajets Vacances",
				trip_desc: "Visualisation animée de mes trajets et moyens de transport.",
					
				project_cartography_title: "Cartographie",
				cartography_desc: "Cartes thématiques réalisées avec QGIS et Wonderdraft.",
				
				project_photogra_title: "Photogrammétrie",
				photogra_desc: "Modèles 3D de monuments et idées de musée virtuel.",

				project_guessr_title: "Haute-Marne Guessr",
				guessr_desc: "Mini jeu façon GeoGuessr limité à la Haute-Marne.",

				project_dataviz24_title: "Concours Dataviz 2024",
				dataviz24_desc: "Carte interactive prod/cons d’électricité du Grand Est.",

				project_dataviz25_title: "Concours Dataviz 2025",
				dataviz25_desc: "Carte interactive sur les oiseaux du Grand Est.",

				see_project: "Voir le projet →",
				play: "Jouer →",
				footer: "© 2025 Julien Houziaux — Seulement par pur amusement",
			},

			en: {
				tab_title: "Julien Houziaux | Projects",
				name: "Julien Houziaux",
				subtitle: "Cartography projects and interactive websites",

				nav_album: "Album",
				nav_trip: "Trips",
				nav_cartography: "Cartography",
				nav_photogrammetry: "Photogrammetry",
				nav_guessr: "Guessr",
				nav_dataviz2024: "Dataviz 2024",
				nav_dataviz2025: "Dataviz 2025",

				badge_phare: "Featured project",
				badge_heart: "Favorite project",

				project_album_title: "Holiday Album",
				album_desc: "Interactive map and photos from my travels since 2025.",

				project_trip_title: "Holiday Journeys",
				trip_desc: "Animated visualization of my journeys and means of transport.",

				project_cartography_title: "Mapping",
				cartography_desc: "Thematic maps created with QGIS and Wonderdraft.",

				project_photogra_title: "Photogrammetry",
				photogra_desc: "3D models of monuments and virtual museum concepts.",

				project_guessr_title: "Haute-Marne Guessr",
				guessr_desc: "Mini game in the style of GeoGuessr, limited to Haute-Marne.",

				project_dataviz24_title: "Dataviz Competition 2024",
				dataviz24_desc: "Interactive map of electricity prod/cons in the Grand Est region.",

				project_dataviz25_title: "Dataviz Competition 2025",
				dataviz25_desc: "Interactive map of birds in the Grand Est region.",

				see_project: "View project →",
				play: "Play →",
				footer: "© 2025 Julien Houziaux — Just for fun",
			},

			zh: {
				tab_title: "Julien Houziaux | 項目",
				name: "Julien Houziaux",
				subtitle: "地圖項目與互動網站",

				nav_album: "相簿",
				nav_trip: "路線",
				nav_cartography: "地圖",
				nav_photogrammetry: "攝影測量",
				nav_guessr: "猜測",
				nav_dataviz2024: "2024年資料視覺化",
				nav_dataviz2025: "2025年資料視覺化",

				badge_phare: "旗艦項目",
				badge_heart: "熱情項目",		
				
				project_album_title: "度假相簿",
				album_desc: "從2025年開始的我的旅行互動地圖和照片。",

				project_trip_title: "度假行程",
				trip_desc: "我的路線和交通方式的動畫視覺化。",
					
				project_cartography_title: "地圖繪製",
				cartography_desc: "使用 QGIS 和 Wonderdraft 建立的專題地圖。",
				
				project_photogra_title: "攝影測量",
				photogra_desc: "紀念碑的 3D 模型和虛擬博物館的構想。",

				project_guessr_title: "上馬恩省猜謎遊戲",
				guessr_desc: "僅限上馬恩省的 GeoGuessr 風格的小遊戲。",

				project_dataviz24_title: "2024 年資料視覺化競賽",
				dataviz24_desc: "大東部地區電力生產/消費的互動式地圖。",

				project_dataviz25_title: "2025 年資料視覺化競賽",
				dataviz25_desc: "法國大東部地區鳥類互動地圖。(區域)。",

				see_project: "檢視項目 →",
				play: "播放 →",
				footer: "© 2025 Julien Houziaux — 僅供娛樂",
			}
		};

// vérifie si l'utilisateur a déjà choisi une langue
const savedLang = localStorage.getItem("lang");

// récupère la langue du navigateur
const browserLang = navigator.language.slice(0, 2);

// décide quelle langue utiliser au chargement
const lang = savedLang || (translations[browserLang] ? browserLang : "fr");

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = translations[lang].tab_title;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function setLang(newLang) {
  if (!translations[newLang]) return; // sécurité
  localStorage.setItem("lang", newLang); // mémorise
  applyTranslations(newLang);           // applique
  langBtn.textContent = newLang.toUpperCase(); // change texte du bouton
}

applyTranslations(lang);   // traduit la page au chargement
langBtn.textContent = lang.toUpperCase(); // affiche la bonne langue dans le bouton
