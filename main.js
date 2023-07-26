var r = document.querySelector(':root');

function ChangeRandom() {
  r.style.setProperty('--random-dir', Math.round(Math.random()) == 0 ? -1 : 1);
}
