import axios from 'axios';
import express from 'express';

// Creating express object
const app = express();

// Defining port number
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get("https://picsum.photos/200", { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Adjust content type based on image format
        res.send(response.data);
        console.log(response);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error fetching random image');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port`,port);
})