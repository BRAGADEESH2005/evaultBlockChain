// backend/models/Record.js
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    hash: { type: String, required: true }
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
