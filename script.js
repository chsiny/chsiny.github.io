// Get the modal element
const modal = document.getElementById('aboutModal');

// Get the button that opens the modal
const btn = document.querySelector('.about-button');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close');

// When the user clicks the button, open the modal
btn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});