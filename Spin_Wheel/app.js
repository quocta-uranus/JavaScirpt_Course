var createButton = document.getElementById('create');
var input = document.querySelector('.input');

createButton.addEventListener('click', addName);
input.addEventListener('keypress', handleKeyPress);

var volumeIcon = document.getElementById('volumeIcon');
var backgroundMusic = document.getElementById('backgroundMusic');


// Thêm sự kiện click cho icon volume
volumeIcon.addEventListener('click', test);

function test() {
    console.log('vao day');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        document.getElementById('iconvolume').classList.add('fa-volume-up');
        document.getElementById('iconvolume').classList.remove('fa-volume-off');
    } else {
        backgroundMusic.pause();
        document.getElementById('iconvolume').classList.remove('fa-volume-up');
        document.getElementById('iconvolume').classList.add('fa-volume-off');
    }
}
var buttonBars = document.getElementById('listIcon');
const info = document.querySelector('.info');
        isOpen = true;
buttonBars.addEventListener('click', function() {                 
    if(isOpen) {
         console.log('ra');
        document.getElementById('iconlist').classList.remove('fa-bars');
        document.getElementById('iconlist').classList.add('fa-arrow-left');
        info.style.transform = 'translateX(0)';
    
    }
    else {
         console.log('vao');
        document.getElementById('iconlist').classList.remove('fa-arrow-left');
     document.getElementById('iconlist').classList.add('fa-bars');
          info.style.transform = 'translateX(-590px)';
           
    }   
     isOpen = !isOpen;

});

var  reset = document.getElementById('reset');
reset.addEventListener('click', reSet);

function reSet() {
    data = [] ; 
    
    redrawChart();
              if (data.length === 0) {
            var spinCircle = document.querySelector('.chartholder circle');
             var arrow = document.querySelector('.chartholder path');
             var spinText = document.querySelector('.chartholder text');
            if (spinCircle) {
                spinCircle.style.display = 'none'; 
                
                spinCircleVisible = false; // Đặt biến spinCircleVisible thành false
            }
             if (arrow) {
            arrow.style.display = 'none'; 
            arrowVisible = false; //
        }
            if(spinText) {
                    spinText.style.display = 'none';
                    spinTextVisible = false;
        }
    }
         var nameContainers = document.getElementById('nameContainers');
        nameContainers.innerHTML = ''; 

}



function addName() {

    var allNames = input.value.split('\n'); 
    var newName = allNames[allNames.length - 1].trim();

       var maxLength = 15;
    if (newName.length > maxLength) {
          newName = newName.substring(0, maxLength);
         // Cắt bớt tên nếu vượt quá độ dài cho phép
         
          
        }

   
    if (newName !== '') {
        data.push({
            "name": newName,
            "value": data.length + 1 
        });
        
        redrawChart();
       
        // Không cần tạo name-container ở đây nữa

        // Xóa tên đã nhập khỏi ô input
        input.value = input.value.replace(newName, '').trim();
        
        // Lấy đối tượng div đã tạo sẵn trong HTML
        var nameContainers = document.getElementById('nameContainers');
        
         var containerIdDynamic = 'name-container-' + `${data.length}` ;
        var parts = containerIdDynamic.split('-');
        console.log(parts); // Tách chuỗi thành các phần dựa trên dấu "-"
        var valueToDelete = parts[parts.length - 1];    
        console.log(valueToDelete);
                
        var nameText = document.createElement('span');
        nameText.textContent = newName;

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Xóa';
        deleteButton.classList.add('delete-button');
        console.log(data);
        console.log(nameContainer);

        deleteButton.addEventListener('click', function() {
        var containerToRemove = document.getElementById(containerIdDynamic);

            // Xử lý xóa name-container nếu tồn tại
            if (containerToRemove) {
                var index = data.findIndex(function(item) {
                
                    return item.value == valueToDelete ;  
                    
                });
                console.log(index);
                console.log(data);
                

                if (index !== -1) {
                    data.splice(index, 1); 
                    redrawChart(); 
                }

                // Xóa name-container cụ thể
                containerToRemove.remove();
            }
        });
        // Tạo div name-container
        var nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container'); 
         nameContainer.setAttribute('id', containerIdDynamic);
        // Thêm span và button vào div name-container
        nameContainer.appendChild(nameText);
        nameContainer.appendChild(deleteButton);

        // Thêm div name-container vào div đã lấy được từ HTML
        nameContainers.appendChild(nameContainer);

        input.value += '\n';
    }
  
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        addName();
        
    }
}
function getRandomNumbers(){
            var array = new Uint16Array(1000);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                //no support for crypto, get crappy random numbers
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        
        }




