// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Record = require('./models/Record');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/evault', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

app.post('/api/records', async (req, res) => {
    const { id, hash } = req.body;
    try {
        const record = new Record({ id, hash });
        await record.save();
        res.status(201).send(record);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/api/records/:id', async (req, res) => {
    try {
        const record = await Record.findOne({ id: req.params.id });
        if (!record) {
            return res.status(404).send('Record not found');
        }
        res.send(record);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
