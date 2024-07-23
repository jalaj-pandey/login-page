const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("App is Working");
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
