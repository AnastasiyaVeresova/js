document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Удаляем класс 'active' у всех пунктов меню
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            // Добавляем класс 'active' кликнутому пункту меню
            item.classList.add('active');
        });
    });
});
