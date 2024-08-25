import './header.css'
import './main_title.css'
import './workshop.css'
import './contact.css'
import logo from'./logo.jpeg'

document.querySelector('#logo').src = logo

let clicked = false
document.querySelector('.dropbtn').addEventListener('click', () => {
    if (clicked === false) {
        clicked = true
        document.querySelector("#myDropdown").classList.toggle("show");
    } else {
        clicked = false
        document.querySelector("#myDropdown").classList.toggle("show");
    }
})

// $(window).scroll(function(e){ 
//     var el = $('.boxed'); 
//     var isPositionFixed = (el.css('position') == 'fixed');
//     console.log(el)
//     if ($(this).scrollTop() > 200 && !isPositionFixed){ 
//       $el.css({'position': 'fixed', 'top': '0px'}); 
//     }
//     if ($(this).scrollTop() < 200 && isPositionFixed){
//       $el.css({'position': 'static', 'top': '0px'}); 
//     } 
//   });
let hasReachedTarget = false;
window.addEventListener('scroll', function () {

    // Get the current scroll position
    const boxed = document.querySelector(".boxed")
    const targetPosition = 220; // Target scroll position
    const currentPosition = window.scrollY || window.pageYOffset;

    if (window.innerWidth >= 1667) {

        if (currentPosition >= targetPosition && !hasReachedTarget) {
            // User scrolled down past the target position
            hasReachedTarget = true;
            console.l
            // Call the event for scrolling down
            boxed.classList.add('fixed')
            boxed.style.margin = '30px 30px 30px 71.5%'
        } else if (currentPosition < targetPosition && hasReachedTarget) {
            // User scrolled back up above the target position
            hasReachedTarget = false;
            // Call the event for scrolling up
            boxed.style.margin = '30px'

            boxed.classList.remove('fixed')
        }
        window.removeEventListener('scroll', arguments.callee);
    }

})