const contentEl = document.querySelector('.content')
const addEl = document.querySelector('.add');
const deleteEl = document.querySelector('.delete');
const cloneEl = document.querySelector('.clone');
const divEl = document.querySelector('.block')

addEl.addEventListener("click", () => {
    const newDivEl = document.createElement('div');
    newDivEl.classList.add("block");
    newDivEl.textContent = contentEl.children.length + 1;
    contentEl.appendChild(newDivEl);
});

deleteEl.addEventListener('click', () => {
if(contentEl.children.length > 0){
    const lastBox = contentEl.lastChild;
contentEl.removeChild(lastBox);
}
});

cloneEl.addEventListener('click', () => {
    const lastBox = contentEl.lastChild;
    const clone = lastBox.cloneNode(true);
    contentEl.appendChild(clone);
})