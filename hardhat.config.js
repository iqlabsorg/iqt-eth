require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
const { ethers } = require("ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.19",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200,
    //   },
    // },
  },
  networks: {
    ethereum: {
      url: `https://rpc.ankr.com/eth/${process.env.ANKR_API_KEY}`,
      // accounts: [
      //   `${
      //     ethers.Wallet.fromMnemonic(process.env.ETHEREUM_MNEMONIC).privateKey
      //   }`,
      // ],
    },
    ethereumGoerli: {
      url: `https://rpc.ankr.com/eth_goerli/${process.env.ANKR_API_KEY}`,
      // accounts: [
      //   `${
      //     ethers.Wallet.fromMnemonic(process.env.ETHEREUM_MNEMONIC).privateKey
      //   }`,
      // ],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};
