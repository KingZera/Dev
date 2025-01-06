document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});

function fetchUsers() {
    fetch('/api/users', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'user-item';
            userItem.textContent = `${user.name} (${user.username}) - ${user.email}`;
            userList.appendChild(userItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ username, name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Usuário salvo',
            text: 'Usuário criado com sucesso!'
        });
        fetchUsers();
        document.getElementById('user-form').reset();
    })
    .catch(error => console.error('Erro:', error));
});
