const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb+srv://admin:admin1591@ruptura.ywdol.mongodb.net/?retryWrites=true&w=majority&appName=Ruptura', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const createAdminUser = async () => {
    const username = 'gomes';
    const name = 'Administrador';
    const email = 'ggustavo.pessoal@gmail.com';
    const password = 'pudimsal50';
    const hashedPassword = await bcrypt.hash(password, 10);
    const permissions = ['create_user', 'delete_user', 'create_collection', 'add_product'];

    const adminUser = new User({
        username,
        name,
        email,
        password: hashedPassword,
        permissions
    });

    await adminUser.save();
    console.log('Usuário administrador criado com sucesso!');
    mongoose.connection.close();
};

createAdminUser().catch(error => {
    console.error('Erro ao criar usuário administrador:', error);
    mongoose.connection.close();
});
