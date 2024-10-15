// Get all the card items
const cardItems = document.querySelectorAll('.card-item');
const infoContent = document.getElementById('info-content');

// Function to show typing animation
function typeText(text) {
    infoContent.innerHTML = ''; // Clear existing content
    let index = 0;
    function type() {
        if (index < text.length) {
            infoContent.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Speed of typing (50ms per character)
        }
    }
    type();
}

// Add event listeners to each card item
cardItems.forEach(card => {
    card.addEventListener('mouseover', function() {
        const info = card.getAttribute('data-info');
        typeText(info);
    });

    card.addEventListener('click', function() {
        const info = card.getAttribute('data-info');
        typeText(info);
    });
});
