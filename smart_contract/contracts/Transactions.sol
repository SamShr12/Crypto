//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions{
    uint256 transactionsCounter;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions; //transations will be the array of transferstruct

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword ) public{
        transactionsCounter += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function receiveAllTransactions() public view returns(TransferStruct[] memory){
        return transactions;
    }

    function getTransactionsCount() public view returns (uint256){
        return transactionsCounter;
    }
}