var button = document.querySelector(".got-this");
var modalDiv = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function(){
    modalDiv.classList.add("show-modal");
    button.innerText = "You got this?"
    
});

modalX.addEventListener("click", function(){
  modalDiv.classList.remove("show-modal")
  button.innerText = "Who's got this?"
});

document.addEventListener("keydown", function(e){
  if (e.key === "Escape"){
    if (modalDiv.classList.contains("show-modal")){
      modalDiv.classList.remove("show-modal")
      button.innerText = "Who's got this?"
    } 
    else {
      modalDiv.classList.add("show-modal");
      button.innerText = "You got this?"
    };
  }
})

