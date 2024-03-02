// <<<<<<<<<<<<<<Counter>>>>>>>>>>>>>>>>>>>

document.querySelectorAll('.counter_new').forEach(counter => {
    let target = parseInt(counter.dataset.target);
    let duration = 2000;
    let range = target;
    let current = 0;
    let increment = target > current ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        counter.textContent = current;
        if (current == target) clearInterval(timer);
    }, stepTime);
});

// <<<<<<<<<<<<<<<<Counter_end>>>>>>>>>>>>>>>


//sticky menu
window.addEventListener('scroll', function () {
    var header = document.getElementById('main_header');
    if (window.scrollY > 10) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});



//mobile menu
let monav = document.querySelector('.menu_line');

monav.addEventListener("click", () => {
    let adcls = document.querySelector('.mobile_nav')
    adcls.classList.toggle("nav_add")
    let toch = document.querySelector('.bx-menu')
    toch.classList.toggle("bx-x")
})


// animation
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function handleScroll() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }

    });
}
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);



//Bottom To Top Button
mybutton = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
