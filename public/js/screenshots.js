const primary = document.querySelector("#primary");
const screenshots = document.querySelector("#screenShots");

screenshots.addEventListener("click", (event) => {
  const source = event.target.getAttribute("src");
  const description = event.target.getAttribute("alt");
  primary.setAttribute("src", source);
  primary.setAttribute("alt", description);
});

jQuery(document).ready(function () {
  var imgparent = jQuery(".images");
  parentHeight = imgparent.height(); // let's find out the scroll height area
  var imgelement = jQuery(".main-img");
  imgMarginOffset = 2; //lets us keeps the margin offset of 2px
  imgHeight = imgelement.height(); // calculate the height of scroll element height

  
  margin_limit = parentHeight - (imgHeight + imgMarginOffset); // find the max margin which can be applied
  marginTop = 0;
  jQuery(window).on("scroll", function () {
    scrollHeight = jQuery(window).scrollTop();
    console.log(scrollHeight);
    if (scrollHeight > 150 && scrollHeight < 400) {
      marginTop++;
      applyMargin = scrollHeight - 150;
      // imgelement.css("margin-top", applyMargin);
    }
  });

  /*imgelement.on("load", function () {
    var imgparent = jQuery(".main-img");
    parentHeight = imgparent.height();

    imgHeight = JQuery(this).height();
    console.log(imgparent, imgHeight);
  });*/
});
