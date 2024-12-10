document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articlesContainer');
    const addArticleBtn = document.getElementById('addArticleBtn');

    // Initial articles data
    let articles = [
        { title: "Статья 1", text: "Текст статьи 1" },
        { title: "Статья 2", text: "Текст статьи 2" }
    ];

    // Load articles from local storage if available
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
        articles = JSON.parse(savedArticles);
    }

    function renderArticles() {
        articlesContainer.innerHTML = '';
        articles.forEach((article, index) => {
            const articleElement = document.createElement('div');
            articleElement.className = 'card mb-3';
            articleElement.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-text">${article.text}</p>
                    <button class="btn btn-danger btn-sm" onclick="deleteArticle(${index})">Удалить</button>
                    <button class="btn btn-secondary btn-sm" onclick="editArticle(${index})">Редактировать</button>
                </div>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    window.deleteArticle = function(index) {
        articles.splice(index, 1);
        saveArticles();
        renderArticles();
    };

    window.editArticle = function(index) {
        const newTitle = prompt("Введите новый заголовок:", articles[index].title);
        const newText = prompt("Введите новый текст:", articles[index].text);
        if (newTitle !== null && newText !== null) {
            articles[index].title = newTitle;
            articles[index].text = newText;
            saveArticles();
            renderArticles();
        }
    };

    function addArticle() {
        const newArticle = { title: "Новая статья", text: "Введите содержание статьи..." };
        articles.push(newArticle);
        saveArticles();
        renderArticles();
    }

    function saveArticles() {
        localStorage.setItem('articles', JSON.stringify(articles));
    }

    addArticleBtn.addEventListener('click', addArticle);

    renderArticles();
});
