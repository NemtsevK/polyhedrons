const DEFAULT_BACKGROUND = '#f6f6f6';

const solidsList = document.querySelector('.solids__list');
const backgroundCanvas = solidsList.querySelectorAll('.solid__background');
const canvasList = solidsList.querySelectorAll('.solid__canvas');
const solidsItem = solidsList.querySelector('.solid__content');

backgroundCanvas.forEach((element) => {
  element.value = DEFAULT_BACKGROUND;
})

canvasList.forEach((canvas) => {
//* window.devicePixelRatio // для ретина, но плохо крутится
  canvas.width = solidsItem.clientWidth;
  canvas.height = solidsItem.clientWidth;
})

