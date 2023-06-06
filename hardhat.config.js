require("dotenv").config();
const { ethers } = require("ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [
        `${
          ethers.Wallet.fromMnemonic(process.env.ROPSTEN_MNEMONIC).privateKey
        }`,
      ],
    },
  },
};
