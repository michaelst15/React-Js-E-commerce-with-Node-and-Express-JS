require('../mongoose');
const express = require('express');
const router = express.Router();
const {data} = require('../Product-mdb/Model');


router.get('/produk', async (req, res) => {
    const produk = await data.find();
    res.json(produk)
})


router.post('/produk', async (req, res) => {
    const {proffession, status, desc_job} = req.body;
       try{
           const user = await data.create({
               proffession: proffession,
               status: status,
               desc_job: desc_job,
           })
           return res.json(user)
       }
       catch(error) {
           console.log(error) 
       }
   });

router.put('/produk/:id', async (req, res) => {
    const id = req.params.id
    const {proffession, status, desc_job} = req.body
       try{
           const user = await data.updateOne({
            id: id,
            proffession: proffession,
            status: status,
            desc_job: desc_job
            })
           Object.assign(user, req.body); 
           return res.send(user);
       }
       catch(error) {
           console.log(error) 
       }
   });

router.delete('/produk/:id', async (req,res) => {
    const id = req.params
    await data.deleteOne({
       id : id
    })
    .then(() => res.json('delete success'))
    .catch(() => res.json('delete failed'))
})


module.exports = router;