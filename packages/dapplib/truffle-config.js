require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember coin gesture neck flat gaze'; 
let testAccounts = [
"0x163f148590cebc04d81b39920d8007a135ca2e8a3280793b84eb6a1ee39b1be4",
"0x3bd01af0d6798b405ad5c30792bdf3e7c6be1a5790466ea715a95d20af6c1835",
"0xeb0e92ff0fd8678b6e2cc9a632224ec7beab0930d8758c73acff37f697448dc0",
"0x451c142cdb82b98ce616c4f2a0ee545baad62e939e2996e0e41f44abbc60d362",
"0xb514228fcd6f509ac960b0fa0e7a5899c6125bdb7e49cf7e5d11be6446c8e9e0",
"0x11169d22550f256d1e3be85c07c246c4fb6475a010e0d08edbfbc2cd4b52a3c9",
"0x06d7764b8dd00dbf9019a99fd573834f7122304d2484b1a1b868609cac28d198",
"0x1d03c51c9435d6980f433dac2365617295f1416080b3e1ff0f4b105372d2419e",
"0x1062f0a2b7a471383ab3f8b86e949fb03471537f8c333e472da495afe0898c76",
"0x5effc9c8fae38c8c81e263e0073e75514f3268e75b635f878b432df6233aaebe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

