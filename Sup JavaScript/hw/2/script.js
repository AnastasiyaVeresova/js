const initialData = [{
        product: "Apple iPhone 13",
        reviews: [{
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [{
            id: "3",
            text: "Интересный дизайн, но дорогой.",
        }, ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [{
            id: "4",
            text: "Люблю играть на PS5, графика на высоте.",
        }, ],
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const reviewInput = document.getElementById('review-input');
    const submitButton = document.getElementById('submit-button');
    const reviewsContainer = document.getElementById('reviews-container');

    // Загрузка начальных данных
    initialData.forEach(product => {
        product.reviews.forEach(review => {
            addReviewToContainer(review.text);
        });
    });

    submitButton.addEventListener('click', () => {
        const reviewText = reviewInput.value.trim();
        if (reviewText.length < 50 || reviewText.length > 500) {
            alert('Отзыв должен содержать от 50 до 500 символов.');
            return;
        }
        addReviewToContainer(reviewText);
        reviewInput.value = '';
    });

    function addReviewToContainer(text) {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.textContent = text;
        reviewsContainer.appendChild(reviewElement);
    }
});