const AVAILABLE_LANGS = ['fr','en','zh','cn','ar','hi','es','ja','de','id','it','hu','ru','ko','fil','mg'];
const DEFAULT_LANG = 'en';

function detectLang() {
  // 1. choix déjà mémorisé par l'utilisateur
  const saved = localStorage.getItem('lang');
  if (saved && AVAILABLE_LANGS.includes(saved)) return saved;

  // 2. langues du navigateur, dans l'ordre de préférence
  const browserLangs = navigator.languages || [navigator.language];
  for (const bl of browserLangs) {
    const lower = bl.toLowerCase();

    // cas particulier chinois : zh-CN -> "cn" (simplifié), zh-TW/zh-HK -> "zh" (traditionnel)
    if (lower.startsWith('zh')) {
      if (lower.includes('cn') || lower.includes('hans')) return 'cn';
      return 'zh';
    }

    const code2 = lower.split('-')[0]; // "fr-FR" -> "fr"
    if (AVAILABLE_LANGS.includes(code2)) return code2;
  }

  // 3. repli anglais
  return DEFAULT_LANG;
}

const langSwitch = document.querySelector('.lang-switch');
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
  langSwitch.classList.toggle('open');
});

document.querySelectorAll('#lang-list li').forEach(item => {
  item.addEventListener('click', () => {
    const selectedLang = item.dataset.lang;
    setLang(selectedLang);
    langSwitch.classList.remove('open');
  });
});

// Langue initiale au chargement de la page
setLang(detectLang());
