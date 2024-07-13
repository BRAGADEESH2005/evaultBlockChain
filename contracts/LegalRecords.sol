// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LegalRecords {
    struct Record {
        string id;
        string hash;
        address owner;
        uint timestamp;
    }

    mapping(string => Record) public records;

    function addRecord(string memory id, string memory hash) public {
        require(records[id].timestamp == 0, "Record already exists");
        records[id] = Record(id, hash, msg.sender, block.timestamp);
    }

    function getRecord(string memory id) public view returns (Record memory) {
        require(records[id].timestamp != 0, "Record does not exist");
        return records[id];
    }
}
