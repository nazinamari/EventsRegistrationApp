// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// import './db.js';
// const participantRoutes = require('./routes/participantsRoter.js');

// const app = express();
// const PORT = 3000;

// app.use(morgan('tiny'));
// app.use(cors());
// app.use(express.json());

// app.use('/participants', participantRoutes);

// app.use((_, res) => {
//     res.status(404).json({ message: 'Route not found' });
// });

// app.use((err, req, res, next) => {
//     const { status = 500, message = 'Server error' } = err;
//     res.status(status).json({ message });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running. Use our API on port: ${PORT}`);
// });
