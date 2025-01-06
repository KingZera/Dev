document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const skuId = document.getElementById('sku-id').value;
    const productId = document.getElementById('product-id').value;
    const reference = document.getElementById('reference').value;
    const derivation = document.getElementById('derivation').value;
    const code = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ skuId, productId, reference, derivation, code, name })
    })
    .then(response => response.json())
    .then(data => {
        alert('Produto salvo com sucesso!');
        document.getElementById('product-form').reset();
    })
    .catch(error => console.error('Erro:', error));
});
