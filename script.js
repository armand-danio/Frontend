document.getElementById('welcomeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneCode = document.getElementById('phoneCode').value;
    
    if (phoneNumber === '173527250') { // Example validation
        // Store phone number in localStorage
        localStorage.setItem('phoneNumber', phoneCode + phoneNumber);
        
        // Redirect to Page 2
        window.location.href = 'registration.html';
    } else {
        alert('Invalid phone number.');
    }
});
