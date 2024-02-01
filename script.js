const images = ["cat (1).png", "cat (2).png"];
let currentIndex = 0;

function changeImage() {
    const mainImage = document.getElementById("mainImage");

    mainImage.src = images[currentIndex];
 
    currentIndex = (currentIndex + 1) % images.length;

    const duration = currentIndex === 0 ? 500 : 2500;
    
    setTimeout(() => {
        changeImage();
    }, duration);
}

function generateRandomCatFact() {
    const catFacts = [
        "Cats have five toes on their front paws but only four on their back paws.",
        "Cats sleep for an average of 12-16 hours a day.",
        "A cat's nose is as unique as a human's fingerprint."
     ];

    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    
    const catFactText = document.getElementById("catFactText");
    catFactText.textContent = randomFact;

    const modal = document.getElementById("catFactModal");
    modal.style.display = "block";
}

changeImage();

const generateCatFactBtn = document.getElementById("generateCatFactBtn");
generateCatFactBtn.addEventListener("click", generateRandomCatFact);

const closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
    const modal = document.getElementById("catFactModal");
    modal.style.display = "none";
});
