var button = document.querySelector(".got-this");
var modalDiv = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

var openModel = function () {
  modalDiv.classList.add("show-modal");
  button.innerText = "You got this?";
};

button.addEventListener("click", function () {
  openModel();
  // modalDiv.classList.add("show-modal");
  // button.innerText = "You got this?";
});

var closeModal = function () {
  modalDiv.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (modalDiv.classList.contains("show-modal")) {
      closeModal();
      // modalDiv.classList.remove("show-modal")
      // button.innerText = "Who's got this?"
    } else {
      openModel();
      // modalDiv.classList.add("show-modal");
      // button.innerText = "You got this?";
    }
  }
});
