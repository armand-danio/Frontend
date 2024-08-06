document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value + '/' + document.getElementById('birthmonth').value + '/' + document.getElementById('birthyear').value;
    const email = document.getElementById('email').value;

    // Store form data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
    
    // Redirect to Page 3
    window.location.href = 'summary.html';
});
