$(".order-addItem-toggler").click(function() {
  if ($(".order-addItem").hasClass("active")) {
    $(".order-addItem").removeClass("active");
    $(".order-addItem").css("top", 65);
  } else {
    var scrollTop = $(window).scrollTop();

    $(".order-addItem").addClass("active");
    $(".order-addItem").css("top", scrollTop + 65);
  }
});
