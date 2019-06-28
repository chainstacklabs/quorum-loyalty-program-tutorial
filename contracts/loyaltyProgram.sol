pragma solidity ^0.5.8;

contract loyaltyProgram {
    mapping (address => uint) private balances;
    address public owner;

    constructor() public payable {
        /* Set the owner to the creator of this contract */
        owner = msg.sender;
    }
    
    /// Join a customer with the loyalty program, 
    /// give 10 ether as reward
    function join() public returns (uint){
        address user = msg.sender;
        balances[user] = 10 ether; 
        return user.balance;
    }

    /// Reads balance of the account requesting
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }
}