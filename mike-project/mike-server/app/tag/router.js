const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const categoryController = require('./controller');



router.get('/tag', categoryController.index);
router.post('/tag', multer({dest: os.tmpdir()}).single('image'), categoryController.store);
router.put('/tag/:id', multer({dest: os.tmpdir()}).single('image'), categoryController.update);
router.delete('/tag/:id', categoryController.destroy);


module.exports = router; 