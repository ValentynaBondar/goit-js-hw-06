
// const refs = {
//     input: document.querySelector('#name-input'),
//     nameLabel: document.querySelector('#name-output')
// };
// refs.input.addEventListener('input', onInputChange);
// function onInputFocus() {
//     console.log(' Импут получил фокус');
// }
// function onInputBlur() {
//     console.log(' Импут потерял фокус');
// }
// function onInputChange(event) { 
//     refs.nameLabel.textContent = event.currentTarget.value
// }

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  inputRef.value === ""
    ? (spanRef.textContent = "Anonymous")
    : (spanRef.textContent = inputRef.value);
});
