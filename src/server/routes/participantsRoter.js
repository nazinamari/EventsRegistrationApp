const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

router.get('/', async (req, res) => {
    try {
        const participants = await Participant.find();
        res.json(participants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
