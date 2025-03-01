const openBtn = document.getElementById("openModal");
const closeCtn = document.getElementById("closeModal");
const Modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    Modal.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    Modal.classList.remove("open");
})