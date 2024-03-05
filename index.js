const plantsCollectionScroll = document.getElementById(
  "plants-collection-scroll"
);
const plantsCollectionLeft = document.getElementById("plant-collection-left");
const plantsCollectionRight = document.getElementById("plant-collection-right");

plantsCollectionLeft.addEventListener("click", () => {
  plantsCollectionScroll.scrollBy(250, 0);
});
plantsCollectionRight.addEventListener("click", () => {
  plantsCollectionScroll.scrollBy(-250, 0);
});

//////// clients
let translate = 20;
const clientsWrapper = document.getElementById("clients-wrapper");

function nextClient() {
  console.log("clicked");
  translate = translate - 65;
  clientsWrapper.style.transform = `translateX(${translate}%)`;
}
function firstClient() {
  console.log("clicked");
  translate = 20;
  clientsWrapper.style.transform = `translateX(${translate}%)`;
}
