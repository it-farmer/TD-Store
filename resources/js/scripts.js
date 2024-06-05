//------------------BTN TO HEADER-----------------
window.onscroll = function() {
  var button = document.getElementById('btn_header_page');

  if (document.documentElement.scrollTop > 500) {
      button.style.opacity = 1;
  } else {
      button.style.opacity = 0;
  }
};

//------------------SEARCH PRODUCT------------------
function searchProduct(){
  var myUl = document.getElementById('myULSearch');
  var myLi = myUl.getElementsByTagName('li');
  var valueSearch = document.getElementById('mySearch').value;

  // Hiển thị danh sách sản phẩm khi có giá trị tìm kiếm
  myUl.setAttribute('style','display: block !important;left: 11%; top: 110%; overflow: hidden; height: fit-content;');


  // Ẩn danh sách sản phẩm khi người dùng nhấp ra ngoài
  document.addEventListener('click', function (event) {
    if (!myUl.contains(event.target)) {
        myUl.style.display = 'none';
      }
  });

  for (i = 0; i < myLi.length; i++) {
    var a = myLi[i].getElementsByTagName("a")[0]; // lấy phần tử đầu tiên trong chuỗi (getElementsByTagName trả về chuỗi)
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(valueSearch.toUpperCase()) > -1) { //indexOf() trả về vị trí đầu tiên của chuỗi valueSearch trong txtValue. Nếu không tìm thấy, nó trả về -1.
      myLi[i].style.display = "";
    } else {
      myLi[i].style.display = "none";
    }
  }
}


//------------------REGISTER----------------------
var x=document.getElementById("signin");
var y=document.getElementById("signup");
var z=document.getElementById("btn");

function signup(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function signin(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}

// Kiểm tra và lưu thông tin đăng ký
function register() {
  const username = document.getElementById('register-username').value;
  const useremail = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  let isValid = true;

  // Kiểm tra tên người dùng
  const usernameError = document.getElementById('username-error');
  if (username === '') {
      usernameError.textContent = 'Tên đăng nhập không được để trống';
      usernameError.style.color = 'red';
      usernameError.style.fontSize = '12px';
      isValid = false;
  } else {
      usernameError.textContent = '';
  }

  // Kiểm tra email
  const emailError = document.getElementById('email-error');
  if (useremail === '') {
      emailError.textContent = 'Email không được để trống';
      emailError.style.color = 'red';
      emailError.style.fontSize = '12px';
      isValid = false;
  } else {
      emailError.textContent = '';
  }

  // Kiểm tra mật khẩu
  const passwordError = document.getElementById('password-error');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
      passwordError.textContent = 'Mật khẩu phải hơn 8 kí tự, có kí tự hoa, số và kí tự đặc biệt.';
      passwordError.style.color = 'red';
      passwordError.style.fontSize = '12px';
      isValid = false;
  } else {
      passwordError.textContent = '';
  }

  if (isValid) {
      // Lưu thông tin người dùng vào local storage
      localStorage.setItem('username', username);
      localStorage.setItem('useremail', useremail);
      localStorage.setItem('password', password);
      alert('Đăng Kí thành công');
  }
}

// Kiểm tra thông tin đăng nhập
function login() {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Lấy thông tin người dùng từ local storage
  const registeredUsername = localStorage.getItem('username');
  const registeredPassword = localStorage.getItem('password');

  // Kiểm tra thông tin đăng nhập
  if (username == registeredUsername && password == registeredPassword) {
      alert('Đăng nhập thành công');
      const temp = localStorage.getItem('useremail');
      localStorage.setItem('useremail1', temp);
      window.location.href = 'index.html'; 
  } else {
      alert('Sai tên đăng nhập hoặc mật khẩu.');
  }
}

document.addEventListener('DOMContentLoaded',function(){
  if(localStorage.getItem('useremail1') == null || localStorage.getItem('useremail1').trim() == ''){
  }
  else{
    const mainUsername = localStorage.getItem('username');
    document.getElementById('user-login').innerText = 'Hi, ' + mainUsername;
  }
  document.getElementById('logout-button').addEventListener('click', logout);
})

//Đăng xuất
function logout() {
  // Xóa  thông tin người dùng đã đăng nhập
  localStorage.removeItem('useremail1');

  // Cập nhật giao diện người dùng
  alert('Bạn đã đăng xuất thành công');
  location.reload();
}

const dropmenu2 = document.querySelectorAll('.nav-2 > ul > li > a');

