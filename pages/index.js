import React, { useState } from 'react';
import Web3 from 'web3';

const mathOperationsABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "a",
        "type": "uint256"
      },
      {
        "name": "b",
        "type": "uint256"
      }
    ],
    "name": "addNumbers",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "a",
        "type": "uint256"
      },
      {
        "name": "b",
        "type": "uint256"
      }
    ],
    "name": "subtractNumbers",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
];

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); 
const MathOperationsComponent = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [addResult, setAddResult] = useState(0);
  const [subResult, setSubResult] = useState(0);

  // Function to handle addition
  const handleAdd = async () => {
    const mathContract = new web3.eth.Contract(mathOperationsABI, contractAddress);

    try {
      const result = await mathContract.methods.addNumbers(a, b).call();
      const decimalValue = parseInt(result, 16);
      setAddResult(decimalValue);
    } catch (error) {
      console.error('Error adding numbers:', error);
    }
  };

  // Function to handle subtraction
  const handleSubtract = async () => {
    const mathContract = new web3.eth.Contract(mathOperationsABI, contractAddress);

    try {
      const result = await mathContract.methods.subtractNumbers(a, b).call();
      const decimalValue = parseInt(result, 16);
      setSubResult(decimalValue);
    } catch (error) {
      console.error('Error subtracting numbers:', error);
    }
  };

  return (
    <div>
      <h1>Math Operations</h1>
      <div>
        <label>Number A: </label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div>
        <label>Number B: </label>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <button onClick={handleAdd}>Add Numbers</button>
      <p>Addition Result: {addResult}</p>
      <button onClick={handleSubtract}>Subtract Numbers</button>
      <p>Subtraction Result: {subResult}</p>
    </div>
  );
};

export default MathOperationsComponent;
