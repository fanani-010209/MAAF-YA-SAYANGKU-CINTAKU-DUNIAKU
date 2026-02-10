const music = document.getElementById("bgMusic");

// Jika musik sudah pernah dinyalakan, langsung lanjut
if (localStorage.getItem("music") === "on") {
  music.currentTime = localStorage.getItem("musicTime") || 0;
  music.play();
}

// Simpan waktu musik setiap 500ms
setInterval(() => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
}, 500);

// Aktifkan musik saat klik pertama (aturan browser)
document.addEventListener("click", () => {
  music.play();
  localStorage.setItem("music", "on");
}, { once: true });


// ===== EMOJI MELAYANG =====
const emojis = ["❤️", "😍", "😊"];
const container = document.querySelector(".emoji-container");

setInterval(() => {
  if (!container) return;

  const e = document.createElement("div");
  e.className = "emoji";
  e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  e.style.left = Math.random() * 100 + "vw";
  e.style.bottom = "0px";

  container.appendChild(e);
  setTimeout(() => e.remove(), 4000);
}, 600);
