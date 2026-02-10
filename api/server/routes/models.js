const express = require('express');
const {
  modelController,
  modelControllerBase,
  modelControllerDapi,
} = require('~/server/controllers/ModelController');
const { requireJwtAuth } = require('~/server/middleware/');

const router = express.Router();
router.get('/', requireJwtAuth, modelController);
router.get('/base', requireJwtAuth, modelControllerBase);
router.get('/dapi', requireJwtAuth, modelControllerDapi);

module.exports = router;
