
var fullName = 'Tran Anh Quoc';

var date = Date();
console.log(date);

let getRandNumbers = function (min, max, length) {
  let myArr = [];
  for (let i = 0; i < length; i++) {
    let randomNumer = Math.random() * (max - min) + min;
    myArr.push(randomNumer);
  }
  return myArr;
};

let myArr = getRandNumbers(1, 5, 5);
console.log(myArr);

function getTotal(arr) {
    var sum = 0;
    for( var i=0;i<arr.length;i++) {
        sum=sum +arr[i];
    }
    return sum;
}
console.log(getTotal([1,2,3]));
console.log(getTotal([4,5,-3]));
console.log(getTotal([4,5,3,5]));           



function hell(value, cb) {
    cb(value);

}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    } 
}
const Course = new Course('Javascript',200);
console.log(`Course: ${Course.name}, Price: ${Course.price}`);