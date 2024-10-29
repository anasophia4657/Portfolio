
const phrases = ["A Graphic Designer", "A 3D Artist", "A Brand Designer"];
const typingElement = document.getElementById("typing_animation");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }

    typingElement.textContent = currentPhrase.substring(0, currentCharIndex);

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // When the phrase is complete, pause and start deleting
        setTimeout(() => {
            isDeleting = true;
        }, 2000); // Pause for 2 seconds before starting to delete
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next phrase
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop back to the first phrase
    }

    setTimeout(type, isDeleting ? 100 : 200); // Change typing speed
}

// Start typing effect
type();







function sendMail() {
    var firstname = $('#first-name').val();
    var lastname = $('#last-name').val();
    var subject = $('#subject').val();
    var message = $('#text-area').val();
    window.location.href = 'mail to:ribeiro4657@gmail.com subject= ' + firstname + lastname + ' (' + subject + ')' + '&body=' + message;
};


