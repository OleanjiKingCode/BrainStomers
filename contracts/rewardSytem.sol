// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

contract RewardSystem {
    struct User {
        uint balance;
        bool exists;
    }

    mapping(address => User) users;

    event Withdraw(address indexed user, uint amount);
    event IncreaseRewards(address indexed user, uint score, uint rewards);

    bytes32 internal secretKey =
        0x5b5c02703a1ba60d6890a9b2d15c0ebce2d95539ef3d3223e3a8c37b03f30cf9;

    address public rewardToken;

    constructor(address _rewardToken) {
        rewardToken = _rewardToken;
    }

    // Withdraw rewards
    function withdraw(uint amount) public {
        require(
            users[msg.sender].balance >= amount,
            "Insufficient rewards balance"
        );
        users[msg.sender].balance -= amount;
        // Send rewards to the user's address

        IERC20(rewardToken).transfer(msg.sender, amount);

        emit Withdraw(msg.sender, amount);
    }

    // Increase user's rewards based on their score and a secret key
    function increaseRewards(
        address userAddress,
        uint score,
        bytes32 Key
    ) public {
        // Verify that the secret key is correct
        require(
            keccak256(abi.encodePacked(Key)) ==
                keccak256(abi.encodePacked(secretKey)),
            "Invalid secret key"
        );
        // Calculate the rewards based on the score and add them to the user's balance
        uint rewards = calculateRewards(score);
        users[userAddress].balance += rewards;
        emit IncreaseRewards(userAddress, score, rewards);
    }

    // Get a user's rewards balance
    function getUserRewards(address userAddress) public view returns (uint) {
        require(users[userAddress].exists, "User not found");
        return users[userAddress].balance;
    }

    // Calculate rewards based on score
    function calculateRewards(uint score) private pure returns (uint) {
        // Calculate rewards based on score
        // For example, assume 1 point = 0.001 ether
        return score * 1e15;
    }
}
