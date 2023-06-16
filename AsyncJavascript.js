const headingOne = document.getElementById("heading_1");
const headingTwo = document.getElementById("heading_2");
const headingThree = document.getElementById("heading_3");
const Btn = document.querySelector("button");
const resetBtn = document.getElementById("resetBtn");

const changeColor = (ele, color) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ele.style.color = color;
      resolve();
    }, 1000);
  });
};

/* setTimeOut example */

// const changeHeadingsColors = () => {
//   setTimeout(() => {
//     headingOne.style.color = "red";
//     setTimeout(() => {
//       headingTwo.style.color = "green";
//       setTimeout(() => {
//         headingThree.style.color = "blue";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

/* .then concatenation example */

// const changeHeadingsColors = () => {
//   changeColor(headingOne, "red").then(() => {
//     changeColor(headingTwo, "green").then(() => {
//       changeColor(headingThree, "blue");
//     });
//   });
// };

/* async/await example */

const changeHeadingsColors = async () => {
  await changeColor(headingOne, "red");
  await changeColor(headingTwo, "green");
  await changeColor(headingThree, "blue");
};

const resetColor = () => {
  const allHeadings = [headingOne, headingTwo, headingThree];
  allHeadings.forEach((heading) => {
    heading.style.color = "black";
  });
};

Btn.addEventListener("click", changeHeadingsColors);
resetBtn.addEventListener("click", resetColor);
