const express = require('express');
const mongoose = require('mongoose');
const User = require('./schema');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

const app = express();

const port = 3000;

app.use(express.json());

app.get('/getUser', (req, res) => {
    const { email } = req.query;

    User.find({ email: email })
        .then((users) => {
            res.send(users);
        })
        .catch((error) => {
            res.status(500).send('Failed to get users');
        });
});

app.put('/putUser', (req, res) => {
    const { email, name } = req.body;

    User.updateOne({ email: email }, { name: name })
        .then(() => {
            res.send('User updated successfully');
        })
        .catch((error) => {
            res.status(500).send('Failed to update user');
        });
});

app.delete('/deleteUser', (req, res) => {

    const { email } = req.query;

    User.deleteOne({ email: email })
        .then(() => {
            res.send('User deleted successfully');
        })
        .catch((error) => {
            res.status(500).send('Failed to delete user');
        });

});

app.post('/postUser', (req, res) => {

    const { name, email, password } = req.body;

    const user = new User({
        name,
        email,
        password
    });

    user.save()
        .then(() => {
            res.send('User created successfully');
        })
        .catch((error) => {
            res.status(500).send('Failed to create user');
        });

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});