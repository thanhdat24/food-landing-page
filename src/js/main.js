/* HEADER */
$(".header__menu li").on("click", function () {
  $(".header__menu li").removeClass("active");
  $(this).addClass("active");
});

/*  food category  */
$(".food-menu__category button").on("click", function () {
  $(".food-menu__category button").removeClass("active");
  $(this).addClass("active");
});

/*Back to top */
$(".back-to-top").on("click", function () {
  $("body,html").animate({ scrollTop: 0 }, 500, "linear");
});

let backToTop = document.querySelector(".back-to-top");
window.onscroll = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

$(".food-menu__category button").on("click", function () {
  $(".food-menu__category button").removeClass("active");
  $(".food-menu__wrap .animate__animated").removeClass(" animate__fadeInUp");
  $(this).addClass("active");
});
