const switchInput = document.getElementById('switch');
const root = document.documentElement;

switchInput.addEventListener('change', function () {
  if (this.checked) {
    // Right: black mode
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--primary-label', 'white');
    root.style.setProperty('--secndary-label', 'black');
    root.style.setProperty('--white-ball', 'black');
    root.style.setProperty('--black-ball', 'white');
  } else {
    // Left: white mode
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--primary-label', 'black');
    root.style.setProperty('--secndary-label', 'white');
    root.style.setProperty('--white-ball', 'white');
    root.style.setProperty('--black-ball', 'black');
  }
});