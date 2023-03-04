# Brainstormers Staking Contract

This is a smart contract for staking tokens and earning rewards. Users can stake a specified token and earn rewards in another specified token. The contract owner can adjust the reward rate and the minimum withdrawal amount.

## Functions

### `constructor(uint256 _rewardRate, uint256 _minWithdrawalAmount, address _projectOwner, address _stakingToken, address _rewardToken)`

The constructor function initializes the contract with the reward rate, minimum withdrawal amount, project owner, staking token, and reward token.

### `stake(uint256 _amount)`

The `stake` function allows a user to stake a specified amount of tokens. The function transfers the tokens from the user to the contract, adds the amount to the user's balance, and updates the total staked amount. If the user already has a balance, the function calculates and updates the user's rewards based on the amount of time since the last update.

### `withdraw()`

The `withdraw` function allows a user to withdraw their staked tokens. The function transfers the tokens from the contract to the user, sets the user's balance and rewards to zero, and updates the total staked amount.

### `claimReward()`

The `claimReward` function allows a user to claim their earned rewards. The function transfers the tokens from the contract to the user and sets the user's rewards to zero. If the user's earned rewards are less than the minimum withdrawal amount, the function reverts.

### `getReward(address _address)`

The `getReward` function returns the amount of rewards earned by a specified user.

### `updateRewardRate(uint256 _newRewardRate)`

The `updateRewardRate` function allows the contract owner to update the reward rate.

### `getStakingToken()`

The `getStakingToken` function returns the address of the staking token.

### `getRewardToken()`

The `getRewardToken` function returns the address of the reward token.

## Contributors

- [Oleanji](https://github.com/OleanjiKingCode)
- [Dre](https://github.com/Emmanueldmlr)
- [Urek](https://github.com/brokewhale)
- [Dara]()
