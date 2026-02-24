
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

const skills = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.classList.contains("html") ? "90%" :
                                       entry.target.classList.contains("css") ? "80%" :
                                       entry.target.classList.contains("js") ? "70%" : "0";
        }
    });
});

skills.forEach(skill => skillObserver.observe(skill));


const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        header.style.background = "rgba(15, 23, 42, 0.85)";
    }
});