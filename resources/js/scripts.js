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
    if (txtValue.toUpperCase().indexOf(valueSearch.toUpperCase()) > -1) {
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
      usernameError.textContent = '';
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
})

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
function addIntoCart(x){
    var product_item=x.parentElement.children;
    alert(product_item[2].children[0].innertext);
}

//--------------------------ADMIN PAGE---------------------------
const dropmenu = document.querySelectorAll('.admin_navbar > ul > li > a');

for (let index = 0; index < dropmenu.length; index++) {
  dropmenu[index].addEventListener('click',(a)=>{
    // a.preventDefault();
    // removeColorLi();
    // dropmenu[index].style.color = "#1e90ff";
    if(dropmenu[index].parentNode.querySelector('ul').classList.contains('li_active')){   
      dropmenu[index].parentNode.querySelector('ul').classList.remove('li_active');
    }else{
      a.preventDefault();
      dropmenu[index].parentNode.querySelector('ul').classList.add('li_active');
    }
  })
}

// function removeColorLi() {
//   for (let index = 0; index < dropmenu.length; index++) {
//     dropmenu[index].style.color = "#a4b0be";
//   }
// }