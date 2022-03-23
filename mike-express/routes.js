const express = require('express');
const router = express.Router();
const {car} = require('./Product/Model');
 

router.get('/produk', async (req, res) => {
    const produk = await car.findAll();
    res.json(produk);
});

router.post('/produk', async (req, res) => {
 const {id, nama, produsen, Harga} = req.body;
    try{
        const user = await car.create({
            id: id,
            nama: nama,
            produsen: produsen,
            Harga: Harga
        })
        return res.json(user)
    }
    catch(error) {
        console.log(error)
    }
});

router.put('/produk/:id', async (req, res) => {
  const { id } = req.params;
  const {nama, produsen, Harga} = req.body;
    try {
        const result = await car.update({
            id: id,
            nama: nama,
            produsen: produsen,
            Harga: Harga
          },{
            where: { id }
          })
          res.send(result)
        }catch(err) {
           console.log(err)
     }
});

router.delete('/produk/:id', async (req, res) => {
     await car.destroy({  
                where: {
                    id: req.params.id
                }
            }).then(() => res.send('success delete'))
    });


module.exports = router;