document.addEventListener("DOMContentLoaded", () => {
// Sélectionner tous les éléments à animer
const home_left_Element = document.querySelectorAll(".left");
const home_right_Element = document.querySelectorAll(".right");
const about_contImg = document.querySelectorAll(".cont-img");

// Créer l'instance d'IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        // Ajouter la classe 'visible' quand l'élément est dans le viewport
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        } else {
        // Ajouter la classe 'hidden' quand l'élément sort du viewport
        entry.target.classList.remove("visible");
        entry.target.classList.add("hidden");
        }
    });
    },
    {
    threshold: 0.2, // 20% de l'élément visible pour déclencher
    }
);

// Observer chaque élément
    home_left_Element.forEach((element) => observer.observe(element));
    home_right_Element.forEach((element) => observer.observe(element));
    about_contImg.forEach((element) => observer.observe(element));
});