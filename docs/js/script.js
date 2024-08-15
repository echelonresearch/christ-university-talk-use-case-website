document.addEventListener('DOMContentLoaded', (event) => {
    const presentationTimeElement = document.querySelector('#presentation-time');
    const teamSizeInput = document.querySelector('#team-size-input');

    teamSizeInput.addEventListener('input', () => {
        const teamSize = teamSizeInput.value;
        presentationTimeElement.textContent = `${teamSize} minutes`;
    });
});