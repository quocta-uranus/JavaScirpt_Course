## **Callback functions**

- **reduce**: thực hiện một hàm reducer (hàm xử lý) lên mỗi phần tử của mảng, từ trái sang phải, để giảm nó xuống một giá trị duy nhất
```Javascript
const numbers = [1, 2, 3, 4, 5];

// Tính tổng các số trong mảng
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```
- **forEach** javascript duyệt qua từng phần tử trong mảng và thực thi một hàm callback cho mỗi phần tử đó
```Javascript
const colors = ['red', 'green', 'blue'];

// In ra mỗi phần tử trong mảng colors
colors.forEach(color => console.log(color));
// Output:
// red
// green
// blue
```
- **find**: trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn điều kiện được xác định trong hàm callback
```Javascript
const ages = [20, 25, 30, 35];

// Tìm phần tử đầu tiên thỏa mãn điều kiện (ví dụ: tuổi lớn hơn 25)
const foundAge = ages.find(age => age > 25);
console.log(foundAge); // Output: 30
```
- **filter**: tạo một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện được xác định trong hàm callback
```Javascript
const numbers = [10, 15, 20, 25, 30];

// Lọc các số chia hết cho 5
const divisibleByFive = numbers.filter(number => number % 5 === 0);
console.log(divisibleByFive); // Output: [10, 15, 20, 25, 30]
```
- **every** :kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được xác định trong hàm callback không, và trả về true nếu tất cả đều thỏa mãn, ngược lại trả về false
```Javascript
const temperatures = [18, 22, 25, 20];

// Kiểm tra xem tất cả nhiệt độ có lớn hơn 15 độ không
const allAboveFifteen = temperatures.every(temp => temp > 15);
console.log(allAboveFifteen); // Output: true
```
- **some**: kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được xác định trong hàm callback không, và trả về true nếu có, ngược lại trả về false
```Javascript
  const numbers = [3, 7, 9, 12, 15];

// Kiểm tra xem có số chẵn nào không
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // Output: true
```
`initial value`:giá trị ban đầu

`Callback` là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong


## **Array Method**
- `join()`: công dụng tương tự như toString nhưng có thể thay đổi dấu ngăn cách giữa các phần tử
```Javascript
const fruits = ['Apple', 'Banana', 'Orange'];

// Chuyển mảng thành chuỗi với dấu '-' ngăn cách
const joinedString = fruits.join('-');
console.log(joinedString); // Output: "Apple-Banana-Orange"
```
- `pop()`: sẽ xoá đi phần tử ở cuối mảng và trả lại độ dài mới của mảng.
```Javascript
let numbers = [1, 2, 3, 4];

// Xoá phần tử cuối mảng và trả về phần tử đã xoá
const removedElement = numbers.pop();
console.log(numbers); // Output: [1, 2, 3]
console.log(removedElement); // Output: 4
```
- `push()`: thêm phần tử vào cuối mảng và trả lại độ dài mới của mảng.
```Javascript
let numbers = [1, 2, 3, 4];
const newLength = numbers.push(5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5

```
- `toString()`: sẽ chuyển đổi các phần tử của một mảng thành một chuỗi và thêm vào dấu , giữa các phần tử
```Javascript
const numbers = [1, 2, 3, 4];

// Chuyển mảng thành chuỗi với dấu ',' ngăn cách
const stringResult = numbers.toString();
console.log(stringResult); // Output: "1,2,3,4"
```
- `splice(index, numberCount, newElement)`: để xoá đi vị trí bất kì bắt đầu từ index và số lượng phần tử muốn xoá. Ta cũng có thể thêm phần tử mới bằng cách cho numberCount = 0 và ghi phần tử mới vào newElement
```Javascript
let colors = ['Red', 'Green', 'Blue', 'Yellow'];

// Xoá đi 2 phần tử từ vị trí index 1 và thêm phần tử mới 'Purple'
const removedItems = colors.splice(1, 2, 'Purple');
console.log(colors); // Output: ["Red", "Purple", "Yellow"]
console.log(removedItems); // Output: ["Green", "Blue"]
```
- `concat()`: dùng để nối hai array lại với nhau.
```Javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Nối hai mảng lại với nhau
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

```
- `slice(indexStart, indexEnd)`: dùng để cắt mảng từ indexStart tới indexEnd nhưng không lấy indexEnd. Nếu như muốn copy mảng ta chỉ cần đặt indexStart = 0 và không thêm giá trị cho indexEnd.
```Javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Nối hai mảng lại với nhau
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

```
- `includes(element, indexStart)`: kiểm tra xem trong mảng có phần tử đó hay không
```Javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Nối hai mảng lại với nhau
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

```
## **EVENT**

