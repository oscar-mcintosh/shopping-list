/*======== CREATE EACH CHILD ITEM THEN APPEND THEM ===============*/

// const createNewItem = (item) => {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item))

//     const button = createButton('remove-item btn-link text-red');

//     li.appendChild(button)

//     document.querySelector('.items').appendChild(li);
// }

// const createButton = (classes) => {
//     const button = document.createElement('button')
//     button.className = classes;

//     const icon = createIcon('fa-solid fa-xmark')
//     button.appendChild(icon);

//     return button;
// };

// const createIcon = (classes) => {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// };

// createNewItem('Bacon');
// createButton();

// const itemList = document.querySelector('.item-list');

// console.log(itemList)

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


const addItem = (e) => {
    e.preventDefault();
    const newItem = itemInput.value;

    if (itemInput.value === '') {
        alert('Please add an item');
        return;
    }
    /*==== Create List Item ====*/
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem))


    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button)

    itemList.appendChild(li);

    itemInput.value = '';
};

const createButton = (classes) => {
    const button = document.createElement('button')
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon);

    return button;
};

const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
};





/*========= Event Listeners ================*/
itemForm.addEventListener('submit', addItem);