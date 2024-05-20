document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".animated_fade");
  
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      const triggerTop = window.innerHeight / 5;
  
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;
  
        if (boxTop < triggerBottom && boxBottom > triggerTop) {
          box.classList.add("visible");
        } else {
          box.classList.remove("visible");
        }
      });
    };
  
    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Gọi ngay lập tức để kiểm tra trạng thái ban đầu
  });
  //faded end