const fs = require("fs-extra");
const path = require("path");
const { web3, web3Network } = require("./web3");
// const jsonfile = require('jsonfile');
const cirJSON = require("circular-json");

const deploy = async () => {
  try {
    let recPath;
    if (web3Network == "ganache") {
      recPath = path.resolve(
        "ethereum",
        "receipt-" + web3Network + ".json"
      );
    } else if (web3Network == "rinkeby") {
      recPath = path.resolve(
        "ethereum",
        "receipt-" + web3Network + ".json"
      );
    }

    const accounts = await web3.eth.getAccounts();

    const compiledContract = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "build", "ElectionFactory.json"),
        "utf8"
      )
    );
    const result = await new web3.eth.Contract(
      JSON.parse(compiledContract.interface)
    )
      .deploy({
        data: compiledContract.bytecode,
      })
      .send({ gas: 4050000, from: accounts[0] });


    const serialised = cirJSON.stringify(result.options);
    fs.writeJsonSync(recPath, result.options);
    return await serialised;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// deploy(5);
module.exports = deploy;