function redrawChart() {
 d3.select('#chart svg').remove();
  var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(d, i){ return color(i); })
            .attr("d", function (d) { return arc(d); });
        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].name;
            });
            //   container.on("click", spin);
              
           function spin(d){
            
            container.on("click", null);
            //all slices have been seen, all done
            var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    setTimeout(function() {
        overlay.style.display = 'none';
    }, 10000);
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
           
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) == -1){
                oldpick.push(picked);
            } 
            rotation += 90 - Math.round(ps/2);
        vis.transition()
        .duration(5000)
        .attrTween("transform", rotTween)
        .each("end", function() {
            
   
      var selectedValue = data[picked].value;
      var selectedName = data[picked].name;
      console.log(selectedValue);
    
        var indexToRemove = data.findIndex(function(item) {
        return item.value === selectedValue;
    });      
    console.log(indexToRemove);
        
        var nameContainers = document.querySelectorAll('.name-container');
        nameContainers.forEach(function(container) {
    var containerId = container.id; 
    var parts1 = containerId.split('-');
    var valueFromId = parts1[parts1.length - 1]; 

    if (parseInt(valueFromId) === selectedValue) {
        container.remove(); // Xóa phần tử chứa tên được chọn
    }
        });
        


      if (indexToRemove !== -1) {
        data.splice(indexToRemove, 1);
        redrawChart(); // Cập nhật lại hình tròn sau khi xóa tên đã chọn

        // Kiểm tra nếu không còn tên nào trong vòng quay
        if (data.length === 0 && spinCircleVisible) {
            var spinCircle = document.querySelector('.chartholder circle');
             var arrow = document.querySelector('.chartholder path');
             var spinText = document.querySelector('.chartholder text');
            if (spinCircle) {
                spinCircle.style.display = 'none'; 
                
                spinCircleVisible = false; // Đặt biến spinCircleVisible thành false
            }
             if (arrow) {
            arrow.style.display = 'none'; 
            arrowVisible = false; //
        }
            if(spinText) {
                    spinText.style.display = 'none';
                    spinTextVisible = false;
        }
    }
    }
        
            oldrotation = rotation;
             showWinnerAnimation(selectedName);
              
        });
       
        var spinSound = document.getElementById('spinSound');
       spinSound.play();

function showWinnerAnimation(selectedName) {
    var winnerElement = document.getElementById('winnerMessage');
    var winnerNameElement = document.querySelector('.winnerName');
    var canvas = document.getElementById('canvas');
    winnerNameElement.textContent = selectedName;

    // Kích hoạt animation CSS
    winnerElement.style.display = 'block';
    setTimeout(function() {
        winnerElement.classList.remove('hidden');
        Congrat()
          canvas.style.display = 'block';
        var clapHand = document.getElementById('clapHand');
       clapHand.play();
        // Tạo một hàm setTimeout() bao bọc Congrat() để tự động tắt sau 5 giây
        setTimeout(function() {
            var winnerElement = document.getElementById('winnerMessage');
            winnerElement.style.display = 'none';
            canvas.style.display = 'none';
        }, 5000);
    }, 100);
        
} 
  

    } 

var spinCircle = container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style("fill", "white");
// var svg = d3.select('body').append('svg').attr({
//   width: 120,
//   height: 120,
//   border: '1px solid #ccc'
// });

// svg.append('svg:image')
// .attr({
//   'xlink:href': '',  // can also add svg file here
//   x: 0,
//   y: 0,
//   width: 128,
//   height: 128
// });
// var defs = svg.append("defs");

// defs.append("pattern")
//     .attr("id", "circleImage")
//     .attr("height", 120) // Điều chỉnh kích thước ảnh
//     .attr("width", 120)
//     .append("image")
//     .attr("href", "./img/seven.png")
//     .attr("height", 120)
//     .attr("width", 120);



// Vẽ mũi tên bên trong hình tròn
var arrowPath = "M" + (-30) + ",0L0," + (-15) + "L0," + (15) + "Z"; // Đường dẫn của mũi tên, điều chỉnh để thay đổi hình dạng
var arrow = container.append("path")
    .attr("d", arrowPath)
    .attr("transform", "translate(60,0) rotate(-180)") // Di chuyển và quay mũi tên về phía bên phải
    .style({"fill":"red"});

// var spinText = container.append("text")
//     .attr("x", 0)
//     .attr("y", 15)
//     .attr("text-anchor", "middle")
//     .text("SPIN")
//     .style({
//         "font-family": "Arial, sans-serif",
//         "font-weight": "bold",
//         "font-size": "36px",
//         "fill": "red" // Màu sắc của chữ là xanh
//     });
container.select("circle").on("click", spin);
let spinTextVisible = true;
 let spinCircleVisible = true;
 let arrowVisible = true;
        



       // draw spin circle
 // Biến để theo dõi trạng thái hiển thị của vòng tròn quay

    
        //    svg.append("g")
        //     .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
        //     .append("path")
        //     .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
        //     .style({"fill":"black"});
        // //draw spin circle
        // container.append("circle")
        //     .attr("cx", 0)
        //     .attr("cy", 0)
        //     .attr("r", 60)
        //     .style({"fill":"white","cursor":"pointer"});
        // //spin text
        // container.append("text")
        //     .attr("x", 0)
        //     .attr("y", 15)
        //     .attr("text-anchor", "middle")
        //     .text("SPIN")
        //     .style({"font-weight":"bold", "font-size":"30px"});
        
            
}


var padding = {top:20, right:40, bottom:0, left:0},
            w = 500 - padding.left - padding.right,
            h = 500 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()
            //randomNumbers = getRandomNumbers();
        //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
        var data = [
                          

        ];
           
        //make arrow
        
        
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
    

function Congrat () {
    let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();

  

}



// Lấy các phần tử từ DOM




//Magic goes here... 



// window.onload = function() {
//     var audio = document.getElementById('backgroundMusic');
//     audio.play(); // Bắt đầu phát nhạc khi trang được tải
// };
// const myAudio = () => {
//     var audio = document.getElementById('backgroundMusic');
//     audio.play();
// }