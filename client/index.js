const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main(name) {
  // prove to the server we're on the nice list
  const tree = new MerkleTree(niceList);
  const index = niceList.indexOf(name);
  const proof = tree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof
  });

  console.log({ gift });
}

const name = process.argv.slice(2).join(" ");
if (name) {
  main(name);
} else {
  console.error("Please type your name at the end of the command line");
}