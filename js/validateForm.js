// Pegar todos os inputs:
const form = document.querySelector("[data-form]");


const validityForm = (event) => {
  const fields = document.querySelectorAll("[data-field]");

  fields.forEach(field => {
    const type = field.dataset.field;
    
    if(validators[type]){
      validators[type](field);
    }
  })
  event.preventDefault();
} 

const validators = {
  firstName: input => validateFirstName(input),
  lastName: input => validateLastName(input),
  email: input => validateEmail(input),
  password: input => validatePassword(input)
}

const validateFirstName = (input) =>{
  if(!input.value){
    formError(input, "valueMissing");
  } 
  else {
    formSuccess(input);
  }
}

const validateLastName = (input) =>{
  if(!input.value){
    formError(input, "valueMissing");
  }
  else {
    formSuccess(input);
  }
}

const validateEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!input.value){
    formError(input, "valueMissing");
  }
  else if(!re.test(input.value)){
    formError(input, "typeMismatch");
  } 
  else {
    formSuccess(input);
  }
}

const validatePassword = (input) => {
  if(!input.value){
    formError(input, "valueMissing");
  }
  else if(input.value.length < 8){
    formError(input, "patternMismatch");
  }
  else {
    formSuccess(input);
  }
}

const formError = (input, typeError) =>{
  const fieldGroup = input.parentElement;
  const errorMessage = fieldGroup.querySelector(".error-message");
  const type = input.dataset.field;

  fieldGroup.classList.add("error");
  errorMessage.innerText = messageError[type][typeError];
  input.classList.add("error");
}

const formSuccess = (input) => {
  const formGroup = input.parentElement;
  const messageError = formGroup.querySelector("messageError");
  formGroup.classList.remove("error");
  messageError.style.visibility = "hidden";
  input.classList.remove("error");
  input.classList.add("success");
}

const messageError = {
  firstName: {
    valueMissing: "First Name can not be empty"
  },
  lastName: {
    valueMissing: "Last Name can not be empty",
  },
  
  email: {
    valueMissing: "Email Address can not be empty",
    typeMismatch: "Look like this is not a email"
  },
  password:{
    valueMissing: "Password can not be empty",
    patternMismatch: "Password must have at least 8 characters"
  }
}

form.addEventListener("submit", validityForm);

// (() => {
//   const form = document.querySelector("[data-form]");
//   const firstName = document.querySelector("[data-field=firstName]");
//   const lastName = document.querySelector("[data-field=lastName]");
//   const email = document.querySelector("[data-field=email]");
//   const password = document.querySelector("[data-field=password]");

//   const validateForm = (e) => {
//     const firstNameValue = firstName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//     if (firstNameValue === "") {
//       errorForm(firstName, "First Name can not be empty", e);
//     }

//     if (lastNameValue === "") {
//       errorForm(lastName, "Last Name can not be empty", e);
//     }

//     if (emailValue === "") {
//       email.placeholder = "email@example/com";
//       errorForm(email, "Email Address can not be empty", e);
//     } else if (!re.test(emailValue)) {
//       errorForm(email, "Look like this is not a email", e);
//     }

//     if (passwordValue === "") {
//       errorForm(password, "Password can not be empty", e);
//     }
//   }
//   const errorForm = (input, fieldName, e) => {
//     const fieldGroup = input.parentElement;
//     const errorMessage = fieldGroup.querySelector(".error-message");


//     fieldGroup.className = "form__group error";
//     input.className = "form__input error";
//     errorMessage.innerText = `${fieldName}`;
//     e.preventDefault();
//   }
//   form.addEventListener("submit", validateForm);
// }
// )()
