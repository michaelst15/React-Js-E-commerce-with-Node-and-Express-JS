const express = require('express');
const router = express.Router();
const {Buku} = require('./Product/Model');
 

router.get('/btc/:id/:country/:price', (req, res) => { 
    const Bitcoin = req.params;
    res.json({
        Crypto: Bitcoin, 
        status: "OK",
        NameCrypto: "Bitcoin"
    })
})

router.post('/produk', async (req, res) => {
    const {id, nama_buku, jenis_buku, harga_buku} = req.body;
    try {
        await Buku.sync();
        const result = await Buku.create({id, nama_buku, jenis_buku, harga_buku});
        res.send(result);
    }
    catch(e) {
      res.send(e);
    }
})

// router.post('/eth/:id/:country/:price', (req, res) => {
//     const Etherium = req.params;
//     res.json({
//         Crypto: Etherium,
//         status: "OK",
//         NameCrypto: "Etherium"
//     })
// })

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