- **Click**: Xảy ra khi người dùng nhấn chuột lên một phần tử.
``` JavaScript
// Lắng nghe sự kiện click trên một phần tử có id là "myElement"
document.getElementById("myElement").addEventListener("click", function() {
    console.log("Đã nhấn chuột lên phần tử.");
});

```
- **Mouseover và Mouseout**: Xảy ra khi con trỏ chuột đi vào hoặc rời khỏi một phần tử.
``` JavaScript
// Lắng nghe sự kiện khi con trỏ chuột đi vào phần tử
document.getElementById("myElement").addEventListener("mouseover", function() {
    console.log("Con trỏ chuột đã đi vào phần tử.");
});

// Lắng nghe sự kiện khi con trỏ chuột rời khỏi phần tử
document.getElementById("myElement").addEventListener("mouseout", function() {
    console.log("Con trỏ chuột đã rời khỏi phần tử.");
});

```
- **Keydown, Keypress và Keyup**: Xảy ra khi người dùng nhấn một phím trên bàn phím.
``` JavaScript
// Lắng nghe sự kiện khi một phím được nhấn xuống
document.addEventListener("keydown", function(event) {
    console.log("Phím đã được nhấn xuống:", event.key);
});

// Lắng nghe sự kiện khi một phím được nhấn và giữ
document.addEventListener("keypress", function(event) {
    console.log("Phím đã được nhấn và giữ:", event.key);
});

// Lắng nghe sự kiện khi một phím được nhấn lên
document.addEventListener("keyup", function(event) {
    console.log("Phím đã được nhấn lên:", event.key);
});

```
- **Load**: Xảy ra khi một tài nguyên (như trang web, hình ảnh, hoặc tập tin) được tải hoàn toàn.
``` JavaScript
// Lắng nghe sự kiện khi tất cả tài nguyên trên trang web đã tải hoàn toàn
window.addEventListener("load", function() {
    console.log("Trang web đã tải hoàn toàn.");
});

```

- **Submit**: Xảy ra khi một biểu mẫu (form) được gửi đi.
``` JavaScript
// Lắng nghe sự kiện submit trên một biểu mẫu có id là "myForm"
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện
    console.log("Biểu mẫu đã được gửi đi.");
    // Thêm mã xử lý cho việc gửi biểu mẫu tại đây
});

```

- **Scroll**: Xảy ra khi người dùng cuộn trang web.
``` JavaScript
// Lắng nghe sự kiện cuộn trang web
window.addEventListener("scroll", function() {
    console.log("Trang web đã được cuộn.");
});

```

- **Resize**: Xảy ra khi kích thước cửa sổ trình duyệt thay đổi.
``` JavaScript
// Lắng nghe sự kiện thay đổi kích thước cửa sổ trình duyệt
window.addEventListener("resize", function() {
    console.log("Kích thước cửa sổ trình duyệt đã thay đổi.");
});

```

Sử dụng **EventListener** khi muốn một sự kiện diễn ra nhưng sau đó lai muốn hủy bỏ lắng nghe sự kiện đó trong một trường hợp cụ thể nào đó
Khi có nhiều event listener ta có thể loại bỏ 1 sự kiện cụ thể nào đó

## **JSON**

**_JSON_** : JavaScript Object Notation
**JSON** :

- Number
- Boolean
- String
- Null
- Array
- Object
  **_Stringify_** : Từ Javascript types -> JSON
  **_Parse_**: Từ JSON -> Javascript types
  **_Promise_** xử lý những thao tác bất đồng bộ

## **FETCH**

**CRUD**

- Create: Tạo mới -> POST
- Read: Lấy dữ liệu -> GET
- Update: Chỉnh sửa -> PUT/PATCH
- Detele: Xóa -> DETELE

## **ECMAScript 6+**

