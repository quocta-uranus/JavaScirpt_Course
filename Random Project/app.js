
var randomApi = 'http://localhost:3000/random';

function start() {
    getRandoms(renderRandoms);

    handleCreateForm();
}

start();

//Functions 

function getRandoms(callback) {
    fetch(randomApi)
       .then(function(response) {
        return response.json();
    })
    .then(callback);
}

function createRandom(data) {
    var options = {
        method : 'POST',
        headers: {
        "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
    };
    fetch(randomApi,options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}
function handleDeleteRandom(id) {
      var options = {
        method : 'DELETE',
        headers: {
        "Content-Type": "application/json",
        },
        
    };
    fetch(randomApi + '/' + id,options)
        .then(function(response){
            response.json();
        })
        .then(function(){
          var randomItem =  document.querySelector('.random-item-' + id);
          if (randomItem) {
            randomItem.remove();
          }
        });
}

function renderRandoms (randoms) {
    var listRandomsBlock = document. querySelector('#list-randoms');
    var htmls = randoms.map(function(random){
        return `
            <li class="random-item-${random.id}">
            <h4> ${random.name}</h4>
            <button onclick="handleDeleteRandom(${random.id})"> Xóa </button> 
            </li>
        `;
    });

    listRandomsBlock.innerHTML = htmls.join('');

}
function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    var nameInput = document.querySelector('input[name="name"]');

    function createRandomWithName() {
        var name = nameInput.value;
        var formData = {
            name: name,
        };
        createRandom(formData, function () {
            getRandoms(renderRandoms);
        });
    }

    createBtn.onclick = createRandomWithName;

    nameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            createRandomWithName();
        }
    });
}
