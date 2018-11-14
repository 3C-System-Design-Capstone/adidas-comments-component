const router = require('express').Router();
const controller = require('./controller');

router.route('/comments').get(controller.get);

router.route('/prodId::id').post(controller.post);

router.route('/prodId::id/:type/limit=:limit').get(controller.getSort);

module.exports = router;
