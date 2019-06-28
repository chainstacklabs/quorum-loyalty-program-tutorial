var loyaltyProgram = artifacts.require("./loyaltyProgram.sol");

const ether = 10**18; // 1 ether = 1000000000000000000 wei
const reward = 10 * ether;

contract("loyaltyProgram", function(accounts) {
  const account = accounts[0]

  it("should reward joiner with 10 balance", async () => {
    const program = await loyaltyProgram.deployed();

    await program.join({from: account});
    const accountBalance = await program.balance({from: account});
    assert.equal(accountBalance, reward, "initial balance is incorrect");
  });
});
