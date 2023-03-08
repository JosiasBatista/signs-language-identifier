export default class HandGestureView {

  loop(fn) {
    requestAnimationFrame(fn);
  }

  highlightLetter(letter_gesture) {
    const element = document.getElementById(letter_gesture);

    if (!element) return;

    element.classList.add("highlighted");
    setTimeout(() => {
      element.classList.remove("highlighted")
    }, 1000);
  }
}