var myList = [];
var spinning = false;

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    var nameInput = document.querySelector('input[name="name"]');

    createBtn.onclick = function () {
        var name = nameInput.value;
        if (name.trim() !== '') {
            myList.push(name);
            renderParticipantsList();
            renderRandoms();
            nameInput.value = '';
        }
    };

    nameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var name = nameInput.value;
            if (name.trim() !== '') {
                myList.push(name);
                renderParticipantsList();
                renderRandoms();
                nameInput.value = '';
            }
        }
    });
}

function renderParticipantsList() {
    var participantListBlock = document.querySelector('#participant-list');
    participantListBlock.innerHTML = '';

    myList.forEach(function (name, index) {
        var listItem = document.createElement('li');
        listItem.className = 'participant-list-item';
        listItem.textContent = name;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = function () {
            handleDeleteRandom(index);
        };

        listItem.appendChild(deleteButton);
        participantListBlock.appendChild(listItem);
    });
}

function renderRandoms() {
    var listRandomsBlock = document.querySelector('#list-randoms');
    var segmentAngle = 360 / myList.length;
    listRandomsBlock.innerHTML = '';

    myList.forEach(function (name, index) {
        var listItem = document.createElement('li');
        listItem.textContent = name;
    
        listRandomsBlock.appendChild(listItem);
    });
}

function handleDeleteRandom(index) {
    myList.splice(index, 1);
    renderParticipantsList();
    renderRandoms();
}

function spinWheel() {
    var listRandomsBlock = document.getElementById('list-randoms');
    if (!spinning && myList.length > 0) {
        spinning = true;
        var randomAngle = Math.floor(Math.random() * 3600) + 360 * 5;
        listRandomsBlock.style.transition = 'transform 3s ease-out';
        listRandomsBlock.style.transform = `rotate(${randomAngle}deg)`;

        setTimeout(function () {
            var resultElement = document.getElementById('result');
            var randomItem = getRandomItem();
            resultElement.textContent = 'Result: ' + randomItem;
            var index = myList.findIndex(item => item === randomItem);
            myList.splice(index, 1);
            renderParticipantsList();
            renderRandoms();
            spinning = false;
            listRandomsBlock.style.transition = 'none';
        }, 3000);
    } else {
        var resultElement = document.getElementById('result');
        if (myList.length === 0) {
            resultElement.textContent = 'No names to spin!';
        } else {
            resultElement.textContent = 'Wheel is spinning!';
        }
    }
}

document.getElementById('randomButton').addEventListener('click', spinWheel);

function start() {
    handleCreateForm();
}

function getRandomItem() {
    var randomIndex = Math.floor(Math.random() * myList.length);
    return myList[randomIndex];
}

start();

