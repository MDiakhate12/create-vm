const util = require('util')

const exec = util.promisify(require('child_process').exec);

module.exports = async (instance_name /*cpu, memory, disk*/) => {
    try {
        const { stdout: terraformInitOutput } = await exec(`make terraform-init`);
        console.log(terraformInitOutput);

        const { stdout: terraformPlanOutput } = await exec(`make terraform-plan NAME="${instance_name}"`);
        console.log(terraformPlanOutput);

        const { stdout: terraformApplyOutput } = await exec(`make terraform-apply | awk '/ip = / {print $3}'`);
        console.log(terraformApplyOutput)

        return terraformApplyOutput;
    } catch (error) {
        console.error(error)
    }
}
