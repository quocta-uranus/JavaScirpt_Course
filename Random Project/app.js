var myList = []; 

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    var nameInput = document.querySelector('input[name="name"]');
    var listRandomsBlock = document.querySelector('#list-randoms');

    createBtn.onclick = function() {
        var name = nameInput.value;
        if (name.trim() !== '') {
            myList.push(name);
            renderRandoms(); 
            nameInput.value = ''; 
        }
    };
}

function handleDeleteRandom(index) {
    myList.splice(index, 1); 
    renderRandoms(); 
}

function renderRandoms() {
    var listRandomsBlock = document.querySelector('#list-randoms');
    listRandomsBlock.innerHTML = ''; 

    myList.forEach(function(name, index) {
        var listItem = document.createElement('li');
        listItem.textContent = name;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = function() {
            handleDeleteRandom(index); 
        };

        listItem.appendChild(deleteButton);
        listRandomsBlock.appendChild(listItem);
    });
}

function start() {
    handleCreateForm();
    renderRandoms();
}

start();
// function s

function getRandomItem() {
    
    var randomIndex = Math.floor(Math.random() * myList.length);
    console.log(randomIndex);
    // myList.splice(randomIndex, 1);
    return myList[randomIndex];
   
}
    document.getElementById("randomButton").addEventListener("click", function() {
    var resultElement = document.getElementById("result");
    var randomItem = getRandomItem();
    resultElement.textContent = "Kết quả: " + randomItem;
    var index = myList.findIndex(item => item === randomItem);
    console.log('index ---->', index);
    myList.splice(index, 1);
    console.log('myList ---->', myList);
    renderRandoms(myList);
   
});
