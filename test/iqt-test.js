// const { expect } = require("chai");
const { expect, use } = require('chai');
const { ethers } = require("hardhat");
const { solidity } = require('ethereum-waffle');
use(solidity);

let TOKEN_TOTAL_SUPPLY = ethers.utils.parseEther(`${1_000_000_000}`);
let TOKEN_NAME = "IQ Protocol Token";
let TOKEN_SYMBOL = "IQT";
let TOKEN_DECIMALS = 18;

describe("IQToken", function () {

  let deployer;
  let acc1;
  let acc2;

  before(async function() {
    [deployer, acc1, acc2] = await ethers.getSigners();
  });


  it("Should mint the total supply to the provided address", async function () {
    const IQToken = await ethers.getContractFactory("IQToken");


    const iqToken = await IQToken.deploy(deployer.address);
    expect(await iqToken.balanceOf(deployer.address)).to.equal(TOKEN_TOTAL_SUPPLY);
    await verifyTokenData(iqToken);

    const iqToken1 = await IQToken.deploy(acc1.address);
    expect(await iqToken1.balanceOf(acc1.address)).to.equal(TOKEN_TOTAL_SUPPLY);
    await verifyTokenData(iqToken1);

    const iqToken2 = await IQToken.deploy(acc2.address);
    expect(await iqToken2.balanceOf(acc2.address)).to.equal(TOKEN_TOTAL_SUPPLY);
    await verifyTokenData(iqToken2);
  });
});

async function verifyTokenData(iqToken) {
  expect(await iqToken.name()).to.equal(TOKEN_NAME);
  expect(await iqToken.symbol()).to.equal(TOKEN_SYMBOL);
  expect(await iqToken.decimals()).to.equal(TOKEN_DECIMALS);
  expect(await iqToken.totalSupply()).to.equal(TOKEN_TOTAL_SUPPLY);
}
