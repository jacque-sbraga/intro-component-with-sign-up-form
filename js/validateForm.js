function checkInput(event) {
  const input = event.target;
  if (input.validity.valid) {
    formSuccess(input);
  } else {
    formError(input);
  }
}

function formSuccess(input) {
  const fieldGroup = input.parentElement;

  fieldGroup.classList.remove("error");
  input.classList.remove("error");
  input.classList.add("success");
}

function formError(input) {
  const fieldGroup = input.parentElement;
  const errorMessage = fieldGroup.querySelector(".error-message");
  const type = input.dataset.field;

  fieldGroup.classList.add("error");
  
  errorMessage.innerText = messageError(type, input);
  
  input.classList.remove("success");
  input.classList.add("error");
}

function messageError(type, input) {
  let description = "";

  typeErrors.forEach(error => {
    if(input.validity[error]){
      description = errorDescription[type][error];
    }
  })
  return description;
}

const typeErrors = [
  "valueMissing",
  "typeMismatch"
]

const errorDescription = {
  firstName: {
    valueMissing: "First Name can not be empty",
  },
  lastName: {
    valueMissing: "Last Name can not be empty",
  },

  email: {
    valueMissing: "Email Address can not be empty",
    typeMismatch: "Look like this is not a email",
  },
  password: {
    valueMissing: "Password can not be empty",
  },
};

const inputs = document.querySelectorAll("[data-field]");
inputs.forEach((input) => {
  input.addEventListener("blur", checkInput);
});