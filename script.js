const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function showPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}
// Floating letters animation
const letters = ["K", "P", "❤️", "💖", "💞", "💘","💗","🦋❤️","🌸❤️","💝","💓"]; // add more symbols if you want
const colors = ["#FF3366", "#FF69B4", "#FFB6C1", "#FFC0CB", "#FF7F50", "#8A2BE2", "#00CED1"];

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random letter from array
    heart.innerText = letters[Math.floor(Math.random() * letters.length)];

    // Random color
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Random horizontal position
    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 3000);
}, 500); // every 0.5 sec
