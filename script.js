const body = document.querySelector("body");

function createEffect(xPos, yPos) {
  const span = document.createElement("span");

  span.style.left = `${xPos}px`;
  span.style.top = `${yPos}px`;

  const size = Math.random() * 100;
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;

  body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
}

body.addEventListener("mousemove", (e) => {
  createEffect(e.offsetX, e.offsetY);
});

body.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  createEffect(touch.clientX, touch.clientY);
});

body.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  createEffect(touch.clientX, touch.clientY);
});
