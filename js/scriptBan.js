let activeElement = 0;
const timeChange = 4000;

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

const colorImages = ['img/banSlider/s1.png', 'img/banSlider/r2.png', 'img/banSlider/s3.png'];
const grayImages = ['img/banSlider/s1a.png', 'img/banSlider/r2a.png', 'img/banSlider/s3a.png'];
const names = ['Anna Bugart', 'Robert Partyka', 'Arek Pawłowicz'];
const profesions = ['Programistka JS', 'Front-End Developer', 'UX i UI Designer'];

function changeElement() {
   activeElement++;
   if (activeElement >= colorImages.length) {
      activeElement = 0;
   }

   colorImgHtml.src = colorImages[activeElement];
   grayImgHtml.src = grayImages[activeElement];
   h1Html.textContent = names[activeElement];
   h2Html.textContent = profesions[activeElement];
   console.log("aut wywoł");
}

setInterval(changeElement, timeChange)

