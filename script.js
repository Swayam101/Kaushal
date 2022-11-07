const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links')
const loader = document.querySelector('.loader');
const main = document.querySelector('.kaushal-website');
const body = document.querySelector('body')


// loader
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1000);
}

init();


// Navbar
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  console.log("Button is active");
  menuLinks.classList.toggle('active');
  body.classList.toggle('is-nav');
  
// Nav button scroll
  for (var i = 0; i < navLinks.length; i++) {
    var self = navLinks[i];

    self.addEventListener(
      "click",
      function () {
        menu.classList.remove('is-active');
        menuLinks.classList.remove("active");
        body.classList.remove("is-nav");

      })
  }

})
// Get a Date

const countdown = () => {
  var one_day = 1000 * 60 * 60 * 24
  
  var present_date = new Date();
    
  var event_day = new Date(present_date.getFullYear(), 10, 15)
    
  if (present_date.getMonth() == 10 && present_date.getDate() > 15)
      event_day.setFullYear(event_day.getFullYear() + 1)
    
  var Result = Math.round(event_day.getTime() - present_date.getTime()) / (one_day);
    
  var Final_Result = Result.toFixed(0);

    document.querySelector(".mySpan").innerHTML = Final_Result;
   console.log("Yes This Function is Executing");
}

countdown()


// Modal

// Get the modal
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
let modal5 = document.getElementById("myModal5");
let modal6 = document.getElementById("myModal6");

let modal=[modal1,modal2,modal3,modal4,modal5,modal6]

// Get the button that opens the modal
let btn1 = document.querySelector("#knowmore1");
let btn2 = document.querySelector("#knowmore2");
let btn3 = document.querySelector("#knowmore3");
let btn4 = document.querySelector("#knowmore4");
let btn5 = document.querySelector("#knowmore5");
let btn6 = document.querySelector("#knowmore6");

let btn=[btn1,btn2,btn3,btn4,btn5,btn6]

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',(e)=>{
    modal[i].style.display="block";
  })
  
}
// When the user clicks on <span> (x), close the modal
for (let i = 0; i < modal.length; i++) {
    span[i].addEventListener('click',(e)=>{
         modal[i].style.display="none"
    })
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

  
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




// --------------------------------------------------



const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

