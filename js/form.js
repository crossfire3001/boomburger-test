let loader = $(".loader");
let orderMessage = $(".order__text-message");
let modal = $(".modal");
let modalClose = $(".modal__close");

$("#submit").click(function (e) {
  e.preventDefault();
  let name = $("#name");
  let phone = $("#phone");
  let hasError = false;

  $(".error-input").hide();

  if (!name.val()) {
    name.next().show();
    hasError = true;
  }
  if (!phone.val()) {
    phone.next().show();
    hasError = true;
  }

  if (!hasError) {
    $.ajax({
      method: "POST",
      url: "https://testologia.site/checkout",
      data: { name: name.val(), phone: phone.val() },
    }).done(function (msg) {
      loader.hide();
      if (!msg.success) {
        loader.css("display", "flex");
        modal.css("display", "none");
        setTimeout(function () {
          alert(
            "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ"
          );
        }, 3000);
      }
      modal.css("display", "flex");
      modalClose.click(function (e) {
        e.preventDefault();
        modal.css("display", "none");
      });
      orderMessage.hide();
    });
  }
});
