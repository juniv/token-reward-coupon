const path = require("path")
const programDir = path.join(__dirname, "programs", "token-rewards-coupons")
const idlDir = path.join(__dirname, "idl")
const sdkDir = path.join(__dirname, "src", "generated")
const binaryInstallDir = path.join(__dirname, "..", ".crates")

module.exports = {
    idlGenerator: "anchor",
    programName: "token_rewards_coupons",
    programId: "2voaAEWrDYbrP5wPgm3K3QdPGzvstAC1b8QuGaPRSg3U",
    idlDir,
    sdkDir,
    binaryInstallDir,
    programDir,
}
