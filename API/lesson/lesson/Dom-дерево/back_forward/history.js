const backButton = document.querySelector('.backButton');
const forwardButton = document.querySelector('.forwardButton');

backButton.addEventListener('click', function (e) {
    window.history.back();
});
forwardButton.addEventListener('click', function (e) {
    window.history.forward();
});