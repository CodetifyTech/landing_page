
document.addEventListener('DOMContentLoaded', function() {
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// function applyAnimations(element, animations) {
//     let index = 0;

//     function applyNextAnimation() {
//       if (index >= animations.length) {
//         return;
//       }
//       const animation = animations[index];
//       element.classList.add('animate__animated', `animate__${animation}`);
      
//       element.addEventListener('animationend', function handleAnimationEnd() {
//         element.classList.remove('animate__animated', `animate__${animation}`);
//         element.removeEventListener('animationend', handleAnimationEnd);
//         index++;
//         applyNextAnimation();
//       }, { once: true });
//     }

//     applyNextAnimation();
// }

function onScroll() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
    if (isElementInViewport(element) && !element.classList.contains('visible')) {
        var animation = element.getAttribute('data-animation');
        element.classList.add('animate__animated', `animate__${animation}`, 'visible');
        
        // Lắng nghe sự kiện animationend để đặt lại các thuộc tính CSS
        element.addEventListener('animationend', function() {
        element.classList.remove('animate__animated', `animate__${animation}`);
        }, { once: true });
    }
    });
}

window.addEventListener('scroll', onScroll);
onScroll(); // Kiểm tra ngay khi tải trang
});

