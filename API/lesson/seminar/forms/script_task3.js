// Функция для выполнения GET-запроса к API и получения списка пользователей
async function fetchUserList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении списка пользователей:', error);
        return [];
    }
}

// Обработчик события "load" на объекте window
window.addEventListener('load', async () => {
    const userList = await fetchUserList();
    const userListElement = document.getElementById('user-list');

    userList.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userListElement.appendChild(listItem);
    });
});
