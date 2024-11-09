// Toggle Skills Section
const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || !skillsSection.style.display) {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});

// Download Resume as PDF
document.getElementById('download-resume').addEventListener('click', () => {
    window.print(); // Opens the print dialog to save as PDF
});
