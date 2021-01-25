const util = require('util')

const exec = util.promisify(require('child_process').exec);

module.exports = async (/*cpu, memory, disk*/) => {
    try {
        const { stdout: terraformOutput } = await exec("terraform apply");
    } catch (error) {
        console.error(error)
    }
}
