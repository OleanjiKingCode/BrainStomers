const hre = require("hardhat");
const filesys = require("fs");

async function main() {
  const Token = await ethers.getContractFactory("TestToken");
  const token = await Token.deploy("1000000000000000000000000");
  await token.deployed();
  console.log("Token deployed to:", token.address);

  const Staking = await ethers.getContractFactory("BrainStormersStaking");
  const staking = await Staking.deploy(
    10,
    100000,
    0x027D704225f61176EF49D7d717bE3349f37384A2,
    token.address,
    token.address
  );
  await staking.deployed();
  console.log("BrainStormersStaking deployed to:", staking.address);

  filesys.writeFileSync(
    "./constant.js",
    `
  export const BrainStormersAddress ="${staking.address}"
  export const StakingTokenAddress ="${token.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
