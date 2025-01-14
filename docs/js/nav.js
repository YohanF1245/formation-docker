// Gestion de l'accordéon pour la navigation
document.addEventListener('DOMContentLoaded', function() {
    const moduleButtons = document.querySelectorAll('[data-accordion-toggle]');
    
    moduleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-accordion-toggle');
            const content = document.getElementById(targetId);
            const icon = button.querySelector('.accordion-icon');
            
            // Toggle de la classe hidden
            content.classList.toggle('hidden');
            
            // Rotation de l'icône
            if (content.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(90deg)';
            }
        });
    });
}); 