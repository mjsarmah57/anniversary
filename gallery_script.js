// gallery_script.js
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#filter-section .filter-button');
    const photoItems = document.querySelectorAll('#gallery-section .photo-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const selectedYear = button.dataset.year;

            photoItems.forEach(item => {
                const itemYear = item.dataset.year;
                if (selectedYear === 'all' || selectedYear === itemYear) {
                    item.style.display = 'block'; // Show item
                } else {
                    item.style.display = 'none';  // Hide item
                }
            });
        });
    });

    // **IMPORTANT:  Initially show all photos or default to 'all' filter
    // You can adjust this based on your preference. For now, 'All Years' is active by default in HTML. **
});