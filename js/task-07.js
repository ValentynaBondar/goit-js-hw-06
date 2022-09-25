const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
// inputEl.addEventListener("input", onChangeSize);
// function onChangeSize(event) {
//   textEl.style.fontSize = `${event.currentTarget.value}px`;
// }

const refEl = function () {
  textEl.style.fontSize = inputEl.value + "px";
};
refEl();

inputEl.addEventListener("input", () => {
  refEl();
});