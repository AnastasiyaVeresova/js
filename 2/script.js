"use strict";
// Функция для добавления продуктов в список
function addProductsToList(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        // Создаем элементы для каждого продукта
        const listItem = document.createElement('li');
        listItem.className = 'product-item';
        // Можно добавить свои стили
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.width = 150;
        img.height = 150;
        const title = document.createElement('h2');
        title.textContent = product.title;
        const description = document.createElement('p');
        description.textContent = product.description;
        const price = document.createElement('p');
        price.textContent = `Price: $${product.price.toFixed(2)}`;
        const button = document.createElement('button');
        button.className = 'add-to-cart';
        button.setAttribute('data-id', product.id);
        button.textContent = 'Add to Cart';
        // Добавляем все элементы в родительский элемент
        listItem.append(img, title, description, price, button);
        // Добавляем элемент списка в ul
        productList.append(listItem);
    });
}
// После загрузки DOM вызываем функцию для добавления продуктов
document.addEventListener('DOMContentLoaded', () => {
    addProductsToList(data);
});