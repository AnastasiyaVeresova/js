// const newsDatabase = [
//     { title: "Новость 1", content: "Содержание новости 1" },
//     { title: "Новость 2", content: "Содержание новости 2" },
//     { title: "Новость 3", content: "Содержание новости 3" }
// ];

// function fetchNews() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.1) {
//                 reject(new Error("Ошибка загрузки новостей"));
//             } else {
//                 resolve(newsDatabase);
//             }
//         }, 2000);
//     });
// }

// document.getElementById('loadNewsButton').addEventListener('click', () => {
//     const button = document.getElementById('loadNewsButton');
//     const newsContainer = document.getElementById('newsContainer');

//     button.disabled = true;
//     newsContainer.innerHTML = '';

//     fetchNews()
//         .then(news => {
//             news.forEach(article => {
//                 const newsItem = document.createElement('div');
//                 newsItem.className = 'news-item';
//                 newsItem.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
//                 newsContainer.appendChild(newsItem);
//             });
//         })
//         .catch(error => {
//             const errorMessage = document.createElement('div');
//             errorMessage.className = 'error';
//             errorMessage.textContent = error.message;
//             newsContainer.appendChild(errorMessage);
//         })
//         .finally(() => {
//             button.disabled = false;
//         });
// });


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -