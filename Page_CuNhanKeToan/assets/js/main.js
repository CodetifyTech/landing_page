document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      root: null, // Sử dụng viewport làm vùng gốc
      rootMargin: '0px', // Không thêm khoảng đệm xung quanh vùng gốc
      threshold: 0.15 // Kích hoạt khi 10% phần tử nằm trong viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.getAttribute('data-animation');
          element.classList.add('animate__animated', `animate__${animation}`, 'visible');
          
          // Lắng nghe sự kiện animationend để đặt lại các thuộc tính CSS
          element.addEventListener('animationend', function() {
            element.classList.remove('animate__animated', `animate__${animation}`);
          }, { once: true });

          observer.unobserve(element);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  });