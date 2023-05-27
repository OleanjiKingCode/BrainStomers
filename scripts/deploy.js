const hre = require("hardhat");
const dd = require("@nomiclabs/hardhat-etherscan");
const filesys = require("fs");

async function main() {
  const Token = await ethers.getContractFactory("IQERC20");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // const Staking = await ethers.getContractFactory("BrainStormersStaking");
  // const staking = await Staking.deploy(
  //   10,
  //   100000,
  //   "0x027D704225f61176EF49D7d717bE3349f37384A2",
  //   token.address,
  //   token.address
  // );
  // await staking.deployed();

  // console.log("BrainStormersStaking deployed to:", staking.address);

  // const Reawrdsys = await ethers.getContractFactory("RewardSystem");
  // const reawrdsys = await Reawrdsys.deploy(
  //   "0x0552D756a3E92Aa874EF60F61b7a29030373e869"
  // );
  // await reawrdsys.deployed();

  filesys.writeFileSync(
    "./constant.js",
    `
  export const TokenAddress ="${token.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
