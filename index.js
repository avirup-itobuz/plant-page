const plantsCollectionScroll = document.getElementById(
  "plants-collection-scroll"
);
const plant = document.getElementsByClassName("plants")[0];
const plantsCollectionLeft = document.getElementById("plant-collection-left");
const plantsCollectionRight = document.getElementById("plant-collection-right");
const width = plant.clientWidth + 25;
plantsCollectionLeft.addEventListener("click", () => {
  plantsCollectionScroll.scrollBy(width, 0);
});
plantsCollectionRight.addEventListener("click", () => {
  plantsCollectionScroll.scrollBy(-width, 0);
});

// clients
let translate = 20;
const clientsWrapper = document.getElementById("clients-wrapper");

function nextClient() {
  console.log("clicked");
  translate = translate - 75;
  clientsWrapper.style.transform = `translateX(${translate}%)`;
}
function firstClient() {
  console.log("clicked");
  translate = 20;
  clientsWrapper.style.transform = `translateX(${translate}%)`;
}
//hero

const carouselWrapper = document.getElementById("carousel-wrapper");

const leftCarousel = document.getElementById("left-carousel");
const rightCarousel = document.getElementById("right-carousel");

let carouselCount = 0;

const heroCarouselData = [
  { link: "assets/hero/potPlant.png" },
  { link: "assets/hero/leaf.webp" },
  { link: "assets/hero/potPlant.png" },
  { link: "assets/hero/leaf.webp" },
];

function generateCarousel() {
  heroCarouselData.forEach((ele, index) => {
    const carouselPicture = document.createElement("div");
    carouselPicture.classList.add("carousel-picture", "w-75");
    carouselPicture.setAttribute("id", `carousel-${index}`);
    const image = document.createElement("img");
    image.classList.add("w-100", "h-100");
    image.setAttribute("alt", "image");
    image.setAttribute("src", ele.link);
    carouselPicture.appendChild(image);
    carouselWrapper.appendChild(carouselPicture);
  });
}
generateCarousel();
const carousel0 = document.getElementById("carousel-0");
const carousel1 = document.getElementById("carousel-1");
const carousel2 = document.getElementById("carousel-2");
const carousel3 = document.getElementById("carousel-3");

const progressBar = document.getElementsByClassName("progress-bar")[0];

function resetSize() {
  carousel0.style.transform = "scale(1)";
  carousel0.style.margin = "0";
  carousel0.style.zIndex = "1";
  carousel1.style.transform = "scale(1)";
  carousel1.style.margin = "0";
  carousel1.style.zIndex = "1";
  carousel2.style.transform = "scale(1)";
  carousel2.style.margin = "0";
  carousel2.style.zIndex = "1";
  carousel3.style.transform = "scale(1)";
  carousel3.style.margin = "0";
  carousel3.style.zIndex = "1";
  // console.log(carouselWrapper.children);
  // for (let i = 0; i < carouselWrapper.children; i++) {
  //   carouselWrapper.children[i].style.transform = "scale(1)";
  //   carouselWrapper.children[i].style.margin = "0";
  //   carouselWrapper.children[i].style.zIndex = "1";
  // }
}

leftCarousel.addEventListener("click", () => {
  if (carouselCount <= 0) carouselCount = 4;
  carouselWrapper.style.transform = `translateX(-${--carouselCount * 75}%)`;
  resetSize();
  console.log(carouselCount);
  carouselWrapper.children[carouselCount].style.transform = "scale(0.8)";
  carouselWrapper.children[carouselCount].style.marginRight = "-110px";
  carouselWrapper.children[carouselCount].style.zIndex = "2";
  progressBar.style = `width: ${25 + carouselCount * 25}%`;
});
rightCarousel.addEventListener("click", () => {
  if (carouselCount >= 3) carouselCount = -1;
  carouselWrapper.style.transform = `translateX(-${++carouselCount * 75}%)`;
  resetSize();
  console.log(carouselCount);
  carouselWrapper.children[carouselCount].style.transform = "scale(0.8)";
  carouselWrapper.children[carouselCount].style.marginRight = "-110px";
  carouselWrapper.children[carouselCount].style.zIndex = "2";
  progressBar.style = `width: ${25 + carouselCount * 25}%`;
});
carouselWrapper.children[0].style.transform = "scale(0.8)";
carouselWrapper.children[0].style.marginRight = "-110px";
carouselWrapper.children[0].style.zIndex = "2";
