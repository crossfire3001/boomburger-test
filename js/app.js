$(".carousel").slick({
  rows: 1,
  slidesPerRow: 4,
  prevArrow:
    '<button type="button" class="slick-prev"><img src="img/menu__fork.png" alt="fork"></button>',
  nextArrow:
    '<button type="button" class="slick-next"><img src="img/menu__knife.png" alt="knife"></button>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesPerRow: 2,
        rows: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesPerRow: 2,
        rows: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesPerRow: 2,
        rows: 1,
      },
    },
  ],
});

$(".feedback__carousel").slick({
  rows: 1,
  slidesPerRow: 3,
  prevArrow:
    '<button type="button" class="slick-prev"><img src="img/menu__fork.png" alt="fork"></button>', // Custom HTML for the previous button
  nextArrow:
    '<button type="button" class="slick-next"><img src="img/menu__knife.png" alt="knife"></button>', // Custom HTML for the next button
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesPerRow: 1,
        rows: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesPerRow: 2,
        rows: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesPerRow: 2,
        rows: 1,
      },
    },
  ],
});
