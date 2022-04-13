const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const { police_check } = require('../../middlewares');
const categoryController = require('./controller');



router.get('/categorys', categoryController.index);
router.post('/categorys', multer({dest: os.tmpdir()}).single('image'), police_check('create', 'Category'), categoryController.store);
router.put('/categorys/:id', multer({dest: os.tmpdir()}).single('image'), police_check('update', 'Category'), categoryController.update);
router.delete('/categorys/:id', police_check('delete', 'Category'), categoryController.destroy);


module.exports = router; 