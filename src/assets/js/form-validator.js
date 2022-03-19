const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const formInputs = [username, email, password, password2];

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'pb-4 mb-3 form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'pb-4 mb-3 form-control success';
}

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getInputFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getInputFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  checkRequired(formInputs);
});
