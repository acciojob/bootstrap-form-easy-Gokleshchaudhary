document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('internForm');
    
    // Add validation for email format
    const emailInput = document.getElementById('email-input');
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate all fields
        const isValid = Array.from(form.elements).every(element => {
            if (element.checkValidity()) {
                element.classList.remove('is-invalid');
                return true;
            } else {
                element.classList.add('is-invalid');
                return false;
            }
        });

        if (isValid) {
            // Form is valid, you can submit the data here
            console.log('Form submitted successfully!');
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert('Application submitted successfully!');
            form.reset();
        }
    });
});