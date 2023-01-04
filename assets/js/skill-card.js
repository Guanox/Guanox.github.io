const skillCards = document.querySelectorAll('.skill-card');
const skillDescriptionContainer = document.querySelector('.skill-description-container');
const skillDescription = document.querySelector('.skill-description');

skillCards.forEach(skillCard => {
    skillCard.addEventListener('mouseover', event => {
        // Get the description for the hovered skill-card element
        const description = event.target.dataset.description;

        // Show the skill-description-container element
        skillDescriptionContainer.style.display = 'block';

        // Update the text of the skill-description element
        skillDescription.textContent = description;
    });

    skillCard.addEventListener('mouseout', event => {
        // Hide the skill-description-container element
        skillDescriptionContainer.style.display = 'none';
    });
});