if(localStorage.getItem('useremail1') != null)
  {
    for (let index = 0; index < dropmenu2.length; index++) {
      dropmenu2[index].addEventListener('click',(a)=>{
        if(dropmenu2[index].parentNode.querySelector('ul').classList.contains('menu'))
          {
            if(dropmenu2[index].parentNode.querySelector('ul').classList.contains('li_active')){  
              a.preventDefault(); 
              dropmenu2[index].parentNode.querySelector('ul').classList.remove('li_active');
            }else{
              a.preventDefault();
              dropmenu2[index].parentNode.querySelector('ul').classList.add('li_active');
            }
          }
      })
  }
}

// -----------------SLIDESHOW---------------------

let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

if (slides.length > 0){
  showSlides(slideIndex);
  showSlides1();
}

// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// let slideIndex1 = 0;
// showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    } 
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides1, 3000); // Change image every 3 seconds
}

// ---------------------------SHOWROOM----------------------------

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if(panel.classList.contains("active")){
      removeActiveClasses();
    }
    else{
      removeActiveClasses();
      panel.classList.add("active");
    }
  });

});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//--------------------------FILTER SORT--------------------------

const checkboxs = document.querySelectorAll(".cb_sort1");
checkboxs.forEach((panel) => {
  panel.addEventListener("click", () => {
      removeCbActiveClasses();
      panel.classList.add("cb_active");
    });

});

function removeCbActiveClasses() {
  checkboxs.forEach((panel) => {
    panel.classList.remove("cb_active");
  });
}

const checkboxs2 = document.querySelectorAll(".cb_sort2");
checkboxs2.forEach((panel) => {
  panel.addEventListener("click", () => {
      removeCbActiveClasses2();
      panel.classList.add("cb_active");
    });

});

function removeCbActiveClasses2() {
  checkboxs2.forEach((panel) => {
    panel.classList.remove("cb_active");
  });
}

