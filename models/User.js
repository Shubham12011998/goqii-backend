const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class User {
    static createUser({ name, email, password, dob }, callback) {
        // Validate date of birth format
        if (!isValidDate(dob)) {
            return callback(new Error('Invalid date of birth format. Please provide a date in YYYY-MM-DD format.'));
        }

        const id = uuidv4();
        const INSERT_USER_QUERY = `INSERT INTO users (id, name, email, password, dob) VALUES (?, ?, ?, ?, ?)`;
        db.query(INSERT_USER_QUERY, [id, name, email, password, dob], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        });
    }

    static getAllUsers(callback) {
        const SELECT_ALL_USERS_QUERY = `SELECT * FROM users`;
        db.query(SELECT_ALL_USERS_QUERY, (err, results) => {
            if (err) {
                return callback(err);
            }
            return callback(null, results);
        });
    }

    static updateUser({ id, name, email, password, dob }, callback) {
        // Validate date of birth format
        if (dob && !isValidDate(dob)) {
            return callback(new Error('Invalid date of birth format. Please provide a date in YYYY-MM-DD format.'));
        }

        const UPDATE_USER_QUERY = `UPDATE users SET name = ?, email = ?, password = ?, dob = ? WHERE id = ?`;
        db.query(UPDATE_USER_QUERY, [name, email, password, dob, id], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        });
    }

    static deleteUser(id, callback) {
        const DELETE_USER_QUERY = `DELETE FROM users WHERE id = ?`;
        db.query(DELETE_USER_QUERY, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        });
    }
}

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}

module.exports = User;
