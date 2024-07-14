const toggle = document.getElementById('toogle');
const menu = document.querySelector('.list');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});