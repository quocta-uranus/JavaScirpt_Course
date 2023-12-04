var myList = []; 
var spinning = false;

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

    nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var name = nameInput.value;
        if (name.trim() !== '') {
            myList.push(name);
            renderRandoms(); 
            nameInput.value = ''; 
        }
    }
});

    
}

function handleDeleteRandom(index) {
    myList.splice(index, 1); 
    renderRandoms(); 
}

function renderRandoms() {
    var listRandomsBlock = document.querySelector('#list-randoms');

    listRandomsBlock.innerHTML = '';

    myList.forEach(function(name, index) {
        if (index !== 0) {
            var listItem = document.createElement('li');
            listItem.textContent = name;

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.onclick = function() {
                handleDeleteRandom(index);
            };
        var angle = 360 / myList.length;
         var rotation = 'rotate(' + (angle * index) + 'deg)';
        listItem.style.transform = rotation;

        var hue = index * (360 / myList.length);
        listItem.style.backgroundColor = 'hsl(' + hue + ', 70%, 80%)'; 
    


            listItem.appendChild(deleteButton);

            listRandomsBlock.appendChild(listItem);
        }
    });
}

function spinWheel() {
  var listRandomsBlock = document.getElementById('list-randoms');
  if (!spinning && myList.length > 0) {
    spinning = true;
    var randomAngle = Math.floor(Math.random() * 3600) + 360 * 5; // Quay từ 5 vòng đến 10 vòng
    listRandomsBlock.style.transition = 'transform 3s ease-out';
    listRandomsBlock.style.transform = `rotate(${randomAngle}deg)`;

    setTimeout(function() {
      var resultElement = document.getElementById('result');
      var randomItem = getRandomItem();
      resultElement.textContent = 'Result: ' + randomItem;
      var index = myList.findIndex(item => item === randomItem);
      myList.splice(index, 1);
      renderRandoms();
      spinning = false;
      listRandomsBlock.style.transition = 'none';
    }, 3000); // Thời gian quay (3 giây trong ví dụ này), bạn có thể thay đổi nếu muốn
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
    renderRandoms();
}

start();


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
