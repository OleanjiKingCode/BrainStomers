const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("BrainStormers", function () {
  it("should allow users to stake, withdraw and claim", async function () {
    //GET TESTOKEN DEPLOYED TO USE IN OTHER TESTING
    const Token = await ethers.getContractFactory("TestToken");
    const token = await Token.deploy("10000");
    await token.deployed();
    const CA = token.address;
    console.log(CA);

    // Get signers
    const [deployer, user1, user2, user3] = await ethers.getSigners();

    // Deploying the contract
    const Staking = await ethers.getContractFactory("BrainStormersStaking");
    const staking = await Staking.deploy(12, 100, user3.address, CA, CA);

    const contract = staking.connect(user1);
    const contract2 = staking.connect(user2);

    token.transfer(user1.address, 80);
    token.transfer(user2.address, 40);
    const values = await token.balanceOf(user1.address);
    const valuess = await token.balanceOf(deployer.address);
    console.log(values, valuess);

    // Pledge 50 tokens from user1 and 50 tokens from user2
    await token.connect(user1).approve(staking.address, 70);

    await contract.stake(70);

    await token.connect(user2).approve(staking.address, 30);
    await contract2.stake(30);

    // Check that the user's stake was recorded correctly
    assert.equal(await contract.balances(user1.address), 70);

    // Check that the total funds staked is 100
    assert.equal(await contract.totalStaked(), 100);

    const rewards = await contract.getReward(user1.address);
    console.log(rewards);
    // // Connect to the contract using the signer for the project owner
    // const ownerContract = staking.connect(user3);

    // // Withdraw the funds
    // await ownerContract.withdrawFunds();

    // // Check that the project owner received the funds
    // assert.equal(await token.balanceOf(user3.address), 100);
  });
});
