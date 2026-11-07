let change_button = document.getElementById("change-button");
change_button.addEventListener("click", function(){
    let message = document.getElementById("message");
    message.textContent = "Hello! Welcome to my webpage.";
});

const colors = ["#abdee6", "#cbaacb", "#ffffb5", "#ffccb6", "#f3b0c3"];
let index = 0;

const changeColorBtn = document.getElementById("change-color");

changeColorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; 
});