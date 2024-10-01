let btn = document.querySelector("button");

//  ------------------------------------
btn.addEventListener("click" , function () {
    btn.style.backgroundColor = "green";
});

// -----------------------------------------
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value;
  const validNameRegex = /^[a-zA-Z ]+$/;

  if (validNameRegex.test(inputValue)) {
    nameDisplay.textContent = inputValue;
  } else {
    nameDisplay.textContent = inputValue.replace(/[^a-zA-Z ]/g, '');
  }
});






