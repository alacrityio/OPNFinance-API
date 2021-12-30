const { handleSuccess, handleError } = require("../utils/requestHandlers");
const { getRpcClient } = require("../utils/rpcClient");

const rpcClient = getRpcClient();

exports.getblockchaininfo = async function (req, res) {
    //let info = await rpcClient.getBlockchainInfo();
    rpcClient.getBlockchainInfo().then((data) => {
        handleSuccess({ res, data });
    }).catch((error) => {
        handleError({ res, error });
    });
}

exports.getblockcount = function (req, res) {
    rpcClient.getBlockCount().then((data) => {
        handleSuccess({ res, data });
    }).catch((error) => {
        handleError({ res, error });
    });
}