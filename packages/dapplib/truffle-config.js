require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind assume hover knee olympic general'; 
let testAccounts = [
"0x1347b5c50dc97a18c304e55e36fec523853ec75d9205f213b1484fc0505e77cf",
"0x5924ebf244f599bb34f32a79b5eca130d455400dea1f3b9d0c84f10beae15282",
"0xe6ab006166eb81ee648739877c70805b16b33c0825d30a923f090f8f0dfc4104",
"0x3eaed9560cf005b8884f8ad834ad094793dfbe6a708c3537e0532cbb4116fde0",
"0x7820f2f87ddb81319560b91419d01b1b8b9bcb4b5ec3b687e0417d0703aa89f5",
"0x6ab4d414f632a9c13922dfe968bb209970b8e3ec4e829523caf96d108c9feb9d",
"0x6593ae2b6ba5b4173f56127b2c68aaa3a80c23fc30f91de772180ea06421a99f",
"0x7f5384b30bd8b827735f2c22f94d6f5be140cf460f2809503539ebff35298917",
"0x2abc0853946576f0363a1dea3db23dc3c3d77f1310fa2740cb3a17d44cc02afd",
"0xff6a6bc72d008d66bb14c480dd6c6b541613e1f1d549b80ad87710ac27d15070"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

