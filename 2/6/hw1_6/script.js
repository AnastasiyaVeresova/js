"use strict";
// // Функция для добавления продуктов
// function addProductsToList(products) {
//     const productList = document.querySelector(".cards__wrapper");
//     products.forEach((product) => {
//         // Создаем элементы для каждого продукта
//         const sectionItem = document.createElement("div");
//         sectionItem.classList.add("cards__item");
//         const divImg = document.createElement("div");
//         divImg.classList.add("item-img");
//         // Устанавливаем фоновое изображение
//         divImg.style.backgroundImage = `url(${product.image})`;
//         divImg.style.backgroundSize = "cover";
//         divImg.style.backgroundPosition = "center";
//         const buttonCard = document.createElement("div");
//         buttonCard.classList.add("item-img__hover");
//         const button = document.createElement("button");
//         button.className = "item-img__hover-btn";
//         // const cartImage = document.createElement("img");
//         // cartImage.src = "img/btn-cart.svg";
//         // cartImage.alt = "Корзина";
//         // cartImage.className = "cart-icon";
//         // button.appendChild(cartImage);
//         button.appendChild(document.createTextNode(" Add to Cart"));
//         const divCardText = document.createElement("div");
//         divCardText.classList.add("item-description");
//         const name = document.createElement("h4");
//         name.classList.add("item-text");
//         name.textContent = product.name;
//         const text = document.createElement("p");
//         text.classList.add("item-text");
//         text.textContent = product.text;
//         const price = document.createElement("p");
//         price.classList.add("item-price");
//         price.textContent = `$${product.price.toFixed(2)}`;
//         buttonCard.appendChild(button);
//         divImg.append(buttonCard);
//         sectionItem.append(divImg, divCardText);
//         divCardText.append(name, text, price);
//         productList.append(sectionItem);
//     });
// }



 "use strict";
 // // Функция для добавления продуктов
 // function addProductsToList(products) {
 //     const productList = document.querySelector(".cards__wrapper");
 //     products.forEach((product) => {
 //         // Создаем элементы для каждого продукта
 //         const sectionItem = document.createElement("div");
 //         sectionItem.classList.add("cards__item");
 //         const divImg = document.createElement("div");
 //         divImg.classList.add("item-img");
 //         // Устанавливаем фоновое изображение
 //         divImg.style.backgroundImage = `url(${product.image})`;
 //         divImg.style.backgroundSize = "cover";
 //         divImg.style.backgroundPosition = "center";
 //         const buttonCard = document.createElement("div");
 //         buttonCard.classList.add("item-img__hover");
 //         const button = document.createElement("button");
 //         button.className = "item-img__hover-btn";
 //         // const cartImage = document.createElement("img");
 //         // cartImage.src = "img/btn-cart.svg";
 //         // cartImage.alt = "Корзина";
 //         // cartImage.className = "cart-icon";
 //         // button.appendChild(cartImage);
 //         button.appendChild(document.createTextNode(" Add to Cart"));
 //         const divCardText = document.createElement("div");
 //         divCardText.classList.add("item-description");
 //         const name = document.createElement("h4");
 //         name.classList.add("item-text");
 //         name.textContent = product.name;
 //         const text = document.createElement("p");
 //         text.classList.add("item-text");
 //         text.textContent = product.text;
 //         const price = document.createElement("p");
 //         price.classList.add("item-price");
 //         price.textContent = `$${product.price.toFixed(2)}`;
 //         buttonCard.appendChild(button);
 //         divImg.append(buttonCard);
 //         sectionItem.append(divImg, divCardText);
 //         divCardText.append(name, text, price);
 //         productList.append(sectionItem);
 //     });
 // }
 // Функция для добавления продуктов в список
 function addProductsToList(products) {
		// Получаем элемент ul для добавления продуктов
		const productList = document.querySelector(".cards__wrapper");
		// Генерация HTML-кода для списка продуктов
		let htmlContent = "";
		products.forEach((product) => {
			htmlContent += ` 
											<div class="cards__item"> 
												<div class="item-img" style="background-image: ${product.image}"> 
													 <img src="${product.image}" alt="${product.text}"> 
                                                <div class="item-img__hover"> 
                                                         <button class="item-img__hover-btn" data-id="${product.id}">Add to Cart</button> 
													</div> 
												</div> 
												<div class="item-description"> 
													<h4 class="item-title">${product.name}</h4> 
													<p class="item-text"> 
														${product.text} 
													</p> 
													<p class="item-price">$${product.price.toFixed(2)}</p> 
												</div> 
											</div> 
							`;
		});
		// Добавляем HTML-код в элемент ul
		productList.insertAdjacentHTML("beforeend", htmlContent);
 }
 // Функция для добавления товара в корзину
 function addToCart(productId) {
		const product = data.find((item) => item.id === productId);
		if (product) {
			const cartList = document.getElementById("cart-list");
			const cartItemHTML = ` 
        <div data-id="${product.id}"> 
            <img src="${product.image}" alt="${
				product.name
			}" width="50" height="50"> 
            <h3>${product.name}</h3> 
            <p>Price: $${product.price.toFixed(2)}</p> 
            <button class="remove-from-cart">X</button> 
        </div> 
        `;
			// Добавляем товар в корзину
			cartList.insertAdjacentHTML("beforeend", cartItemHTML);
		}
 }
 // Функция для удаления товара из корзины
 function removeFromCart(productId) {
		const cartItem = document.querySelector(`div[data-id="${productId}"]`);
		if (cartItem) {
			cartItem.remove();
		}
 }
 // Обработчик клика на кнопки "Add to Cart" и "X"
 document.addEventListener("click", (event) => {
		if (
			event.target &&
			event.target.classList.contains("item-img__hover-btn")
		) {
			const productId = parseInt(event.target.getAttribute("data-id"), 10);
			addToCart(productId);
		}
		if (event.target && event.target.classList.contains("remove-from-cart")) {
			const productId = parseInt(
				event.target.closest("div").getAttribute("data-id"),
				10
			);
			removeFromCart(productId);
		}
 });
 // После загрузки DOM вызываем функцию для добавления продуктов
 document.addEventListener("DOMContentLoaded", () => {
		addProductsToList(data);
 });    