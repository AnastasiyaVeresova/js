// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

// function prevSlide() {
//     plusSlides(-1);
// }

// function nextSlide() {
//     plusSlides(1);
// }
document.addEventListener('DOMContentLoaded', function() {
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            const slider = document.getElementById('slider');
            const dots = document.getElementById('dots');

            data.forEach((image, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.className = 'slide';
                if (index === 0) {
                    imgElement.classList.add('active');
                }
                slider.appendChild(imgElement);

                const dotElement = document.createElement('span');
                dotElement.className = 'dot';
                if (index === 0) {
                    dotElement.classList.add('active');
                }
                dotElement.onclick = () => currentSlide(index + 1);
                dots.appendChild(dotElement);
            });

            let slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("slide");
                let dots = document.getElementsByClassName("dot");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
            }

            window.prevSlide = function() {
                plusSlides(-1);
            }

            window.nextSlide = function() {
                plusSlides(1);
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});
