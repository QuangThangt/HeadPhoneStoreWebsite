var productArray = [
   {productId: 10042, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Stan Smith Green', price: 2500000},
   {productId: 10041, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Air max 1 Just do it', price: 5700000},
   {productId: 10040, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Superstar White Gold', price: 2100000},
   {productId: 10039, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Stan Smith Leather White', price: 3030000},
   {productId: 10038, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Snake Diamond', price: 18455000},
   {productId: 10037, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Sneaker Dirty', price: 15000000},
   {productId: 10036, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Balenciaga Speed Trainer Triple Black', price: 17050000},
   {productId: 10035, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Vapormax X OFF WHITE 2018', price: 7500000},
   {productId: 10034, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'AIR MAX 270 ALL WHITE', price: 4319000},
   {productId: 10033, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Human Race China Exclusive Green', price: 10375000},
   {productId: 10032, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Alpha Bounce Instinct All Black', price: 4300000},
   {productId: 10031, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Global Sneaker', price: 16050000},
   {productId: 10030, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Bee Black', price: 16000000},
   {productId: 10029, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Balenciaga Triple S Grey', price: 33000000},
   {productId: 10028, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Rick Owens SS17 High', price: 18050000},
   {productId: 10027, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Pegasus 35 Black', price: 7350000},
   {productId: 10026, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Air Max 97 Silver Bullet', price: 8150000},
   {productId: 10025, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Alpha Bounce Beyond Nude/Pink', price: 4100000},
   {productId: 10024, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Adidas YUNG1 Navy/Red', price: 4590000},
   {productId: 10023, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Snake Sneaker', price: 16000000},
   {productId: 10022, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Global Silver Sneaker', price: 18000000},
   {productId: 10021, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Yeezy 350 v2 ‘ Zebra ‘ Rep', price: 10255000},
   {productId: 10020, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Yeezy 350 v2 Beluga 2.0', price: 9500000},
   {productId: 10019, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Air Max 270 Black Pink', price: 6250000},
   {productId: 10018, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Air max 1 x Parra', price: 15549000},
   {productId: 10017, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Human Race China Exclusive Peace', price: 10375000},
   {productId: 10016, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'YUNG1 Frieza', price: 4130000},
   {productId: 10015, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Fox Sneaker', price: 16000000},
   {productId: 10014, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Stripe Sneaker', price: 15099000},
   {productId: 10013, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Rick Owens SS17 Low', price: 23100000},
   {productId: 10012, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Balenciaga Triple S Black', price: 21255000},
   {productId: 10011, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Air max 1 Box Print', price: 2330000},
   {productId: 10010, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Nike Element 87 Black', price: 5295000},
   {productId: 10009, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Human Race V3 Solar Black', price: 12355000},
   {productId: 10008, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Adidas Alpha Bounce Instinct Grey', price: 2799000},
   {productId: 10007, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci LOVED', price: 15600000},
   {productId: 10006, brand: 'gucci', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Gucci Flame Sneaker', price: 17099000},
   {productId: 10005, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Balenciaga Triple S White', price: 20395000},
   {productId: 10004, brand: 'balenciaga', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Balenciaga Speed Trainer BB', price: 17020000},
   {productId: 10003, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Nike M2K John', price: 2949000},
   {productId: 10002, brand: 'nike', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Nike Pegasus 35 Grey', price: 5350000},
   {productId: 10001, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Adidas Prophere Undefeated', price: 6599000},
   {productId: 10000, brand: 'adidas', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'Adidas Yeezy 350 v2 ‘ Oreo ‘ Rep', price: 15000000}
];

var itemsPerPage = 15;

function displayPage(pageNumber) {
   var productList = document.querySelector('.product-list');
   productList.innerHTML = '';

   var startIndex = (pageNumber - 1) * itemsPerPage; 
   var endIndex = startIndex + itemsPerPage;          
   var count = 0;
   
   for (var i = startIndex; i < endIndex && i < productArray.length; i++) {    
      count++;                                                                
      var product = productArray[i];
      var productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
           <div class="wrap-earphone-content-top">
               <img src="${product.img}" alt="${product.name}">
           </div>
           <div class="wrap-earphone-content-bottom">
               <h3>${product.name}</h3>
               <p>Giá: ${product.price} VND</p>
           </div>
       `;
      productList.appendChild(productItem);
   }

   // Tính số lượng sản phẩm giả cần thêm
   var itemsPerRow = Math.floor(productList.clientWidth / document.querySelector('.product-item').clientWidth);
   if(count % itemsPerRow != 0){
      var missingItems = itemsPerRow - (count % itemsPerRow);

      // Thêm sản phẩm giả vào danh sách sản phẩm
      for (var i = 0; i < missingItems; i++) {
         var productItem = document.createElement('div');
         productItem.classList.add('product-item');
         productItem.classList.add('empty'); 
         productList.appendChild(productItem);
      }
   }
 
}
// Hiển thị trang đầu tiên khi trang web được tải
displayPage(1);


// Tính tổng số trang
var totalPages = Math.ceil(productArray.length / itemsPerPage);


// Hiển thị số trang và các nút chuyển trang
var pagination = document.querySelector('.pagination');
for (var i = 1; i <= totalPages; i++) {
   var pageButton = document.createElement('button');
   pageButton.textContent = i;
   pageButton.addEventListener('click', function () {
      var pageNumber = parseInt(this.textContent);
      displayPage(pageNumber);
   });
   pagination.appendChild(pageButton);
}
