let menuToggle = document.querySelector('.menuToggle');
let plusID = document.querySelector('#plus');
let minusID = document.querySelector('#minus');
let header = document.querySelector('header');
menuToggle.onclick = function () {
    header.classList.toggle('active');
}
plusID.onclick = function () {
    header.classList.toggle('plus');
    header.classList.toggle('minus');
}
minusID.onclick = function () {
    header.classList.toggle('plus');
    header.classList.toggle('minus');
}
