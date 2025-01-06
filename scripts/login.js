document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('token', data.token);
            window.location.href = 'dashboard.html';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário ou senha incorretos!'
            });
        }
    })
    .catch(error => console.error('Erro:', error));
});
