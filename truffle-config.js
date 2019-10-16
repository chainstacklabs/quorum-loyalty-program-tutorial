const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15";

module.exports = {
  networks: {
    development: {
        host: "127.0.0.1",
        port: 9545,
        network_id: "5777"
    },
    quorum: {
        provider: () => new HDWalletProvider(mnemonic, "https://user-name:pass-word-pass-word-pass-word@nd-123-456-789.p2pify.com"),
        network_id: "*",
        gasPrice: 0,
        gas: 4500000,
        type: "quorum"
    }
   }
};
