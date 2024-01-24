const flashcards = [
    { question: "What is JavaScript?", answer: "A programming language." },
    { question: "What is Java?", answer: "A programming language." },

    { question: "What is React?", answer: "A Javascript Library." },

    { question: "What is python?", answer: "A programming language." },

     
];

let currentCard = 0;
const intervalTime = 3000; // Time in milliseconds (3000ms = 3 seconds)

const flashcardElement = document.getElementById("flashcard");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
 

 
function displayCard() {
    const card = flashcards[currentCard];
    flashcardElement.innerHTML = `<div class='question'>Q: ${card.question}</div><div class='answer'>A: ${card.answer}</div>`;
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
}

nextButton.addEventListener("click", nextCard);
previousButton.addEventListener("click", () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    displayCard();
});

// Automatic scroll
setInterval(nextCard, intervalTime);

displayCard();
