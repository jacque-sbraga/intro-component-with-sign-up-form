(() => {
  const form = document.querySelector("[data-form]");
  const firstName = document.querySelector("[data-field=firstName]");
  const lastName = document.querySelector("[data-field=lastName]");
  const email = document.querySelector("[data-field=email]");
  const password = document.querySelector("[data-field=password]");

  const validateForm = (e) => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (firstNameValue === "") {
      errorForm(firstName, "First Name can not be empty", e);
    }

    if (lastNameValue === "") {
      errorForm(lastName, "Last Name can not be empty", e);
    }

    if (emailValue === "") {
      email.placeholder = "email@example/com";
      errorForm(email, "Email Address can not be empty", e);
    } else if (!re.test(emailValue)) {
      errorForm(email, "Look like this is not a email", e);
    }

    if (passwordValue === "") {
      errorForm(password, "Password can not be empty", e);
    }
  }
  const errorForm = (input, fieldName, e) => {
    const fieldGroup = input.parentElement;
    const errorMessage = fieldGroup.querySelector(".error-message");


    fieldGroup.className = "form__group error";
    input.className = "form__input error";
    errorMessage.innerText = `${fieldName}`;
    e.preventDefault();
  }
  form.addEventListener("submit", validateForm);
}
)()
