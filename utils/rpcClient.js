const Client = require('bitcoin-core');

const dotenv = require("dotenv");
dotenv.config();

exports.getRpcClient = () => {
    return new Client({
        host: process.env.RPC_HOST,
        port: process.env.RPC_PORT,
        username: process.env.RPC_USER,
        password: process.env.RPC_PASSWORD,
        version: process.env.BTC_VERSION
    });
};