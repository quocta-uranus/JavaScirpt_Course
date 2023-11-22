## **Callback functions**

- reduce: thực hiện một hàm reducer (hàm xử lý) lên mỗi phần tử của mảng, từ trái sang phải, để giảm nó xuống một giá trị duy nhất

- **forEach** javascript duyệt qua từng phần tử trong mảng và thực thi một hàm callback cho mỗi phần tử đó
- **find**: trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn điều kiện được xác định trong hàm callback

- **filter**: tạo một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện được xác định trong hàm callback

- **every** :kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được xác định trong hàm callback không, và trả về true nếu tất cả đều thỏa mãn, ngược lại trả về false
- **some**: kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được xác định trong hàm callback không, và trả về true nếu có, ngược lại trả về false

`initial value`:giá trị ban đầu

`Callback` là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong

## **EVENT**

- Click: Xảy ra khi người dùng nhấn chuột lên một phần tử.
- Mouseover và Mouseout: Xảy ra khi con trỏ chuột đi vào hoặc rời khỏi một phần tử.
- Keydown, Keypress và Keyup: Xảy ra khi người dùng nhấn một phím trên bàn phím.
- Load: Xảy ra khi một tài nguyên (như trang web, hình ảnh, hoặc tập tin) được tải hoàn toàn.

- Submit: Xảy ra khi một biểu mẫu (form) được gửi đi.

- Scroll: Xảy ra khi người dùng cuộn trang web.

- Resize: Xảy ra khi kích thước cửa sổ trình duyệt thay đổi.

Sử dụng **event istener** khi muốn một sự kiện diễn ra nhưng sau đó lai muốn hủy bỏ lắng nghe sự kiện đó trong một trường hợp cụ thể nào đó
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

- Var / Let, Const: Scope, Hosting
- Const là hằng số giá trị k đổi / Var, Let: Assignment
- Code thuần : var
- Babel: Const, Let
- Khi định nghĩa biến và không gán lại biến đó thì dùng _Const_
- khi cần gán lại giá trị cho biến thì dùng _let_

**Enhanced object literals**

- Định nghĩa key: value cho object
- Định nghĩa method cho object
- Định nghĩa key cho object dưới dạng biến
