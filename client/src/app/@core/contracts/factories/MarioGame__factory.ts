/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MarioGame, MarioGameInterface } from "../MarioGame";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "endpoint",
        type: "string",
      },
    ],
    name: "setEndpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "attrsOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pump",
            type: "uint256",
          },
        ],
        internalType: "struct MarioGame.Sprite",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

const _bytecode =
  "0x608060405260405180602001604052806000815250600990805190602001906200002b929190620001b8565b503480156200003957600080fd5b50604051620039483803806200394883398181016040528101906200005f9190620002da565b8181816000908051906020019062000079929190620001b8565b50806001908051906020019062000092929190620001b8565b505050620000b5620000a9620000d460201b60201c565b620000dc60201b60201c565b620000cc6008620001a260201b620010591760201c565b5050620004bd565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b828054620001c690620003e2565b90600052602060002090601f016020900481019282620001ea576000855562000236565b82601f106200020557805160ff191683800117855562000236565b8280016001018555821562000236579182015b828111156200023557825182559160200191906001019062000218565b5b50905062000245919062000249565b5090565b5b80821115620002645760008160009055506001016200024a565b5090565b60006200027f620002798462000376565b6200034d565b9050828152602081018484840111156200029857600080fd5b620002a5848285620003ac565b509392505050565b600082601f830112620002bf57600080fd5b8151620002d184826020860162000268565b91505092915050565b60008060408385031215620002ee57600080fd5b600083015167ffffffffffffffff8111156200030957600080fd5b6200031785828601620002ad565b925050602083015167ffffffffffffffff8111156200033557600080fd5b6200034385828601620002ad565b9150509250929050565b6000620003596200036c565b905062000367828262000418565b919050565b6000604051905090565b600067ffffffffffffffff8211156200039457620003936200047d565b5b6200039f82620004ac565b9050602081019050919050565b60005b83811015620003cc578082015181840152602081019050620003af565b83811115620003dc576000848401525b50505050565b60006002820490506001821680620003fb57607f821691505b602082108114156200041257620004116200044e565b5b50919050565b6200042382620004ac565b810181811067ffffffffffffffff821117156200044557620004446200047d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61347b80620004cd6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063711112be116100b8578063b88d4fde1161007c578063b88d4fde1461033a578063bc856b9814610356578063c87b56dd14610372578063d204c45e146103a2578063e985e9c5146103be578063f2fde38b146103ee57610137565b8063711112be146102bc578063715018a6146102d85780638da5cb5b146102e257806395d89b4114610300578063a22cb4651461031e57610137565b806323b872dd116100ff57806323b872dd1461020657806342842e0e146102225780635763440b1461023e5780636352211e1461025c57806370a082311461028c57610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806320f6fe61146101d6575b600080fd5b61015660048036038101906101519190612343565b61040a565b6040516101639190612851565b60405180910390f35b6101746104ec565b604051610181919061286c565b60405180910390f35b6101a4600480360381019061019f91906123d6565b61057e565b6040516101b191906127ea565b60405180910390f35b6101d460048036038101906101cf9190612307565b610603565b005b6101f060048036038101906101eb91906123d6565b61071b565b6040516101fd9190612ace565b60405180910390f35b610220600480360381019061021b91906121ad565b61075c565b005b61023c600480360381019061023791906121ad565b6107bc565b005b6102466107dc565b6040516102539190612ae9565b60405180910390f35b610276600480360381019061027191906123d6565b6107ed565b60405161028391906127ea565b60405180910390f35b6102a660048036038101906102a19190612148565b61089f565b6040516102b39190612ae9565b60405180910390f35b6102d660048036038101906102d191906122b3565b610957565b005b6102e06109ec565b005b6102ea610a74565b6040516102f791906127ea565b60405180910390f35b610308610a9e565b604051610315919061286c565b60405180910390f35b61033860048036038101906103339190612277565b610b30565b005b610354600480360381019061034f91906121fc565b610cb1565b005b610370600480360381019061036b9190612395565b610d13565b005b61038c600480360381019061038791906123d6565b610da9565b604051610399919061286c565b60405180910390f35b6103bc60048036038101906103b791906122b3565b610dbb565b005b6103d860048036038101906103d39190612171565b610ecd565b6040516103e59190612851565b60405180910390f35b61040860048036038101906104039190612148565b610f61565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104d557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104e557506104e48261106f565b5b9050919050565b6060600080546104fb90612d3f565b80601f016020809104026020016040519081016040528092919081815260200182805461052790612d3f565b80156105745780601f1061054957610100808354040283529160200191610574565b820191906000526020600020905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b6000610589826110d9565b6105c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bf90612a0e565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061060e826107ed565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561067f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067690612a8e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661069e611145565b73ffffffffffffffffffffffffffffffffffffffff1614806106cd57506106cc816106c7611145565b610ecd565b5b61070c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107039061294e565b60405180910390fd5b610716838361114d565b505050565b610723611f52565b600a6000838152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050919050565b61076d610767611145565b82611206565b6107ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a390612aae565b60405180910390fd5b6107b78383836112e4565b505050565b6107d783838360405180602001604052806000815250610cb1565b505050565b60006107e86008611540565b905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610896576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088d9061298e565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610910576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109079061296e565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000604051806040016040528061096e601461154e565b815260200161097e61025861154e565b815250905080600a60006109926008611540565b815260200190815260200160002060008201518160000155602082015181600101559050506109ca836109c56008611540565b61158e565b6109dd6109d76008611540565b836115ac565b6109e76008611059565b505050565b6109f4611145565b73ffffffffffffffffffffffffffffffffffffffff16610a12610a74565b73ffffffffffffffffffffffffffffffffffffffff1614610a68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5f90612a2e565b60405180910390fd5b610a726000611620565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610aad90612d3f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad990612d3f565b8015610b265780601f10610afb57610100808354040283529160200191610b26565b820191906000526020600020905b815481529060010190602001808311610b0957829003601f168201915b5050505050905090565b610b38611145565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ba6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9d9061290e565b60405180910390fd5b8060056000610bb3611145565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610c60611145565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ca59190612851565b60405180910390a35050565b610cc2610cbc611145565b83611206565b610d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf890612aae565b60405180910390fd5b610d0d848484846116e6565b50505050565b610d1b611145565b73ffffffffffffffffffffffffffffffffffffffff16610d39610a74565b73ffffffffffffffffffffffffffffffffffffffff1614610d8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8690612a2e565b60405180910390fd5b8060099080519060200190610da5929190611f6c565b5050565b6060610db482611742565b9050919050565b610dc3611145565b73ffffffffffffffffffffffffffffffffffffffff16610de1610a74565b73ffffffffffffffffffffffffffffffffffffffff1614610e37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2e90612a2e565b60405180910390fd5b610e4a82610e456008611540565b61158e565b60006040518060400160405280610e6261019061154e565b8152602001610e7261032061154e565b815250905080600a6000610e866008611540565b81526020019081526020016000206000820151816000015560208201518160010155905050610ebe610eb86008611540565b836115ac565b610ec86008611059565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f69611145565b73ffffffffffffffffffffffffffffffffffffffff16610f87610a74565b73ffffffffffffffffffffffffffffffffffffffff1614610fdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd490612a2e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561104d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611044906128ae565b60405180910390fd5b61105681611620565b50565b6001816000016000828254019250508190555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166111c0836107ed565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611211826110d9565b611250576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112479061292e565b60405180910390fd5b600061125b836107ed565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806112ca57508373ffffffffffffffffffffffffffffffffffffffff166112b28461057e565b73ffffffffffffffffffffffffffffffffffffffff16145b806112db57506112da8185610ecd565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611304826107ed565b73ffffffffffffffffffffffffffffffffffffffff161461135a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135190612a4e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c1906128ee565b60405180910390fd5b6113d5838383611894565b6113e060008261114d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114309190612c55565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114879190612bce565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600081600001549050919050565b60008142446040516020016115649291906127be565b6040516020818303038152906040528051906020012060001c6115879190612df5565b9050919050565b6115a8828260405180602001604052806000815250611899565b5050565b6115b5826110d9565b6115f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115eb906129ae565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061161b929190611f6c565b505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6116f18484846112e4565b6116fd848484846118f4565b61173c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117339061288e565b60405180910390fd5b50505050565b606061174d826110d9565b61178c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611783906129ee565b60405180910390fd5b60006006600084815260200190815260200160002080546117ac90612d3f565b80601f01602080910402602001604051908101604052809291908181526020018280546117d890612d3f565b80156118255780601f106117fa57610100808354040283529160200191611825565b820191906000526020600020905b81548152906001019060200180831161180857829003601f168201915b505050505090506000611836611a8b565b905060008151141561184c57819250505061188f565b60008251111561188157808260405160200161186992919061279a565b6040516020818303038152906040529250505061188f565b61188a84611b1d565b925050505b919050565b505050565b6118a38383611bc4565b6118b060008484846118f4565b6118ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e69061288e565b60405180910390fd5b505050565b60006119158473ffffffffffffffffffffffffffffffffffffffff16611d92565b15611a7e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261193e611145565b8786866040518563ffffffff1660e01b81526004016119609493929190612805565b602060405180830381600087803b15801561197a57600080fd5b505af19250505080156119ab57506040513d601f19601f820116820180604052508101906119a8919061236c565b60015b611a2e573d80600081146119db576040519150601f19603f3d011682016040523d82523d6000602084013e6119e0565b606091505b50600081511415611a26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a1d9061288e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a83565b600190505b949350505050565b606060098054611a9a90612d3f565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac690612d3f565b8015611b135780601f10611ae857610100808354040283529160200191611b13565b820191906000526020600020905b815481529060010190602001808311611af657829003601f168201915b5050505050905090565b6060611b28826110d9565b611b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5e90612a6e565b60405180910390fd5b6000611b71611a8b565b90506000815111611b915760405180602001604052806000815250611bbc565b80611b9b84611da5565b604051602001611bac92919061279a565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c2b906129ce565b60405180910390fd5b611c3d816110d9565b15611c7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c74906128ce565b60405180910390fd5b611c8960008383611894565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611cd99190612bce565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606000821415611ded576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611f4d565b600082905060005b60008214611e1f578080611e0890612da2565b915050600a82611e189190612c24565b9150611df5565b60008167ffffffffffffffff811115611e61577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611e935781602001600182028036833780820191505090505b5090505b60008514611f4657600182611eac9190612c55565b9150600a85611ebb9190612df5565b6030611ec79190612bce565b60f81b818381518110611f03577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611f3f9190612c24565b9450611e97565b8093505050505b919050565b604051806040016040528060008152602001600081525090565b828054611f7890612d3f565b90600052602060002090601f016020900481019282611f9a5760008555611fe1565b82601f10611fb357805160ff1916838001178555611fe1565b82800160010185558215611fe1579182015b82811115611fe0578251825591602001919060010190611fc5565b5b509050611fee9190611ff2565b5090565b5b8082111561200b576000816000905550600101611ff3565b5090565b600061202261201d84612b29565b612b04565b90508281526020810184848401111561203a57600080fd5b612045848285612cfd565b509392505050565b600061206061205b84612b5a565b612b04565b90508281526020810184848401111561207857600080fd5b612083848285612cfd565b509392505050565b60008135905061209a816133e9565b92915050565b6000813590506120af81613400565b92915050565b6000813590506120c481613417565b92915050565b6000815190506120d981613417565b92915050565b600082601f8301126120f057600080fd5b813561210084826020860161200f565b91505092915050565b600082601f83011261211a57600080fd5b813561212a84826020860161204d565b91505092915050565b6000813590506121428161342e565b92915050565b60006020828403121561215a57600080fd5b60006121688482850161208b565b91505092915050565b6000806040838503121561218457600080fd5b60006121928582860161208b565b92505060206121a38582860161208b565b9150509250929050565b6000806000606084860312156121c257600080fd5b60006121d08682870161208b565b93505060206121e18682870161208b565b92505060406121f286828701612133565b9150509250925092565b6000806000806080858703121561221257600080fd5b60006122208782880161208b565b94505060206122318782880161208b565b935050604061224287828801612133565b925050606085013567ffffffffffffffff81111561225f57600080fd5b61226b878288016120df565b91505092959194509250565b6000806040838503121561228a57600080fd5b60006122988582860161208b565b92505060206122a9858286016120a0565b9150509250929050565b600080604083850312156122c657600080fd5b60006122d48582860161208b565b925050602083013567ffffffffffffffff8111156122f157600080fd5b6122fd85828601612109565b9150509250929050565b6000806040838503121561231a57600080fd5b60006123288582860161208b565b925050602061233985828601612133565b9150509250929050565b60006020828403121561235557600080fd5b6000612363848285016120b5565b91505092915050565b60006020828403121561237e57600080fd5b600061238c848285016120ca565b91505092915050565b6000602082840312156123a757600080fd5b600082013567ffffffffffffffff8111156123c157600080fd5b6123cd84828501612109565b91505092915050565b6000602082840312156123e857600080fd5b60006123f684828501612133565b91505092915050565b61240881612c89565b82525050565b61241781612c9b565b82525050565b600061242882612b8b565b6124328185612ba1565b9350612442818560208601612d0c565b61244b81612ee2565b840191505092915050565b600061246182612b96565b61246b8185612bb2565b935061247b818560208601612d0c565b61248481612ee2565b840191505092915050565b600061249a82612b96565b6124a48185612bc3565b93506124b4818560208601612d0c565b80840191505092915050565b60006124cd603283612bb2565b91506124d882612ef3565b604082019050919050565b60006124f0602683612bb2565b91506124fb82612f42565b604082019050919050565b6000612513601c83612bb2565b915061251e82612f91565b602082019050919050565b6000612536602483612bb2565b915061254182612fba565b604082019050919050565b6000612559601983612bb2565b915061256482613009565b602082019050919050565b600061257c602c83612bb2565b915061258782613032565b604082019050919050565b600061259f603883612bb2565b91506125aa82613081565b604082019050919050565b60006125c2602a83612bb2565b91506125cd826130d0565b604082019050919050565b60006125e5602983612bb2565b91506125f08261311f565b604082019050919050565b6000612608602e83612bb2565b91506126138261316e565b604082019050919050565b600061262b602083612bb2565b9150612636826131bd565b602082019050919050565b600061264e603183612bb2565b9150612659826131e6565b604082019050919050565b6000612671602c83612bb2565b915061267c82613235565b604082019050919050565b6000612694602083612bb2565b915061269f82613284565b602082019050919050565b60006126b7602983612bb2565b91506126c2826132ad565b604082019050919050565b60006126da602f83612bb2565b91506126e5826132fc565b604082019050919050565b60006126fd602183612bb2565b91506127088261334b565b604082019050919050565b6000612720603183612bb2565b915061272b8261339a565b604082019050919050565b60408201600082015161274c6000850182612765565b50602082015161275f6020850182612765565b50505050565b61276e81612cf3565b82525050565b61277d81612cf3565b82525050565b61279461278f82612cf3565b612deb565b82525050565b60006127a6828561248f565b91506127b2828461248f565b91508190509392505050565b60006127ca8285612783565b6020820191506127da8284612783565b6020820191508190509392505050565b60006020820190506127ff60008301846123ff565b92915050565b600060808201905061281a60008301876123ff565b61282760208301866123ff565b6128346040830185612774565b8181036060830152612846818461241d565b905095945050505050565b6000602082019050612866600083018461240e565b92915050565b600060208201905081810360008301526128868184612456565b905092915050565b600060208201905081810360008301526128a7816124c0565b9050919050565b600060208201905081810360008301526128c7816124e3565b9050919050565b600060208201905081810360008301526128e781612506565b9050919050565b6000602082019050818103600083015261290781612529565b9050919050565b600060208201905081810360008301526129278161254c565b9050919050565b600060208201905081810360008301526129478161256f565b9050919050565b6000602082019050818103600083015261296781612592565b9050919050565b60006020820190508181036000830152612987816125b5565b9050919050565b600060208201905081810360008301526129a7816125d8565b9050919050565b600060208201905081810360008301526129c7816125fb565b9050919050565b600060208201905081810360008301526129e78161261e565b9050919050565b60006020820190508181036000830152612a0781612641565b9050919050565b60006020820190508181036000830152612a2781612664565b9050919050565b60006020820190508181036000830152612a4781612687565b9050919050565b60006020820190508181036000830152612a67816126aa565b9050919050565b60006020820190508181036000830152612a87816126cd565b9050919050565b60006020820190508181036000830152612aa7816126f0565b9050919050565b60006020820190508181036000830152612ac781612713565b9050919050565b6000604082019050612ae36000830184612736565b92915050565b6000602082019050612afe6000830184612774565b92915050565b6000612b0e612b1f565b9050612b1a8282612d71565b919050565b6000604051905090565b600067ffffffffffffffff821115612b4457612b43612eb3565b5b612b4d82612ee2565b9050602081019050919050565b600067ffffffffffffffff821115612b7557612b74612eb3565b5b612b7e82612ee2565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612bd982612cf3565b9150612be483612cf3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c1957612c18612e26565b5b828201905092915050565b6000612c2f82612cf3565b9150612c3a83612cf3565b925082612c4a57612c49612e55565b5b828204905092915050565b6000612c6082612cf3565b9150612c6b83612cf3565b925082821015612c7e57612c7d612e26565b5b828203905092915050565b6000612c9482612cd3565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612d2a578082015181840152602081019050612d0f565b83811115612d39576000848401525b50505050565b60006002820490506001821680612d5757607f821691505b60208210811415612d6b57612d6a612e84565b5b50919050565b612d7a82612ee2565b810181811067ffffffffffffffff82111715612d9957612d98612eb3565b5b80604052505050565b6000612dad82612cf3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612de057612ddf612e26565b5b600182019050919050565b6000819050919050565b6000612e0082612cf3565b9150612e0b83612cf3565b925082612e1b57612e1a612e55565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6133f281612c89565b81146133fd57600080fd5b50565b61340981612c9b565b811461341457600080fd5b50565b61342081612ca7565b811461342b57600080fd5b50565b61343781612cf3565b811461344257600080fd5b5056fea26469706673582212201a23c27d6d0237dbd0e969ae3a817c0888827dc378ae3e0192264a52bde43be564736f6c63430008010033";

export class MarioGame__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarioGame> {
    return super.deploy(name, symbol, overrides || {}) as Promise<MarioGame>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): MarioGame {
    return super.attach(address) as MarioGame;
  }
  connect(signer: Signer): MarioGame__factory {
    return super.connect(signer) as MarioGame__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarioGameInterface {
    return new utils.Interface(_abi) as MarioGameInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarioGame {
    return new Contract(address, _abi, signerOrProvider) as MarioGame;
  }
}
