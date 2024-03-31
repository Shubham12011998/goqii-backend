const User = require('../models/User');

const UserController = {
    createUser: (req, res) => {
        User.createUser(req.body, (err, result) => {
            if (err) {
                if (err.message.startsWith('Invalid date')) {
                    return res.status(400).send(err.message);
                } else {
                    return res.status(500).send(`Error creating user ${err}`);
                }
            }
            return res.status(201).send('User created successfully');
        });
    },
    getAllUsers: (req, res) => {
        User.getAllUsers((err, results) => {
            if (err) {
                return res.status(500).send('Error fetching users');
            }
            return res.status(200).json(results);
        });
    },
    updateUser: (req, res) => {
        User.updateUser({ ...req.body, id: req.params.id }, (err, result) => {
            if (err) {
                if (err.message.startsWith('Invalid date')) {
                    return res.status(400).send(err.message);
                } else {
                    return res.status(500).send(`Error updating user with id ${req.params.id}`);
                }
            }
            return res.status(200).send(`User with id ${req.params.id} updated successfully`);
        });
    },
    deleteUser: (req, res) => {
        User.deleteUser(req.params.id, (err, result) => {
            if (err) {
                return res.status(500).send(`Error deleting user with id ${req.params.id}`);
            }
            return res.status(200).send(`User with id ${req.params.id} deleted successfully`);
        });
    }
};

module.exports = UserController;
