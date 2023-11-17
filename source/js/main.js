const solidsList = document.querySelector('.solids__list');
const backgroundCanvas = solidsList.querySelectorAll('.Background');
backgroundCanvas.forEach((element)=>{
    element.value = '#eeeeee';
})
// const canvasList = solidsList.querySelectorAll('canvas');
// const solidsItem = solidsList.querySelector('.solids__item');
// window.addEventListener('resize', () => {
//     const width = solidsItem.scrollWidth;
//     console.log(width);
//     canvasList.forEach((element)=>{
//         element.setAttribute('width', width.toString());
//         element.setAttribute('height', width.toString());
//     })
// });
