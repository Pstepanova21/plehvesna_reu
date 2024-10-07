export const validateForm = (form) => {
  let isValid = true;
  const inputs = form.querySelectorAll(".input-field");

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      isValid = false;
      showError(input, "Это поле обязательно для заполнения");
    } else {
      input.classList.remove("error");
      clearError(input);
    }
  });

  return isValid;
};

const showError = (input, message) => {
  let errorMessage = input.nextElementSibling;

  if (!errorMessage || !errorMessage.classList.contains("error-message")) {
    errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
  }

  errorMessage.textContent = message;
};

const clearError = (input) => {
  const errorMessage = input.nextElementSibling;

  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.remove();
  }
};
