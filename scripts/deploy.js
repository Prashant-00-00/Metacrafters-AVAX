// We require the Hardhat Runtime Environment explicitly here.
const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory for MathOperations
  const MathOperations = await ethers.getContractFactory("MathOperations");

  // Deploy the MathOperations contract
  console.log("Deploying MathOperations...");
  const mathOperations = await MathOperations.deploy();
  await mathOperations.deployed();

  console.log("MathOperations deployed to:", mathOperations.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
