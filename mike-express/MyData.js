const express = require('express');
const router = express.Router();

router.get('/btc/:id/:country/:price', (req, res) => { 
    const Bitcoin = req.params;
    res.json({
        Crypto: Bitcoin,
        status: "OK",
        NameCrypto: "Bitcoin"
    })
})

router.post('/eth/:id/:country/:price', (req, res) => {
    const Etherium = req.params;
    res.json({
        Crypto: Etherium,
        status: "OK",
        NameCrypto: "Etherium"
    })
})

router.put('/usdt/:id/:country/:price', (req, res) => {
    const Theter = req.params;
    res.json({
        Crypto: Theter,
        status: "OK",
        NameCrypto: "Theter"
    })
})

router.delete('/bnb/:id/:country/:price', (req, res) => {
    const BinanceCoin = req.params;
    res.json({
        Crypto: BinanceCoin,
        status: "OK",
        NameCrypto: "Binance Coin"
    })
})

module.exports = router;