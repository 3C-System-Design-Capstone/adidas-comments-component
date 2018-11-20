const router = require('express').Router();
const controller = require('./controller');
const productsController = require('./productsController');

router.route('/products/:id').get(productsController.get);
router.route('/products/:id/comments').get(controller.get);
router.route('/products/:id/comments').post(controller.post);

module.exports = router;
