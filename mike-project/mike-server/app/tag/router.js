const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const { police_check } = require('../../middlewares');
const categoryController = require('./controller');



router.get('/tag', categoryController.index);
router.post('/tag', multer({dest: os.tmpdir()}).single('image'), police_check('create', 'Tag'), categoryController.store);
router.put('/tag/:id', multer({dest: os.tmpdir()}).single('image'), police_check('update', 'Tag'), categoryController.update);
router.delete('/tag/:id', police_check('delete', 'Tag'), categoryController.destroy);


module.exports = router; 