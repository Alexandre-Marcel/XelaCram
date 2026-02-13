const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const closeBtn = document.getElementById("close");

yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupMessage.innerHTML = `
        <h2>OUIIII 🥰💕</h2>
        <img src="img/happy.gif" width="200">
    `;
});

noBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupMessage.innerHTML = `
        <h2>Oh non... 😢</h2>
        <img src="img/sad.gif" width="200">
    `;
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