// -------------------------PRODUCT FILTER------------------------
var arrDT = [
  {
    link: './Product Details/Samsung Galaxy S24 .html',
    hinh: 'resources/img/Samsung Galaxy S24/samsung-galaxy-s24-den-1.jpg',
    discount: 'Giảm 2.000.000đ',
    tensp: 'Samsung Galaxy S24 5G 256GB',
    giaban: '19.990.000đ',
    gia: 19990000,
    giagoc: '21.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    danhgia2: '(5 đánh giá)',
    quatang: '',
    thietbi: 'Dienthoai',
    hang: 'Samsung',
    nhucau: [],
    sao: '5',
  },
  {
    link: './Product Details/iPhone 14 Pro Max.html',
    hinh: 'resources/img/iPhone-14-Pro-Max/iphone-14-pro-max-purple-1.jpg',
    discount: 'Giảm 1.500.000đ',
    tensp: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    giaban: '26.990.000đ',
    gia: 26990000,
    giagoc: '28.490.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(3 đánh giá)',
    quatang: 'Trả góp lãi suất 0% & phụ kiện ỐP DÁN',
    thietbi: 'Dienthoai',
    hang: 'Apple',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/Samsung Galaxy Z Fold5.html',
    hinh: 'resources/img/Samsung-Galaxy-Z-Fold5/samsung-galaxy-zfold5-xanh-256gb-2.jpg',
    discount: 'Giảm 2.000.000đ',
    tensp: 'Samsung Galaxy Z Fold5 5G 256GB',
    giaban: '31.990.000đ',
    gia: 31990000,
    giagoc: '33.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(10 đánh giá)',
    quatang: 'Trả góp lãi suất 0% & tặng gói dịch vụ đặc quyền (Samsung Care+ 06 tháng)',
    thietbi: 'Dienthoai',
    hang: 'Samsung',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/iPhone 15 Pro Max.html',
    hinh: 'resources/img/iPhone-15-Pro-Max/iphone-15-pro-max-blue-1-1.jpg',
    discount: 'Giảm 2.500.000đ',
    tensp: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
    giaban: '30.790.000đ',
    gia: 30790000,
    giagoc: '33.290.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    danhgia2: '(12 đánh giá)',
    quatang: '',
    thietbi: 'Dienthoai',
    hang: 'Apple',
    nhucau: [],
    sao: '5',
  },
  {
    link: './Product Details/Redmi 13T Pro.html',
    hinh: 'resources/img/Redmi-13T-Pro/xiaomi-13t-pro-xanh-1.jpg',
    discount: 'Giảm 1.000.000đ',
    tensp: 'Xiaomi 13T Pro 5G 12GB - 256GB',
    giaban: '12.790.000đ',
    gia: 12790000,
    giagoc: '13.790.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(4 đánh giá)',
    quatang: 'Giảm thêm 5% (tối đa 200.000đ) khi thu cũ lên đời',
    thietbi: 'Dienthoai',
    hang: 'Xiaomi',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/iPhone 13.html',
    hinh: 'resources/img/iPhone-13/iphone-13-xanh-1.jpg',
    discount: 'Giảm 500.000đ',
    tensp: 'Iphone 13 128GB | Chính hãng VN/A',
    giaban: '15.990.000đ',
    gia: 15990000,
    giagoc: '16.490.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(6 đánh giá)',
    quatang: 'Giảm ngay 1.000.000đ khi thanh toán qua VNPAY',
    thietbi: 'Dienthoai',
    hang: 'Apple',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/Samsung Galaxy S24 Ultra.html',
    hinh: 'resources/img/Samsung-Galaxy-S24-Ultra/samsung-galaxy-s24-ultra-xam-1.jpg',
    discount: 'Giảm 2.000.000đ',
    tensp: 'Samsung Galaxy S24 Ultra 5G 256GB',
    giaban: '28.490.000đ',
    gia: 28490000,
    giagoc: '30.490.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(5 đánh giá)',
    quatang: 'Trả góp lãi suất 0% & tặng gói dịch vụ đặc quyền (Samsung Care+ 06 tháng)',
    thietbi: 'Dienthoai',
    hang: 'Samsung',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/Oppo Find N3.html',
    hinh: 'resources/img/Oppo-Find-N3/oppo-find-n3-den-1-1.jpg',
    discount: 'Giảm 3.000.000đ',
    tensp: 'OPPO Find N3 5G 512GB',
    giaban: '41.990.000đ',
    gia: 41990000,
    giagoc: '44.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(8 đánh giá)',
    quatang: 'Giảm ngay 1.000.000đ khi thanh toán qua VNPAY',
    thietbi: 'Dienthoai',
    hang: 'Oppo',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/Samsung Galaxy Z Flip.html',
    hinh: 'resources/img/Samsung-Galaxy-Z-Flip/samsung-galaxy-zflip5-xanh-256gb-1-1.jpg',
    discount: 'Giảm 2.000.000đ',
    tensp: 'Samsung Galaxy Z Flip5 5G 256GB',
    giaban: '16.090.000đ',
    gia: 16090000,
    giagoc: '18.090.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(1 đánh giá)',
    quatang: '',
    thietbi: 'Dienthoai',
    hang: 'Samsung',
    nhucau: [],
    sao: '4',
  },
  {
    link: './Product Details/OPPO Find N3 Flip 5G.html',
    hinh: 'resources/img/Oppo-Find-N3-Flip/oppo-find-n3-flip-pink-1.jpg',
    discount: 'Giảm 2.000.000đ',
    tensp: 'OPPO Find N3 Flip 5G Hồng 256GB',
    giaban: '22.490.000đ',
    gia: 22490000,
    giagoc: '24.490.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
    danhgia2: '(2 đánh giá)',
    quatang: 'Tặng tai nghe OPPO Enco Air 3',
    thietbi: 'Dienthoai',
    hang: 'Oppo',
    nhucau: [],
    sao: '4',
  },
  {
    link: 'Product Details/Macbook-Pro.html',
    hinh: 'resources/img/Mac-Pro-16-M3/macbook_16.png',
    discount: 'Giảm 4.000.000đ',
    tensp: 'Macbook Pro 16 M3 Max 36GB - 1TB | Chính hãng Apple Việt Nam',
    giaban: '89.990.000đ',
    gia: 89990000,
    giagoc: '93.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></i>',
    danhgia2: '(51 đánh giá)',
    quatang: 'Giảm ngay 1.000.000đ khi thanh toán qua VNPAY',
    thietbi: 'Laptop',
    hang: 'Apple',
    nhucau: ['Vanphong','Hoctap'],
    sao: '5',
  },
  {
    link: 'Product Details/Acer Nitro V.html',
    hinh: 'resources/img/Acer-Nitro-V/acer_nitro_v.png',
    discount: 'Giảm 3.000.000đ',
    tensp: 'Laptop Gaming Acer Nitro V ANV15-51-75GS',
    giaban: '29.990.000đ',
    gia: 29990000,
    giagoc: '32.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></i>',
    danhgia2: '(25 đánh giá)',
    quatang: 'Tặng chuột chơi game có dây Dareu EM911 RGB và 1 khuyến mại khác',
    thietbi: 'Laptop',
    hang: 'Acer',
    nhucau: ['Gaming','Dohoa','Hoctap'],
    sao: '5',
  },
  {
    link: 'Product Details/Asus Vivobook.html',
    hinh: 'resources/img/Asus-Vivobook-S14/asus_zenbook_s14.png',
    discount: 'Giảm 2.000.000đ',
    tensp: 'Laptop Asus VivoBook S 14 FLIP TP3402VA-LZ118W',
    giaban: '22.990.000đ',
    gia: 22990000,
    giagoc: '24.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></i>',
    danhgia2: '(45 đánh giá)',
    quatang: '',
    thietbi: 'Laptop',
    hang: 'Asus',
    nhucau: ['Vanphong','Hoctap'],
    sao: '4',
  },
  {
    link: 'Product Details/Macbook Air.html',
    hinh: 'resources/img/Mac-Air-M2/macbook_air_m2.png',
    discount: 'Giảm 4.000.000đ',
    tensp: 'Apple Macbook Air M2 2022 8GB 256GB | Chính hãng Apple Việt Nam',
    giaban: '24.990.000đ',
    gia: 24990000,
    giagoc: '28.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></i>',
    danhgia2: '(1 đánh giá)',
    quatang: '',
    thietbi: 'Laptop',
    hang: 'Apple',
    nhucau: ['Vanphong','Hoctap'],
    sao: '4',
  },
  {
    link: 'Product Details/Asus Zenbook.html',
    hinh: 'resources/img/Asus-Zenbook-S13/asus_zenbook_s13.png',
    discount: 'Giảm 3.500.000đ',
    tensp: 'Laptop ASUS Zenbook S 13 OLED UX5304VA-NQ125W',
    giaban: '32.990.000đ',
    gia: 32990000,
    giagoc: '36.490.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></i>',
    danhgia2: '(5 đánh giá)',
    quatang: 'Giảm ngay 1.000.000đ khi thanh toán qua VNPAY',
    thietbi: 'Laptop',
    hang: 'Asus',
    nhucau: ['Vanphong','Hoctap'],
    sao: '4',
  },
  {
    link: 'Product Details/Acer Aspire 5 .html',
    hinh: 'resources/img/Acer-Aspire-5-Spin14/acer_aspire_5.png',
    discount: 'Giảm 4.000.000đ',
    tensp: 'Laptop Acer Aspire 5 Spin 14 A5SP14-51MTN-573X',
    giaban: '18.990.000đ',
    gia: 18990000,
    giagoc: '22.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></i>',
    danhgia2: '(6 đánh giá)',
    quatang: 'Giảm ngay 1.000.000đ khi thanh toán qua VNPAY',
    thietbi: 'Laptop',
    hang: 'Acer',
    nhucau: ['Vanphong','Hoctap','Dohoa'],
    sao: '5',
  },
  {
    link: 'Product Details/Gigabyte G6.html',
    hinh: 'resources/img/Gigabyte-G6-KF/gigabyte_g6.png',
    discount: 'Giảm 5.000.000đ',
    tensp: 'Laptop Gigabyte G6 KF-H3VN853SH',
    giaban: '27.990.000đ',
    gia: 27990000,
    giagoc: '32.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></i>',
    danhgia2: '(1 đánh giá)',
    quatang: '',
    thietbi: 'Laptop',
    hang: 'Gigabyte',
    nhucau: ['Gaming','Dohoa','Hoctap'],
    sao: '4',
  },
  {
    link: 'Product Details/Lenovo LOQ.html',
    hinh: 'resources/img/Lenovo-LOQ-15IRX9/lenovo_loq_15irx9.png',
    discount: 'Giảm 3.500.000đ',
    tensp: 'Laptop Gaming Lenovo LOQ 15IRX9 83DV000NVN',
    giaban: '28.790.000đ',
    gia: 28790000,
    giagoc: '32.290.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></i>',
    danhgia2: '(15 đánh giá)',
    quatang: 'Tặng chuột chơi game có dây Dareu EM911 RGB và 1 khuyến mại khác',
    thietbi: 'Laptop',
    hang: 'Lenovo',
    nhucau: ['Gaming','Dohoa','Hoctap'],
    sao: '5',
  },
  {
    link: 'Product Details/MSI GP66 Leopard.html',
    hinh: 'resources/img/MSI-GP66-Leopard/msi_gp66_leopard.png',
    discount: 'Giảm 4.000.000đ',
    tensp: 'Laptop MSI GP66 Leopard 11UE-643VN',
    giaban: '33.990.000đ',
    gia: 33990000,
    giagoc: '37.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></i>',
    danhgia2: '(21 đánh giá)',
    quatang: 'Phần Mềm Diệt Virut, Office chính hãng chỉ từ 150k',
    thietbi: 'Laptop',
    hang: 'MSI',
    nhucau: ['Gaming','Dohoa','Hoctap'],
    sao: '4',
  },
  {
    link: 'Product Details/Lenovo ThinkPad.html',
    hinh: 'resources/img/Lenovo_ThinkPad_G2/lenovo_thinkpad_g2_position_2.png',
    discount: 'Giảm 5.000.000đ',
    tensp: 'Laptop Lenovo ThinkPad P14S G2 T 20VX008GVN',
    giaban: '25.990.000đ',
    gia: 25990000,
    giagoc: '30.990.000đ',
    danhgia: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></i>',
    danhgia2: '(12 đánh giá)',
    quatang: 'Phần Mềm Diệt Virut, Office chính hãng chỉ từ 150k',
    thietbi: 'Laptop',
    hang: 'Lenovo',
    nhucau: ['Vanphong','Dohoa','Hoctap'],
    sao: '4',
  },
]

