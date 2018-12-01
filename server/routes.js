const router = require('express').Router();
const controller = require('./controller');
const productsController = require('./productsController');
const commentsController = require('./commentsController');

router.route('/products/:id').get(productsController.get);
router.route('/products/:id/comments').get(controller.get);
router.route('/products/:id/comments').post(controller.post);
router.route('/comments/:id').get(commentsController.get);

module.exports = router;
