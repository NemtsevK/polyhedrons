const solidsList = document.querySelector('.solids__list');
const backgroundCanvas = solidsList.querySelectorAll('.solid__background');
backgroundCanvas.forEach((element) => {
  element.value = '#f6f6f6';
})
const canvasList = solidsList.querySelectorAll('.solid__canvas');
const solidsItem = solidsList.querySelector('.solid__content');

canvasList.forEach((canvas) => {
//* window.devicePixelRatio // для ретина, но плохо крутится
  canvas.width = solidsItem.clientWidth;
  canvas.height = solidsItem.clientWidth;
})