- Var / Let, Const: Scope, Hoisting
- Const là hằng số giá trị k đổi / Var, Let: Assignment
- Code thuần : var
- Babel: Const, Let
- Khi định nghĩa biến và không gán lại biến đó thì dùng _Const_
- khi cần gán lại giá trị cho biến thì dùng _let_

**Enhanced object literals**

- Định nghĩa key: value cho object
- Định nghĩa method cho object
- Định nghĩa key cho object dưới dạng biến

IIFE - Immediately Invoked Function Expression
Hàm gọi theo IIFE function
```Javascript
;(function () {
let name ='AQ';
console.log(name);

})()
```
Hàm gọi bình thường
``` JavaScript
const callNow = function () {
let name ='AQ';
console.log(name);
}
callNow();
```


## **Scope**

- Phạm vi

- Các loại phạm vị :
  Global : Toàn cầu
  Code block - Khối mã : lest, const
  Local scope- Hàm : var, function
  Khi gọi mỗi hàm luôn có 1 pham vi mới được tạo
  Các hàm có thể truy câp các biến được khai báo trong phạm vi của nó và bên ngoài nó
  Cách thức một biến được truy cập

  Hoisting
  là một đặc tính của JavaScript mà cho phép các khai báo biến và khai báo hàm được "nâng lên" (hoisted) lên đầu phạm vi của chúng trước khi mã JavaScript thực sự được thực thi

## **STRICT MODE**

"use strict"
```JavaScript
var hero = "Iron man"
function MultiverseOfMadness() {
var universe = 100
}
MultiverseOfMadness()
console.log(hero)
console.log(universe)

```
output: Ironman/Uncaught ReferenceError:universe is not defined
Với use strict mode, biến universe chỉ được khai báo trong phạm vi của một function. Khi đó, nếu gọi đến biến đó ở ngoài phạm vi khai báo sẽ dẫn đến lỗi.

## **Value types & Reference types**

### 1.Value types (Primitive data types)

- String
- Number
- Boolean
- BigInt
- Symbol
- undefined
- null

### 2.Reference types(Non-primitive data types)

- Object
- Array
- Function

## Data types with functions

- Value types
- Reference types

## **DOM**
- `document.getelementById(string)`: lấy element thông qua id
- `document.getelementsByClassName(string)`: lấy tất cả element thông qua className
- `document.getelementsByTagName(string)`: lấy tất cả element thông qua tagName
- `document.querySelector(string)`: lấy element thông qua CSS selector
- `document.querySelectorAll(string)`: lấy tất cả element thông qua CSS selector
- `document.innerText`: dùng để lấy ra textNode hoặc gán text mới vào textNode nhưng nó sẽ trả về những gì chúng ta nhìn thấy trên trình duyệt
- `document.textContent`: dùng để lấy ra textNode hoặc gán text mới vào textNode và nó trả về cả nội dung nguyên bản của text ở trong html
- `document.innerHTML`: thêm elementNode, attributeNode, textNode vào trong element khác ở trong DOM
- `document.outerHTML`: nó có chức năng giống innerHTML nhưng nó sẽ lấy luôn cả thằng element được gọi tới

## Call, Apply, Bind
- `bind()` cho phép chúng ta dễ dàng thiết lập một đối tượng cụ thể sẽ bị ràng buộc này khi một chức năng hoặc phương pháp được gọi.
```HTML
  <div class="player "></div>
```
```JavaScript
  const $ = document.querySelector.bind(document)
  const player = $('.player')
```
- `call()` được sử dụng để gọi một hàm và thiết lập ngữ cảnh của hàm đó, đồng thời truyền các đối số một cách rõ ràng.
``` JavaScript
  const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// Gọi hàm getFullName() với ngữ cảnh của 'person'
const fullName = person.getFullName.call(person);

console.log(fullName); // Output: "John Doe"
```
- `apply()` cũng gọi một hàm, nhưng khác với call(), nó truyền các đối số dưới dạng một mảng.
``` JavaScript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
const nameArray = ['Mr.', 'Mrs.'];
// Gọi hàm getFullName() với ngữ cảnh của 'person' và truyền đối số từ một mảng
const fullName = person.getFullName.apply(person, nameArray);
console.log(fullName); // Output: "John Doe"

```