const selectors = {
  inputField: document.getElementById("result-container"),
  mainButtonDiv: document.querySelector(".btn-main-container"),
};

let currentInput = "";

selectors.mainButtonDiv.addEventListener("click", (event) => {
  const triggeredButton = event.target.closest(".btn");
  if (!triggeredButton) return;
  selectors.inputField.value = triggeredButton.getAttribute("data-input");

  const value = triggeredButton.getAttribute("data-input");

  if (value === "AC") {
    currentInput = "";
  } else if (value === "DEL") {
    currentInput = currentInput.slice(0, -1);
  } else if (value === "=") {
    try {
      const expression = currentInput.replace(/%/g, "/100");
      //g = replace all occurences
      currentInput = String(eval(expression));
    } catch {
      currentInput = "Error";
    }
  } else {
    currentInput += value;
  }

  selectors.inputField.value = currentInput;
});
