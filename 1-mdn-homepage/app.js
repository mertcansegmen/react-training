window.addEventListener('DOMContentLoaded', () => {
    addNewsletterSubmitEventListener();
});

function addNewsletterSubmitEventListener() {
    document.querySelector('.newsletter-form').addEventListener('submit', function(e){
        e.preventDefault();

        const emailInput = document.querySelector("#emailInput");

        addBillboardButton(emailInput.value);

        emailInput.value = "";
    })
}

function addBillboardButton(buttonText) {
    // Get container which the buttons will be added to
    const buttonContainer = document.querySelector(".billboard-btn-container");

    // Create button
    const button = document.createElement("a");
    button.classList.add("billboard-btn");
    button.classList.add("hvr-forward");
    button.addEventListener('click', () => newsletterButtonClicked(button));

    // Create span element for button text
    const textSpan = document.createElement("span");
    textSpan.classList.add("billboard-btn-title");

    // Create button text
    const text = document.createTextNode(buttonText)

    // Create icon
    const icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-arrow-right");

    // Combine them together
    buttonContainer.appendChild(button);
    button.appendChild(textSpan);
    button.appendChild(icon);
    textSpan.appendChild(text);
}

function newsletterButtonClicked(button) {
    button.style.display = 'none';
}