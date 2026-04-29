window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;

  document.querySelector(".f1").style.transform =
    "translateY(" + scrollY * 0.3 + "px)";

  document.querySelector(".f2").style.transform =
    "translateY(" + scrollY * 0.5 + "px)";

  document.querySelector(".f3").style.transform =
    "translateY(" + scrollY * 0.2 + "px)";
});