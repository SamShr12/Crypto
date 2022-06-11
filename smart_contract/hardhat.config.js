require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "AseLe0Pjwfplbo_RT1UHoTLjmWhQy8pg";

const GOERLI_PRIVATE_KEY = "c41623f66c7f731e5e61f1652cfa010324922da9ac0dd075d9a4f5bf81345eaa";

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:`https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [ `${GOERLI_PRIVATE_KEY}` ]
    }
  }
}