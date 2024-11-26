document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('review-form');
    const productList = document.getElementById('product-list');
    const reviewList = document.getElementById('review-list');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const productName = document.getElementById('product-name').value;
            const reviewText = document.getElementById('review-text').value;

            const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
            if (!reviews[productName]) {
                reviews[productName] = [];
            }
            reviews[productName].push(reviewText);
            localStorage.setItem('reviews', JSON.stringify(reviews));

            alert('Отзыв добавлен!');
            reviewForm.reset();
        });
    }

    if (productList && reviewList) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        const productNames = Object.keys(reviews);

        productNames.forEach(productName => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.textContent = productName;
            productElement.addEventListener('click', () => {
                displayReviews(productName);
            });
            productList.appendChild(productElement);
        });

        function displayReviews(productName) {
            reviewList.innerHTML = '';
            const productReviews = reviews[productName];
            productReviews.forEach((review, index) => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review';
                reviewElement.textContent = review;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Удалить';
                deleteButton.addEventListener('click', () => {
                    productReviews.splice(index, 1);
                    if (productReviews.length === 0) {
                        delete reviews[productName];
                    }
                    localStorage.setItem('reviews', JSON.stringify(reviews));
                    displayReviews(productName);
                    updateProductList();
                });

                reviewElement.appendChild(deleteButton);
                reviewList.appendChild(reviewElement);
            });
        }

        function updateProductList() {
            productList.innerHTML = '';
            const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
            const productNames = Object.keys(reviews);
            productNames.forEach(productName => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.textContent = productName;
                productElement.addEventListener('click', () => {
                    displayReviews(productName);
                });
                productList.appendChild(productElement);
            });
        }
    }
});