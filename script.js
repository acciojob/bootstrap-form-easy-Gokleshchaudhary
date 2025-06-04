document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('internForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get all form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const college = document.getElementById('college').value;
        const graduationYear = document.getElementById('graduationYear').value;
        const rollNo = document.getElementById('rollNo').value;
        const terms = document.getElementById('terms').checked;
        
        // Basic validation
        if (!firstName || !lastName || !email || !college || !graduationYear || !rollNo || !terms) {
            alert('Please fill all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If all validations pass
        alert('Form submitted successfully!');
        form.reset();
    });
});