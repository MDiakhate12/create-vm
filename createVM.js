const util = require('util')

const exec = util.promisify(require('child_process').exec);

module.exports = async (instance_name /*cpu, memory, disk*/) => {
    try {
        const { stdout: terraformOutput } = await exec(`make NAME=${instance_name}`);
        console.log(terraformOutput);
    } catch (error) {
        console.error(error)
    }
}
