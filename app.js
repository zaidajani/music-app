let path = document.querySelectorAll(".path2");
let music = document.querySelectorAll(".audio");
let indicator = document.getElementById("para");
let color = ["red", "orange", "green", "yellow", "skyblue", "blue"];

path.forEach((tiger, index) => {
  tiger.addEventListener("click", function () {
    music[index].currentTime = 0;
    music[index].play();
    indicator.innerText = color[index];
    indicator.style.color = color[index];
  });
});