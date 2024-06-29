
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MathOperations {
    // Function to add two numbers and return the result
    function addNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        
        return a + b;
    }

    // Function to subtract one number from another and return the result
    function subtractNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        require(b <= a, "Subtraction result should not be negative");
        return a - b;
    }
}