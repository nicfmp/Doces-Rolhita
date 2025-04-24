const track = document.getElementById("carousel-track");
let currentScroll = 0;

function getItemWidth() {
  const item = track.querySelector(".circle-image");
  const style = window.getComputedStyle(item);
  const width = item.offsetWidth;
  const gap = parseInt(style.marginRight || 0); // caso use margem em vez de gap
  return width + 130; // 130 é o gap do CSS
}

function getVisibleItems() {
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
}

function moveCarousel(direction) {
  const itemWidth = getItemWidth();

  const containerWidth = track.parentElement.offsetWidth;
  const contentWidth = track.scrollWidth;
  const maxScroll = contentWidth - containerWidth;

  currentScroll += direction * itemWidth;

  if (currentScroll > maxScroll) {
    currentScroll = 0;
  } else if (currentScroll < 0) {
    currentScroll = maxScroll;
  }

  track.style.transform = `translateX(-${currentScroll}px)`;
}


window.addEventListener("resize", () => {
  currentScroll = 0; // reseta para evitar bug
  moveCarousel(0);
});
