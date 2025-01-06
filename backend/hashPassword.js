const bcrypt = require('bcryptjs');

const password = 'pudimsal50';
bcrypt.hash(password, 10, function(err, hash) {
    if (err) throw err;
    console.log('Hash gerado:', hash);
});
