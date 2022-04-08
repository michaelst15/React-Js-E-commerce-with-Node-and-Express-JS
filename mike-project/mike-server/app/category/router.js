const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const categoryController = require('./controller');



router.get('/categorys', categoryController.index);
router.post('/categorys', multer({dest: os.tmpdir()}).single('image'), categoryController.store);
router.put('/categorys/:id', multer({dest: os.tmpdir()}).single('image'), categoryController.update);
router.delete('/categorys/:id', categoryController.destroy);


module.exports = router; 