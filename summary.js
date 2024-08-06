document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from localStorage
    const phoneNumber = localStorage.getItem('phoneNumber');
    const name = localStorage.getItem('name');
    const birthday = localStorage.getItem('birthday');
    const email = localStorage.getItem('email');
    
    // Display data in the read-only text boxes
    document.getElementById('phoneNumber').value = phoneNumber;
    document.getElementById('name').value = name;
    document.getElementById('birthday').value = birthday;
    document.getElementById('email').value = email;
});
