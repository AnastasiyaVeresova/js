document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const cloneButton = document.getElementById('cloneButton');
    let boxCount = 0;

    addButton.addEventListener('click', () => {
        boxCount++;
        const newBox = document.createElement('div');
        newBox.className = 'box';
        newBox.textContent = boxCount;
        container.appendChild(newBox);
    });

    removeButton.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.box');
        if (boxes.length > 0) {
            container.removeChild(boxes[boxes.length - 1]);
            boxCount--;
        }
    });

    cloneButton.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.box');
        if (boxes.length > 0) {
            const lastBox = boxes[boxes.length - 1];
            const clonedBox = lastBox.cloneNode(true);
            container.appendChild(clonedBox);
            boxCount++;
            clonedBox.textContent = boxCount;
        }
    });
});
