const PratikToken = artifacts.require("PratikToken");

module.exports = function (deployer) {
  deployer.deploy(PratikToken, "Pratik Token", "PDT", 10000000);
};
