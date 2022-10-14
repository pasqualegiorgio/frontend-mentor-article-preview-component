let shareButton = document.getElementById("share-button");
let shareOval = document.getElementById("share-oval");
let shareContainer = document.getElementById("share-container");
let iconShare = document.getElementById("icon-share");
let iconShareActive = document.getElementById("icon-share-active");

shareButton.addEventListener("click", function() {
  if (shareContainer.style.display === "none") {
    shareContainer.style.display = "block";
    shareOval.classList.add("share-active");
    iconShare.style.display = "none";
    iconShareActive.style.display = "block";
  } else {
    shareContainer.style.display = "none";
    shareOval.classList.remove("share-active");
    iconShare.style.display = "block";
    iconShareActive.style.display = "none";
  }
});