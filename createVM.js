const util = require('util')

const exec = util.promisify(require('child_process').exec);

module.exports = async (instance_name /*cpu, memory, disk*/) => {
    try {
        const { stdout: terraformInitOutput } = await exec(`make terraform-init`);
        console.log(terraformInitOutput);

        const { stdout: terraformPlanOutput } = await exec(`make terraform-plan NAME="${instance_name}"`);
        console.log(terraformPlanOutput);
    } catch (error) {
        console.error(error)
    }
}
