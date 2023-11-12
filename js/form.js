let loader = $(".loader");
let reservationForm = $(".reservation__form");
let orderTitle = $(".order__text-title");
let orderMessage = $(".order__text-message");

$("#submit").click(function (e) {
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
                setTimeout(function () {
                    loader.hide();
                    alert(
                        "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ"
                    );
                }, 3000);
            }
            reservationForm.hide();
            orderTitle.text("Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!");
            orderMessage.hide();
        });
    }
});
