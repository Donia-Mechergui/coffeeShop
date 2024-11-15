const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const section = document.querySelectorAll('section');
const navLinks = document.querySelector('header .navbar a');
const scrollUpBtn = document.querySelector('#scroll-up');
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};
window.onscroll=()=>{
    navbar.classList.remove('active');
    section.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    if (window.scrollY > 50) {
        document.querySelector('#scroll-up').classList.add('active');
    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}
   

  


