const POPUP = document.querySelector("#popup");
const POPUP_CLOSE = document.querySelector("#popup-close");
const POPUP_MORE = document.querySelector(".more-button-grid");

POPUP_MORE.addEventListener("click", function () {
  POPUP.classList.remove("deactive");
});
POPUP_CLOSE.addEventListener("click", function () {
  POPUP.classList.add("deactive");
});
