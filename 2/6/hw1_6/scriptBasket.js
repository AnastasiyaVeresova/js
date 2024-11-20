        "use strict";

        // Функция для добавления продуктов в список
        // function addProductsToList(products) {
        //     // Получаем элемент ul для добавления продуктов
        //     const productList = document.getElementById("product-list");
        //     // Генерация HTML-кода для списка продуктов
        //     let htmlContent = "";
        //     products.forEach((product) => {
        //         htmlContent += `
        // <li>
        //     <img src="${product.image}" alt="${
        //     product.name
        //   }" width="150" height="150">
        //     <h2>${product.name}</h2>
        //     <p>${product.text}</p>
        //     <p>Price: $${product.price.toFixed(2)}</p>
        //     <button class="add-to-cart" data-id="${
        //       product.id
        //     }">Add to Cart</button>
        // </li>
        // `;
        //     });
        //     // Добавляем HTML-код в элемент ul
        //     productList.insertAdjacentHTML("beforeend", htmlContent);
        // }

        // Функция для добавления товара в корзину
        function addToCart(productId) {
            const product = data.find((item) => item.id === productId);
            if (product) {
                const cartList = document.getElementById("cart-list");
                const cartItemHTML = `
        <li data-id="${product.id}">
            <img src="${product.image}" alt="${
            product.name
          }" width="50" height="50">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="remove-from-cart">X</button>
        </li>
        `;
                // Добавляем товар в корзину
                cartList.insertAdjacentHTML("beforeend", cartItemHTML);
            }
        }

        // Функция для удаления товара из корзины
        function removeFromCart(productId) {
            const cartItem = document.querySelector(`li[data-id="${productId}"]`);
            if (cartItem) {
                cartItem.remove();
            }
        }

        // Обработчик клика на кнопки "Add to Cart" и "X"
        document.addEventListener("click", (event) => {
            if (event.target && event.target.classList.contains("add-to-cart")) {
                const productId = parseInt(event.target.getAttribute("data-id"), 10);
                addToCart(productId);
            }

            if (
                event.target &&
                event.target.classList.contains("remove-from-cart")
            ) {
                const productId = parseInt(
                    event.target.closest("li").getAttribute("data-id"),
                    10
                );
                removeFromCart(productId);
            }
        });

        // После загрузки DOM вызываем функцию для добавления продуктов
        document.addEventListener("DOMContentLoaded", () => {
            addProductsToList(data);
        });