/*
=======================================================================================================================================
==================================== CODES POUR L'ANIMATION D'APPARITION DES ELEMENT HTML =============================================
=======================================================================================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
// Sélectionner tous les éléments à animer
const home_left_Element = document.querySelectorAll(".left");
const home_right_Element = document.querySelectorAll(".right");
const about_contImg = document.querySelectorAll(".cont-img");
const about_contData = document.querySelectorAll(".cont-data");
const services = document.querySelectorAll(".service");
const langage = document.querySelectorAll(".langage");
const progressCont = document.querySelectorAll(".cont-progress");
const pourcent = document.querySelectorAll(".pourcent");
const portfolio = document.querySelectorAll(".folio");
const contact = document.querySelectorAll(".contact");

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
    about_contData.forEach((element) => observer.observe(element));
    services.forEach((element) => observer.observe(element));
    langage.forEach((element) => observer.observe(element));
    progressCont.forEach((element) => observer.observe(element));
    pourcent.forEach((element) => observer.observe(element));
    portfolio.forEach((element) => observer.observe(element));
    contact.forEach((element) => observer.observe(element));
});


/*
=======================================================================================================================================
==================================== CODES POUR DECLENCHER LE MENU =============================================
=======================================================================================================================================
*/

let hamburger = document.querySelector(".hamburger");
let hireMeBtn = document.querySelector(".hire-btn");
let menu = document.querySelector("ul");

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active')
    hireMeBtn.classList.toggle("showBtn")
})

// fermer le menu apres un clic sur un onglet de menu
let onglet = document.querySelectorAll('li');
    onglet.forEach(element => {
    element.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
});