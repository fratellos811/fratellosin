burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')



//burger.addEventListener('click', () => {
  //navbar.classList.toggle('v-list');
  //rightNav.classList.toggle('v-list');
  //navlist.classList.toggle('h-nav');
//})




var i = 0;
var txt = `If you are interested in pursuing a career in cybersecurity, then starting with us could be a great option for you. Our organization provides a comprehensive platform to launch your cybersecurity career, offering a wide range of opportunities to learn and grow in this field.

Our team of cybersecurity experts will provide you with the necessary training, guidance, and support to build a strong foundation in this dynamic and ever-evolving field. You will get exposure to the latest technologies, tools, and methodologies used in the industry, which will help you to develop your skills and gain practical experience.

Starting your cybersecurity career with us means you will be part of a community that is passionate about cybersecurity and committed to making a positive impact in the world. You will have access to networking opportunities, industry events, and mentorship programs, which will help you to connect with other professionals in the field and learn from their experiences.

We are dedicated to providing a safe, inclusive, and supportive environment where you can thrive and reach your full potential. So if you are ready to take the first step towards a rewarding career in cybersecurity, join us today and let's start your journey together!`;

var speed = 15;

function typeWriter() {
  
  if (i < txt.length) {
    document.getElementById("terminal1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

