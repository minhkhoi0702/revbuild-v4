const header = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 150);
});
//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");

const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
window.onscroll = () => {
    navigation.classList.remove("active");
};
