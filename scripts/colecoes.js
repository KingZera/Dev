document.addEventListener('DOMContentLoaded', function() {
    fetchCollections();
});

function fetchCollections() {
    fetch('/api/collections', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(collections => {
        const collectionList = document.getElementById('collection-list');
        collectionList.innerHTML = '';
        collections.forEach(collection => {
            const collectionItem = document.createElement('div');
            collectionItem.classList.add('collection-item');
            collectionItem.innerHTML = `
                <h3>${collection.name}</h3>
                <p>Data de Início: ${collection.startDate}</p>
                <p>Data de Fim: ${collection.endDate}</p>
                <button onclick="editCollection('${collection._id}')">Editar</button>
                <button onclick="viewProducts('${collection._id}')">Produtos</button>
                <button onclick="addRemoveProducts('${collection._id}')">Adicionar/Excluir Produtos</button>
            `;
            collectionList.appendChild(collectionItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}

document.getElementById('collection-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('collection-name').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    
    fetch('/api/collections', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name, startDate, endDate })
    })
    .then(response => response.json())
    .then(data => {
        alert('Coleção salva com sucesso!');
        fetchCollections();
        document.getElementById('collection-form').reset();
    })
    .catch(error => console.error('Erro:', error));
});

function editCollection(collectionId) {
    alert('Funcionalidade de edição de coleção não implementada ainda.');
    // Implementação da edição pode ser adicionada aqui
}

function viewProducts(collectionId) {
    alert('Funcionalidade de visualização de produtos não implementada ainda.');
    // Implementação da visualização pode ser adicionada aqui
}

function addRemoveProducts(collectionId) {
    alert('Funcionalidade de adicionar/remover produtos não implementada ainda.');
    // Implementação da adição/remoção pode ser adicionada aqui
}