//SHOW WHAT USER WANT

function hienDT(thietbichon = [], giabanduocchon = [], hangduocchon = [], saoduocchon = [], nhucauduocchon = []){
  var listMobile = document.getElementById('dienthoai');
  var listLaptop = document.getElementById('laptop');
  var listMobileMain = listMobile.querySelector('#list_product');
  var listLaptopMain = listLaptop.querySelector('#list_product');
  var numberMobile = 0;
  var numberLaptop = 0;

//Number of devices
  var setNumberMobile = document.getElementById('numberMobile');
  var setNumberLaptop = document.getElementById('numberLaptop');

  setNumberMobile.innerText = '(' + numberMobile + ' sản phẩm)';
  setNumberLaptop.innerText = '(' + numberLaptop + ' sản phẩm)';

  listMobileMain.innerHTML = '';
  listLaptopMain.innerHTML = '';
  if(thietbichon.length > 0)
    {
      if(thietbichon.includes('1'))
        {
          listLaptop.style.display = 'none';
          listMobile.style.display = '';
        }
      else if(thietbichon.includes('2'))
        {
          listMobile.style.display = 'none';
          listLaptop.style.display = '';
        }
      else
        {
          listMobile.style.display = '';
          listLaptop.style.display = '';
        }
        
    }
  for( i = 0; i < arrDT.length; i++)
    {
      if(giabanduocchon.length > 0 && giabanduocchon.includes('0') == false)
        { 
          if(arrDT[i].gia < 10000000 && giabanduocchon.includes('1') == false) continue;
          if(arrDT[i].gia >= 10000000 && arrDT[i].gia < 15000000 && giabanduocchon.includes('2') == false) continue;
          if(arrDT[i].gia >= 15000000 && arrDT[i].gia < 20000000 && giabanduocchon.includes('3') == false) continue;
          if(arrDT[i].gia >= 20000000 && arrDT[i].gia < 25000000 && giabanduocchon.includes('4') == false) continue;
          if(arrDT[i].gia >= 25000000 && giabanduocchon.includes('5') == false) continue;
        }
      if(hangduocchon.length > 0 && hangduocchon.includes('0') == false)
        {
          if(arrDT[i].hang == 'Apple' && hangduocchon.includes('1') == false) continue;
          if(arrDT[i].hang == 'Samsung' && hangduocchon.includes('2') == false) continue;
          if(arrDT[i].hang == 'Acer' && hangduocchon.includes('3') == false) continue;
          if(arrDT[i].hang == 'Gigabyte' && hangduocchon.includes('4') == false) continue;
          if(arrDT[i].hang == 'Lenovo' && hangduocchon.includes('5') == false) continue;
          if(arrDT[i].hang == 'Asus' && hangduocchon.includes('6') == false) continue;
          if(arrDT[i].hang == 'MSI' && hangduocchon.includes('7') == false) continue;
          if(arrDT[i].hang == 'Xiaomi' && hangduocchon.includes('8') == false) continue;
          if(arrDT[i].hang == 'Oppo' && hangduocchon.includes('9') == false) continue;
        }
      if(saoduocchon.length > 0 && saoduocchon.includes('0') == false)
        {
          if(arrDT[i].sao == '5' && saoduocchon.includes('1') == false) continue;
          if(arrDT[i].sao == '4' && saoduocchon.includes('2') == false) continue;
          if(arrDT[i].sao == '3' && saoduocchon.includes('3') == false) continue;
          if(arrDT[i].sao == '2' && saoduocchon.includes('4') == false) continue;
          if(arrDT[i].sao == '1' && saoduocchon.includes('5') == false) continue;
        }
      if(nhucauduocchon.length > 0 && nhucauduocchon.includes('0') == false)
        {
          if(arrDT[i].nhucau.length == 0) continue;
          if(arrDT[i].nhucau.includes('Gaming') == false && nhucauduocchon.includes('1') == true) continue;
          if(arrDT[i].nhucau.includes('Vanphong') == false && nhucauduocchon.includes('2') == true) continue;
          if(arrDT[i].nhucau.includes('Dohoa') == false && nhucauduocchon.includes('3') == true) continue;
          if(arrDT[i].nhucau.includes('Hoctap') == false && nhucauduocchon.includes('4') == true) continue;
        }
      if(arrDT[i].thietbi == 'Dienthoai')
        {
          numberMobile++;
          if(arrDT[i].quatang == '')
            listMobileMain.innerHTML += 
            `
              <a href="${arrDT[i].link}" class="product_item">
              <img src="${arrDT[i].hinh}" alt="">
              <div class="discount"><i class="fa-solid fa-fire"></i>${arrDT[i].discount}</div>
              <div class="item_title">
                  <p>${arrDT[i].tensp}</p>
                  <span class="price">${arrDT[i].giaban}</span>
                  <span class="price_through">${arrDT[i].giagoc}</span>
                  <br>
                  ${arrDT[i].danhgia}
                  <span class="review">${arrDT[i].danhgia2}</span>
                  <center>
                      <button onclick="addIntoCart(this)" class="add-items"><i class="fa-solid fa-cart-plus"></i><span>Thêm vào giỏ</span></button>
                  </center>
              </div>
              </a>
            `;
          else
            listMobileMain.innerHTML +=
            `
              <a href="${arrDT[i].link}" class="product_item">
              <img src="${arrDT[i].hinh}" alt="">
              <div class="discount"><i class="fa-solid fa-fire"></i>${arrDT[i].discount}</div>
              <div class="gift"><i class="fa-solid fa-gift"></i></div>
              <div class="item_title">
                  <p>${arrDT[i].tensp}</p>
                  <span class="price">${arrDT[i].giaban}</span>
                  <span class="price_through">${arrDT[i].giagoc}</span>
                  <br>
                  ${arrDT[i].danhgia}
                  <span class="review">${arrDT[i].danhgia2}</span>
                  <div class="voucher_discount">
                      <p>${arrDT[i].quatang}</p>
                  </div>
                  <center>
                      <button onclick="addIntoCart(this)" class="add-items"><i class="fa-solid fa-cart-plus"></i><span>Thêm vào giỏ</span></button>
                  </center>
              </div>
              </a>
            `;
        }
      else
        {
          numberLaptop++;
          if(arrDT[i].quatang == '')
            listLaptopMain.innerHTML += 
            `
              <a href="${arrDT[i].link}" class="product_item">
              <img src="${arrDT[i].hinh}" alt="">
              <div class="discount"><i class="fa-solid fa-fire"></i>${arrDT[i].discount}</div>
              <div class="item_title">
                  <p>${arrDT[i].tensp}</p>
                  <span class="price">${arrDT[i].giaban}</span>
                  <span class="price_through">${arrDT[i].giagoc}</span>
                  <br>
                  ${arrDT[i].danhgia}
                  <span class="review">${arrDT[i].danhgia2}</span>
                  <center>
                      <button onclick="addIntoCart(this)" class="add-items"><i class="fa-solid fa-cart-plus"></i><span>Thêm vào giỏ</span></button>
                  </center>
              </div>
              </a>
            `;
          else
            listLaptopMain.innerHTML +=
            `
              <a href="${arrDT[i].link}" class="product_item">
              <img src="${arrDT[i].hinh}" alt="">
              <div class="discount"><i class="fa-solid fa-fire"></i>${arrDT[i].discount}</div>
              <div class="gift"><i class="fa-solid fa-gift"></i></div>
              <div class="item_title">
                  <p>${arrDT[i].tensp}</p>
                  <span class="price">${arrDT[i].giaban}</span>
                  <span class="price_through">${arrDT[i].giagoc}</span>
                  <br>
                  ${arrDT[i].danhgia}
                  <span class="review">${arrDT[i].danhgia2}</span>
                  <div class="voucher_discount">
                      <p>${arrDT[i].quatang}</p>
                  </div>
                  <center>
                      <button onclick="addIntoCart(this)" class="add-items"><i class="fa-solid fa-cart-plus"></i><span>Thêm vào giỏ</span></button>
                  </center>
              </div>
              </a>
            `;
        }
      
    }

    //Update number of devices
    setNumberMobile.innerText = '(' + numberMobile + ' sản phẩm)';
    setNumberLaptop.innerText = '(' + numberLaptop + ' sản phẩm)';
}

