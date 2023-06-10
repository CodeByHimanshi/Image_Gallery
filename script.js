let bigImg = document.querySelector(".full-img");
var fullImg = document.getElementById('fullImg');
var allImg = document.getElementsByClassName("galleryImage");

function zoomImg(pic) {
  bigImg.style.display = "block";
  fullImg.src = pic;
}

var rightArrow = document.createElement('span');
bigImg.appendChild(rightArrow);
rightArrow.setAttribute("id", "right");

var leftArrow = document.createElement('span');
bigImg.appendChild(leftArrow);
leftArrow.setAttribute("id", "left");

const right = document.getElementById("right");
const left = document.getElementById("left");

const imageArray = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg"
];

right.addEventListener("click", () => {
  for (var i = 0; i < imageArray.length; i++) {
    if (fullImg.src.endsWith(imageArray[i])) {
      if (i === imageArray.length - 1) {
        fullImg.src = imageArray[0];
      } else {
        fullImg.src = imageArray[i + 1];
      }
      break;
    }
  }
});

left.addEventListener("click", () => {
  for (var i = 0; i < imageArray.length; i++) {
    if (fullImg.src.endsWith(imageArray[i])) {
      if (i === 0) {
        fullImg.src = imageArray[imageArray.length - 1];
      } else {
        fullImg.src = imageArray[i - 1];
      }
      break;
    }
  }
});

function closeImg() {
  bigImg.style.display = "none";
}
