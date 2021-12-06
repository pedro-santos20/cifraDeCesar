let comebackBtn = document.getElementById("comeback");

comebackBtn.addEventListener("click", () => {
  window.location = "./index.html"
});

document.getElementById("final-message").innerHTML = localStorage.message;
