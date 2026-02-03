const bip39 = require('bip39');
const HDWallet = require('ethereum-hdwallet');

function walletGenerator() {
  const mnemonic = bip39.generateMnemonic();
  const hdwallet = HDWallet.fromMnemonic(mnemonic);
  const myWallet = hdwallet.derive("m/44'/60'/0'/0");
  console.log('Mnemonic:', mnemonic);
  for (let i = 0; i < 20; i++) {
    console.log(`${i}: 0x${myWallet.derive(i).getAddress().toString('hex')}`);
  } 
}

walletGenerator();