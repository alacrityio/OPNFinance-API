const express = require("express");
const router = express.Router();

const btcManagement = require("../controllers/btcManagement");

router.get('/getblockchaininfo', btcManagement.getblockchaininfo);
router.get('/getblockcount', btcManagement.getblockcount);

module.exports = router;