//PICK FILTER
function chonDT(){
  // Filter by device
  var arr_thietbi = document.getElementsByClassName('thietbi');
  var thietbiduocchon = [];

  for(i = 0; i < arr_thietbi.length; i++)
    {
      if(arr_thietbi[i].checked == true)
        thietbiduocchon.push(arr_thietbi[i].value);
    }

  // Filter by price
  var arr_giaban = document.getElementsByClassName('giaban');
  var giabanduocchon = [];

  for(i = 0; i < arr_giaban.length; i++)
    {
      if(arr_giaban[i].checked == true)
        giabanduocchon.push(arr_giaban[i].value);
    }

  // Filter by price
  var arr_hang = document.getElementsByClassName('hang');
  var hangduocchon = [];

  const clickAll = document.querySelector('.hang[value = "0"]');

  clickAll.addEventListener('click',()=>{
    if(clickAll.checked != false)
      {
        for(i = 1; i< arr_hang.length; i++ )
          arr_hang[i].checked = false;
      }
    
  })

  for(i = 0; i < arr_hang.length; i++)
    { 
      if(arr_hang[i].checked == true && arr_hang[i].value != 0)
        {
          document.querySelector('.hang[value = "0"]').checked = false;
          hangduocchon.push(arr_hang[i].value)
        }
    }

  //Filter by stars
  var arr_sao = document.getElementsByClassName('sao');
  var saoduocchon = [];

  for(i = 0; i < arr_sao.length; i++)
    {
      if(arr_sao[i].checked == true)
        saoduocchon.push(arr_sao[i].value);
    }
          
  //Filter by need
  var arr_nhucau = document.getElementsByClassName('nhucau');
  var nhucauduocchon = [];

  for(i = 0; i < arr_nhucau.length; i++)
    {
      if(arr_nhucau[i].checked == true)
        nhucauduocchon.push(arr_nhucau[i].value);
    }

  hienDT(thietbiduocchon, giabanduocchon, hangduocchon, saoduocchon, nhucauduocchon);


}


