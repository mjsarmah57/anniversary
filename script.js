// script.js
document.addEventListener('DOMContentLoaded', () => {
    const welcomePage = document.getElementById('welcome-page');
    const datePopup = document.getElementById('date-popup');
    const anniversaryPage = document.getElementById('anniversary-page');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const submitDateButton = document.getElementById('submit-date-button');
    const anniversaryDateInput = document.getElementById('anniversary-date-input');
    const dateError = document.getElementById('date-error');
    const timerSpan = document.getElementById('timer');
    const timelineEvents = document.querySelectorAll('.timeline-event'); // Select timeline events


    // **IMPORTANT: Set your actual anniversary date here (YYYY-MM-DD)**
    const actualAnniversaryDate = new Date('2024-02-14'); // Example: February 14, 2024
    const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };


    yesButton.addEventListener('click', () => {
        welcomePage.classList.add('hidden');
        datePopup.classList.remove('hidden');
    });

    noButton.addEventListener('click', () => {
        // You can redirect to another page or display a message here
        alert("Perhaps the stars will align another time! ✨"); // Themed 'No' message
    });

    submitDateButton.addEventListener('click', () => {
        const inputDate = new Date(anniversaryDateInput.value);

        if (isNaN(inputDate)) {
            dateError.textContent = "Please illuminate a valid date!"; // Themed error message
            return;
        }

        if (inputDate.toDateString() === actualAnniversaryDate.toDateString()) {
            datePopup.classList.add('hidden');
            anniversaryPage.classList.remove('hidden');
            startTimer();
            animateTimeline(); // Start timeline animation after successful date entry
        } else {
            dateError.textContent = "The stars are not aligned yet. Try again."; // Themed error message
        }
    });

    function startTimer() {
        setInterval(() => {
            const now = new Date();
            const timeDifference = now - actualAnniversaryDate;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const years = Math.floor(days / 365);
                const remainingDays = days % 365;

                timerSpan.textContent = `${years} orbits, ${remainingDays} days in our galaxy!`; // Themed timer text
            } else {
                timerSpan.textContent = "Our cosmic journey is about to begin!"; // Themed future anniversary message
            }
        }, 1000); // Update every second
    }

    function animateTimeline() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, {
            threshold: 0.2 // Trigger animation when 20% of element is visible
        });

        timelineEvents.forEach(event => {
            observer.observe(event); // Observe each timeline event
        });
    }
});