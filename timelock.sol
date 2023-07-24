// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TimeLock is Ownable {
    uint256 public constant PERIOD = 90 days;
    uint256 public constant PERCENTAGE = 25;
    uint256 public lastWithdrawalTime;
    address public recipient;
    address[] public tokens;

    constructor(address _recipient) {
        lastWithdrawalTime = block.timestamp;
        recipient = _recipient;
    }

    function addToken(address token) external onlyOwner {
        tokens.push(token);
    }

    function withdraw() external onlyOwner {
        require(block.timestamp >= lastWithdrawalTime + PERIOD, "Withdrawal period has not passed yet");

        for (uint i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            uint256 balance = token.balanceOf(address(this));
            uint256 amount = (balance * PERCENTAGE) / 100;

            require(token.transfer(recipient, amount), "Transfer failed");
        }

        lastWithdrawalTime = block.timestamp;
    }
}
