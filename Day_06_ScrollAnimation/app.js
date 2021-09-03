const boxes = document.querySelectorAll(".box");
checkBoxes();
window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  const trigger = (window.innerHeight * 4) / 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
