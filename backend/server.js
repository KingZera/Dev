const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin1591@ruptura.ywdol.mongodb.net/?retryWrites=true&w=majority&appName=Ruptura', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());

// Rota para redirecionar para a página de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/products', productRoutes);

app.use(express.static(path.join(__dirname, '../')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
