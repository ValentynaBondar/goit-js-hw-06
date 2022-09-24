
const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

refs.input.addEventListener('input', onInputChange);


function onInputFocus() {
    console.log(' Импут получил фокус');
}

function onInputBlur() {
    console.log(' Импут потерял фокус');
}


function onInputChange(event) {
  
    refs.nameLabel.textContent = event.currentTarget.value
}