//--------------------------PRODUCT IMAGE------------------------

let imageIndex = 1;
let images = document.getElementsByClassName("myImages");
const image_mini = document.querySelectorAll(".mini_img");

if (images.length > 0){
  currentImages(imageIndex);
}

function positionImages(n) {
  currentImages(imageIndex += n);
}

function currentImages(n) {
  let i;
  let images = document.getElementsByClassName("myImages");
  if (n > images.length) {imageIndex = 1}    
  if (n < 1) {imageIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
  }
  images[imageIndex-1].style.display = "block"; 
  removeImgActiveClasses();
  image_mini[imageIndex-1].classList.add("img_active"); 
}

image_mini.forEach((panel) => {
  panel.addEventListener("click", () => {
      removeImgActiveClasses();
      panel.classList.add("img_active");
    });

});

function removeImgActiveClasses() {
  image_mini.forEach((panel) => {
    panel.classList.remove("img_active");
  });
}

// -------------------------Add Items----------------------------
document.addEventListener('DOMContentLoaded', function() {
  loadCartFromLocalStorage();
  countCartItems();
});

function addIntoCart(button) {
  event.preventDefault();
  const productItem = button.closest('.product_item');
  const title = productItem.querySelector('.item_title p').innerText;
  const price = productItem.querySelector('.price').innerText;
  const imageSrc = productItem.querySelector('img').src;

  let products = JSON.parse(localStorage.getItem('cartItems')) || [];

  let productExists = false;

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  for (let i = 0; i < products.length; i++) {
      if (products[i].title === title) {
          products[i].quantity += 1;
          productExists = true;
          break;
      }
  }

  // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
  if (!productExists) {
      products.push({ title, price, imageSrc, quantity: 1 });
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem('cartItems', JSON.stringify(products));

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  countCartItems();

  // Hiển thị giỏ hàng
  renderCartItems(products);
}
  // Đến số lượng sản phẩm trong giở hàng
function countCartItems() {
  const products = JSON.parse(localStorage.getItem('cartItems')) || [];
  const itemCount = products.reduce((total, product) => total + product.quantity, 0);
  document.getElementById('cart-item-count').innerText = itemCount;
  toggleEmptyCartMessage(products);
}

function removeFromCart(button) {
  const li = button.closest('li');
  const title = li.querySelector('.item-title').innerText;

  let products = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Xóa sản phẩm khỏi giỏ hàng
  products = products.filter(product => product.title !== title);

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem('cartItems', JSON.stringify(products));

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  countCartItems();

  // Hiển thị giỏ hàng
  renderCartItems(products);
}

function loadCartFromLocalStorage() {
  const products = JSON.parse(localStorage.getItem('cartItems')) || [];
  renderCartItems(products);
  toggleEmptyCartMessage(products);
}

function renderCartItems(products) {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  products.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
          <div class="flex" style="align-items: center">
            <img src="${product.imageSrc}" alt="${product.title}" width="60" height="60">
            <div style="margin-left: 5%">
              <span class="item-title">${product.title}</span> 
              <br> 
              <span class="item-price">Giá: ${product.price}</span> 
              <br>
              <span class="item-quantity">Số Lượng: ${product.quantity}</span>
            </div>
            <div style="margin-left: 5%">
              <button class="remove-item" onclick="removeFromCart(this)">Xóa</button>
            </div>
          </div>
      `;
      cartItems.appendChild(li);
  });
}
  // Ẩn hiện ảnh trong giỏ
function toggleEmptyCartMessage(products) {
  const noProductDiv = document.getElementById('no-product');
  const cartItems = document.getElementById('cart-items');
  const checkoutBtn=document.getElementById('checkout');
  if (products.length === 0) {
      noProductDiv.style.display = 'block';
      cartItems.style.display = 'none';
      checkoutBtn.style.display='none';
  } else {
      noProductDiv.style.display = 'none';
      cartItems.style.display = 'block';
      checkoutBtn.style.display='block';
  }
}

// Xuất các thông tin đã thêm vào giỏ hàng qua trang khác và thanh toán
document.addEventListener('DOMContentLoaded', function() {
  loadCheckoutItems();
});

function loadCheckoutItems() {
  const products = JSON.parse(localStorage.getItem('cartItems')) || [];
  const checkoutItems = document.getElementById('checkout-items');
  checkoutItems.innerHTML = '';

  let totalPrice = 0;

  products.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
          <img src="${product.imageSrc}" alt="${product.title}">
          <span class="item-title">${product.title}</span>
          <span class="item-price">${product.price}</span>
          <div class="quantity-control">
              <button class="change-quantity" onclick="changeQuantity('${product.title}', -1)">-</button>
              <span class="item-quantity">SL: ${product.quantity}</span>
              <button class="change-quantity" onclick="changeQuantity('${product.title}', 1)">+</button>
          </div>
          <button class="delete-item" onclick="removeItem('${product.title}')">Xóa</button>
      `;
      checkoutItems.appendChild(li);

      // Chuyển đổi giá thành số chính xác
      const price = parseFloat(product.price.replace(/[^\d]/g, ''));
      totalPrice += price * product.quantity;
  });

  // Định dạng tổng giá trị tiền thành đúng định dạng VND
  document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function changeQuantity(title, delta) {
  let products = JSON.parse(localStorage.getItem('cartItems')) || [];

  products = products.map(product => {
      if (product.title === title) {
          product.quantity += delta;
      }
      return product;
  }).filter(product => product.quantity > 0);

  localStorage.setItem('cartItems', JSON.stringify(products));

  loadCheckoutItems();
}

