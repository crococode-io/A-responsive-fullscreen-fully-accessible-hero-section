let slider = document.querySelector('.slider');
let sliderBackground = slider.querySelector('.slider-background-holder');
let sliderModal = document.querySelector('.slider-modal');
let logo = document.querySelector('.logo');
let navigation = document.querySelector('.navigation');
let tl = new TimelineMax({ paused: true });
let elems = document.querySelectorAll('.slider-item');
let elem = document.querySelector('.slider-item');

function activateSlide(item) {
  const backgroundImage = item.closest('.slider-item').dataset.image,
  headline = item.closest('.slider-item').dataset.headline,
  excerpt = item.closest('.slider-item').dataset.excerpt,
  permalink  = item.closest('.slider-item').dataset.permalink;

  // set data of clicked item
  sliderBackground.style.backgroundImage = `url(${backgroundImage}`;
  sliderModal.querySelector('h2').innerHTML = headline;
  sliderModal.querySelector('.excerpt').innerHTML = excerpt;
  sliderModal.querySelector('.permalink').href = permalink;

  tl.play();
};

tl.to(logo, 0.5, { y: 35, autoAlpha: 0, ease: Sine.easeOut })
  .to(navigation, 0.5, { y: 50, autoAlpha: 0, ease: Sine.easeOut }, "-=0.35")
  .staggerTo( elems, 1, { yPercent:100, ease: Elastic.easeInOut.config(2.5, 1.25) }, 0.25 )
  .to(sliderModal, 1, { y: -340, ease: Elastic.easeInOut.config(2.5, 3.25) }, "-=0.75")
  .to(sliderModal.querySelector('.modal-close'), 0.25, { scale: 1, ease: Elastic.easeInOut.config(2.5, 3.25) }, "-=0.25")
  .to(sliderBackground, 1, { autoAlpha: .125, ease: Sine.easeOut }, "-=0.75");

elems.forEach(function (item) {
  item.addEventListener('click', function(it) {
    activateSlide(it.target);
  });
  // get data of clicked item
});

document.querySelector('.modal-close').addEventListener('click', () => {
  tl.reverse();
});
