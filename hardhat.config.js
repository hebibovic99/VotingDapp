require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

if (!API_URL || !PRIVATE_KEY) {
  throw new Error('Please set both WEB3_PROVIDER_URL and PRIVATE_KEY in your .env file');
}

module.exports = {
  solidity: '0.8.19',
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  }
};