const PATH=require('path')

const fs=require('fs')
const solc =require('solc')
const codefilepath=PATH.resolve(__dirname,"contracts","index.sol")


const data=fs.readFileSync(codefilepath,"utf8")



const input = {
    language: "Solidity",
    sources: {
      "index.sol": {
        content: data,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output);
   exports.abi = output.contracts['index.sol']['Inbox'].abi;
  exports.bytecode = output.contracts['index.sol']['Inbox'].evm.bytecode.object;