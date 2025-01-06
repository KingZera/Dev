document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/auth/user', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('admin-name').textContent = data.username;
        if (data.username !== 'gomes') {
            document.getElementById('create-user-button').style.display = 'none';
            document.getElementById('manage-collections-button').style.display = 'none';
        }
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('create-user-button').addEventListener('click', function() {
    window.location.href = 'usuarios.html';
});

document.getElementById('manage-collections-button').addEventListener('click', function() {
    window.location.href = 'colecoes.html';
});

document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});
