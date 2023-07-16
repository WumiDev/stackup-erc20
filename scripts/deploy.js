const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const MyICO = await ethers.getContractFactory('MyICO');
  const myICO = await MyICO.deploy(100); // Pass the desired initial token amount here

  console.log(`Deployed Contract address: ${await myICO.getAddress()}`);

}

main()
  .then(() => process.exit())
  .catch(error => {
    console.error(error);
    process.exit(1);
  })