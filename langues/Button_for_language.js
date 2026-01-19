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