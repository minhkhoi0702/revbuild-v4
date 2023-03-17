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
// jquery for toggle dropdown menu
$(document).ready(function () {
    $(".sub-btn").click(function (){
        $(this).next(".sub-menu").slideToggle();
    })
})
// FAQ
const accordion = document.getElementsByClassName("contentBx");
        for (i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("active");
            });
        }