//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title Reward token
/// @author Oleanji
/// @notice This contract is used as a reward token for the staking contract
contract Saxe is ERC20 {
    constructor() ERC20("AxiaStake Reward", "SAXE") {}
}