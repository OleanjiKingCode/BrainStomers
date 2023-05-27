// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title Axia token
/// @author Oleanji
/// @notice This contract is used as a main token for axia ecosystem
contract Axe is ERC20 {
    constructor() ERC20("Axia Token", "AXE") {
        _mint(msg.sender, 100000 * 10 ** 18);
    }
}
