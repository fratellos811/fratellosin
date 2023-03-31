burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', () => {
  navbar.classList.toggle('v-list');
  rightNav.classList.toggle('v-list');
  navlist.classList.toggle('h-nav');
})




var i = 0;
var txt = `Hello fellow Hackers!! Would you Like to have a deep dive into cybersecurity. Learn Cybersecurity With us...`;

var speed = 50;

function typeWriter() {
  
  if (i < txt.length) {
    document.getElementById("terminal1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

