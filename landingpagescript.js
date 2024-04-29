const landingPageAnimation = (function () {
  const landingButton = document.getElementById("explore");

  const preloadImage = (source, destElem) => {
    let image = new Image();
    image.src = source;
    image.onload = function () {
      let cssBackground = "url(" + image.src + ")";
      destElem.style.backgroundImage = cssBackground;
    };
  };

  //change background image to gif upon hovering over buttton
  landingButton.addEventListener("mouseover", function () {
    document.getElementsByTagName("BODY")[0].classList.add("hovered");
  });

  landingButton.addEventListener("mouseout", function () {
    document.getElementsByTagName("BODY")[0].classList.remove("hovered");
  });

  return {
    preloadImage: preloadImage,
  };
})();

landingPageAnimation.preloadImage("images/bg.gif", "body");