function removeItem(title) {
  let products = JSON.parse(localStorage.getItem('cartItems')) || [];

  products = products.filter(product => product.title !== title);

  localStorage.setItem('cartItems', JSON.stringify(products));

  loadCheckoutItems();
}

function submitOrder() {
  alert('Đơn hàng của bạn đã được xác nhận!');
  localStorage.removeItem('cartItems');
  window.location.href = 'index.html';
}

function confirmOrder() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  document.getElementById('summary-name').innerText = `Họ tên: ${name}`;
  document.getElementById('summary-address').innerText = `Địa chỉ: ${address}`;
  document.getElementById('summary-phone').innerText = `Số điện thoại: ${phone}`;

  document.getElementById('order-form').style.display = 'none';
  document.getElementById('order-summary').style.display = 'block';
}

//--------------------------ADMIN PAGE---------------------------
const dropmenu = document.querySelectorAll('.admin_navbar > ul > li > a');

for (let index = 0; index < dropmenu.length; index++) {
  dropmenu[index].addEventListener('click',(a)=>{
    if(dropmenu[index].parentNode.querySelector('ul').classList.contains('li_active')){   
      a.preventDefault();
      dropmenu[index].parentNode.querySelector('ul').classList.remove('li_active');
    }else{
      a.preventDefault();
      dropmenu[index].parentNode.querySelector('ul').classList.add('li_active');
    }
  })
}