window.addEventListener('DOMContentLoaded', () => {
    addNewsletterSubmitEventListener();
});

function addNewsletterSubmitEventListener() {
    document.querySelector('.newsletter-form').addEventListener('submit', function(e){
        e.preventDefault();
        
        const emailInput = document.querySelector("#emailInput");
        const buttonTextNodes = document.querySelectorAll(".billboard-btn .billboard-btn-title");
    
        const selectedButtonTextNode = Array.from(buttonTextNodes).filter(node => {
            return node.innerText.toLowerCase() === emailInput.value.toLowerCase();
        })[0];
    
        selectedButtonTextNode && (selectedButtonTextNode.parentElement.style.visibility = 'hidden');

        emailInput.value = "";
    })
}