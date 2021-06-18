/*  food category  */

$(".food-menu__category button").on("click", function () {
  $(".food-menu__category button").removeClass("active");
  $(this).addClass("active");
});


$(".header__menu li").on("click", function () {
  $(".header__menu li").removeClass("active");
  $(this).addClass("active");
});
/* Back to top */
// $(".back-to-top").on("click", function () {
//   $("body,html").animate({ scrollTop: 0 }, 1000, "linear");
// });
