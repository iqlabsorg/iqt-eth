// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract IQToken is ERC20, ERC20Burnable {
    constructor(address mintTo) ERC20("IQ Protocol Token", "IQT") {
        _mint(mintTo, 1_000_000_000 * 10 ** decimals());
    }
}