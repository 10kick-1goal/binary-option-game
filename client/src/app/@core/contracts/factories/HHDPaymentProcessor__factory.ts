/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HHDPaymentProcessor,
  HHDPaymentProcessorInterface,
} from "../HHDPaymentProcessor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hhdAdrress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "userId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "PaymentDone",
    type: "event",
  },
  {
    inputs: [],
    name: "hhd",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "userId",
        type: "string",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a3f380380610a3f833981810160405281019061003291906100ce565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610140565b6000815190506100c881610129565b92915050565b6000602082840312156100e057600080fd5b60006100ee848285016100b9565b91505092915050565b600061010282610109565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610132816100f7565b811461013d57600080fd5b50565b6108f08061014f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633ccfd60b146100515780638a15069b1461005b5780638da5cb5b14610079578063f1215d2514610097575b600080fd5b6100596100b3565b005b6100636102bd565b6040516100709190610697565b60405180910390f35b6100816102e3565b60405161008e91906105d0565b60405180910390f35b6100b160048036038101906100ac91906104f3565b610307565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610141576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610138906106b2565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101fb91906105d0565b60206040518083038186803b15801561021357600080fd5b505afa158015610227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024b91906104ca565b6040518363ffffffff1660e01b8152600401610268929190610622565b602060405180830381600087803b15801561028257600080fd5b505af1158015610296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ba91906104a1565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610366939291906105eb565b602060405180830381600087803b15801561038057600080fd5b505af1158015610394573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b891906104a1565b507f5deda500cf2f51e0ae5ba5537859f938dadea1f0d406c57f7a1ad89ea5f24348338383426040516103ee949392919061064b565b60405180910390a15050565b600061040d610408846106f7565b6106d2565b90508281526020810184848401111561042557600080fd5b6104308482856107b0565b509392505050565b6000815190506104478161088c565b92915050565b600082601f83011261045e57600080fd5b813561046e8482602086016103fa565b91505092915050565b600081359050610486816108a3565b92915050565b60008151905061049b816108a3565b92915050565b6000602082840312156104b357600080fd5b60006104c184828501610438565b91505092915050565b6000602082840312156104dc57600080fd5b60006104ea8482850161048c565b91505092915050565b6000806040838503121561050657600080fd5b600061051485828601610477565b925050602083013567ffffffffffffffff81111561053157600080fd5b61053d8582860161044d565b9150509250929050565b61055081610744565b82525050565b61055f8161078c565b82525050565b600061057082610728565b61057a8185610733565b935061058a8185602086016107bf565b61059381610852565b840191505092915050565b60006105ab600a83610733565b91506105b682610863565b602082019050919050565b6105ca81610782565b82525050565b60006020820190506105e56000830184610547565b92915050565b60006060820190506106006000830186610547565b61060d6020830185610547565b61061a60408301846105c1565b949350505050565b60006040820190506106376000830185610547565b61064460208301846105c1565b9392505050565b60006080820190506106606000830187610547565b61066d60208301866105c1565b818103604083015261067f8185610565565b905061068e60608301846105c1565b95945050505050565b60006020820190506106ac6000830184610556565b92915050565b600060208201905081810360008301526106cb8161059e565b9050919050565b60006106dc6106ed565b90506106e882826107f2565b919050565b6000604051905090565b600067ffffffffffffffff82111561071257610711610823565b5b61071b82610852565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061074f82610762565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107978261079e565b9050919050565b60006107a982610762565b9050919050565b82818337600083830152505050565b60005b838110156107dd5780820151818401526020810190506107c2565b838111156107ec576000848401525b50505050565b6107fb82610852565b810181811067ffffffffffffffff8211171561081a57610819610823565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f6f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b61089581610756565b81146108a057600080fd5b50565b6108ac81610782565b81146108b757600080fd5b5056fea2646970667358221220ea6322d4636caafa84e52beeb7866160c77d2d9ddcf60cbc1b8efa255b60d17864736f6c63430008010033";

export class HHDPaymentProcessor__factory extends ContractFactory {
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
    hhdAdrress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HHDPaymentProcessor> {
    return super.deploy(
      hhdAdrress,
      overrides || {}
    ) as Promise<HHDPaymentProcessor>;
  }
  getDeployTransaction(
    hhdAdrress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hhdAdrress, overrides || {});
  }
  attach(address: string): HHDPaymentProcessor {
    return super.attach(address) as HHDPaymentProcessor;
  }
  connect(signer: Signer): HHDPaymentProcessor__factory {
    return super.connect(signer) as HHDPaymentProcessor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HHDPaymentProcessorInterface {
    return new utils.Interface(_abi) as HHDPaymentProcessorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HHDPaymentProcessor {
    return new Contract(address, _abi, signerOrProvider) as HHDPaymentProcessor;
  }
}
