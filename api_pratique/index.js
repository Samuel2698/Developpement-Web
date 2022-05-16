const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'fe4cdaeaa216d015be9443ea84b4e8a8';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue à ma première API :)');
});

// GET Search Results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=/${searchQuery}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Serveur s'éxecutant dans ${PORT}`));






// // GET Product Details
// app.get('/products/:productId', async (req, res) => {
//     const { productId } = req.params;

//     try {
//         const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

//         res.json(JSON.parse(response));
//     } catch (error) {
//         res.json(error);
//     }
// });

// app.listen(PORT, () => console.log(`Serveur s'éxecutant dans ${PORT}`));

// // GET Product Offers
// app.get('/products/:productId/offers', async (req, res) => {
//     const { productId } = req.params;

//     try {
//         const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);

//         res.json(JSON.parse(response));
//     } catch (error) {
//         res.json(error);
//     }
// });

// app.listen(PORT, () => console.log(`Serveur s'éxecutant dans ${PORT}`));