const mapBtn = document.querySelector('.map__button');
const form = document.querySelector('.callback-form');

form.classList.add('callback-form--hidden');


mapBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('callback-form--hidden');

});
