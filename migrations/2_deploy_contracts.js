var loyaltyProgram = artifacts.require("./loyaltyProgram.sol");

module.exports = function(deployer) {
  deployer.deploy(loyaltyProgram);
};