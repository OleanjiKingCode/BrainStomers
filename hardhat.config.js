require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

const MUMBAI_ANKR_ID = process.env.MUMBAI_ANKR_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

//npx hardhat verify --network sepolia <address> <unlock time>
// hardhat verify --contract contracts/Example.sol:ExampleContract
module.exports = {
  solidity: "0.8.13",
  etherscan: {
    // apiKey: "YGX3PSEN5DGY2CKPVM1A5NGUQG3CVKB5HP",
    apiKey: { polygonMumbai: "TCE4J464VM4AGNFDYUXC4K1966GNWWXDMI" },
  },
  networks: {
    hardhat: {
      chainId: 11155111,
    },
    mumbai: {
      url: MUMBAI_ANKR_ID,
      accounts: [PRIVATE_KEY],
    },
  },
};
