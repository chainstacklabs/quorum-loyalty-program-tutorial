module.exports = {
  networks: {
    development: {
        host: "127.0.0.1",
        port: 9545,
        network_id: "5777"
    },
    quorum: {
        host: "nd-123-456-789.rg-123-456.int.chainstack.com",
        port: 8545,
        network_id: "*",
        gasPrice: 0,
        gas: 4500000,
        type: "quorum"
    }
   }
};
