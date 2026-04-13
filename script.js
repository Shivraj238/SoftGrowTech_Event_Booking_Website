const bookingForm = document.getElementById('bookingForm');
const ticketInput = document.getElementById('ticketCount');
const totalPriceSpan = document.getElementById('totalPrice');
const successMessage = document.getElementById('successMessage');
const formWrapper = document.getElementById('formWrapper');
const confirmationDetails = document.getElementById('confirmationDetails');

// 1. Update Price Automatically
ticketInput.addEventListener('input', () => {
    const price = ticketInput.value * 50;
    totalPriceSpan.textContent = `$${price}`;
});

// 2. Form Submission logic
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload
    
    let isvalid = true;
    const inputs = bookingForm.querySelectorAll('input');

    // Simple validation check
    inputs.forEach(input => {
        const group = input.parentElement;
        if (!input.value || !input.checkValidity()) {
            group.classList.add('invalid');
            isvalid = false;
        } else {
            group.classList.remove('invalid');
        }
    });

    if (isvalid) {
        const name = document.getElementById('fullName').value;
        const tickets = ticketInput.value;

        // Populate success message
        confirmationDetails.innerHTML = `Confirmed for <strong>${name}</strong>.<br> Total: <strong>$${tickets * 50}</strong>`;
        
        // Hide the form and show the success message
        formWrapper.classList.add('hidden');
        successMessage.classList.remove('hidden');
    }
});