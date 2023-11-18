const solidsList = document.querySelector('.solids__list');
const backgroundCanvas = solidsList.querySelectorAll('.Background');
backgroundCanvas.forEach((element)=>{
    element.value = '#eeeeee';
})
const canvasList = solidsList.querySelectorAll('canvas');
const solidsItem = solidsList.querySelector('.solids-item__content');

canvasList.forEach((canvas)=>{
//* window.devicePixelRatio // для ретина, но плохо крутится
  canvas.width = solidsItem.clientWidth;
  canvas.height = solidsItem.clientWidth;
})

