const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const participantRoutes = require('./routes/participants');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
    .connect('mongodb://localhost:27017/eventDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/participants', participantRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
