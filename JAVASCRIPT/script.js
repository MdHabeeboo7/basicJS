let but = document.querySelector("button");
but.addEventListener("click", show);
function show() {
  alert("hello world!!!");
}
let but1 = document.querySelector("button.a1");
but1.addEventListener("click", inputMsg);
function inputMsg() {
  let name = prompt("Update Name Here");
  but1.textContent = "The Updated Name:" + name;
}
