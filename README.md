## Gift List

This project is an example of using a [Merkle Tree](https://blog.ethereum.org/2015/11/15/merkling-in-ethereum) to build an application that delivers gifts, but only to names [on a list](utils/niceList.json). The catch is that on the server you are only allowed to store one 32 byte value in memory. This 32 byte value has to be enough for the server to determine who is on the list.

### Implementation details

In this implementation, the clients are the ones trying to prove to the server that their name is on the list, doing most of the computational work, finding their position on the list and building the Merkle Proof. The server simply takes the client's proof and, using minimal information (the pre-computed Merkle Root), verifies that the client's name is actually on the list.

### Instructions

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

### Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

### Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

### Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the merkle root, as show in the example.
