const LegalRecords = artifacts.require("LegalRecords");

module.exports = function(deployer) {
    deployer.deploy(LegalRecords);
};
