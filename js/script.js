var button = document.querySelector(".got-this");
var modalDiv = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function(){
    modalDiv.classList.add("show-modal");
    button.innerText = "Who's got this?"
    
});

modalX.addEventListener("click", function(){
  modalDiv.classList.remove("show-modal")
  button.innerText = "Who's got this?"
});