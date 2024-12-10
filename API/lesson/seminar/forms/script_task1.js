document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('categorySelect');
    const productList = document.getElementById('productList');

    const products = [
        { name: 'Смартфон', category: 'electronics' },
        { name: 'Ноутбук', category: 'electronics' },
        { name: 'Футболка', category: 'clothing' },
        { name: 'Джинсы', category: 'clothing' },
        { name: 'Роман', category: 'books' },
        { name: 'Учебник', category: 'books' }
    ];

    function updateProductList(category) {
        productList.innerHTML = '';
        products.forEach(product => {
            if (category === 'all' || product.category === category) {
                const li = document.createElement('li');
                li.textContent = `${product.name} (${product.category})`;
                productList.appendChild(li);
            }
        });
    }

    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        updateProductList(selectedCategory);
    });

    // Инициализация списка товаров при загрузке страницы
    updateProductList('all');
});
