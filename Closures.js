// A closure is a function bundled with its lexical environment

function Outer(buttonName) {
  let count = 0;

  return function createBtn() {
    const btn = document.createElement("button");
    btn.textContent = buttonName;
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
      alert(++count);
    });
  };
}

const btn1 = Outer("Button 1");
btn1();
const btn2 = Outer("Button 2");
btn2();
console.dir(btn1);
console.dir(btn2);
