// Add floating hearts dynamically
const hearts = document.querySelector(".hearts");
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = `floatHeart ${5 + Math.random() * 5}s linear infinite`;
  hearts.appendChild(heart);
}
