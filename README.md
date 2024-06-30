# Math Operations DApp

This project is a decentralized application (DApp) that demonstrates simple math operations (addition and subtraction) using Ethereum smart contracts and a React frontend.

## Project Structure

- **index.js**: The main React component that interacts with the deployed smart contract to perform math operations.
- **MathOperation.sol**: The Solidity smart contract that provides functions for addition and subtraction.
- **deploy.js**: The script used to deploy the smart contract to the Ethereum blockchain.

## Prerequisites

- Node.js and npm installed
- Hardhat installed globally (`npm install -g hardhat`)
- Metamask or another Web3 provider installed in your browser

## Compile and Deploy the Smart Contract

Start a local Ethereum node (if not already running):
##
    npx hardhat node'

In a new terminal window, deploy the smart contract:
##
    npx hardhat run scripts/deploy.js --network localhost
