<!--=============== BURGER MENU JS ===============-->

    // открытие меню при нажатии на бургер
    document.getElementById("burger").onclick = function () {
    document.getElementById("menu").classList.add("open");
};

    // закрытие меню при клике на любой элемент в меню
    document.querySelectorAll("#menu *").forEach((item) => {
    item.onclick = () => {
        document.getElementById("menu").classList.remove("open");
    };
});
