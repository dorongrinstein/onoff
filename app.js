const callWorkloadAPI = require('./restCaller');

const ACTION = process.env.ACTION || 'OFF'; // turn workloads off by default
const KEY = process.env.CPLN_TOKEN;
const ORG = process.env.CPLN_ORG;
const GVC = process.env.CPLN_GVC;
const WORKLOADS = process.env.WORKLOADS;

function loadWorkloadList() {
    let list;
    try {
        list = WORKLOADS.split(',').map(s => s.trim())
        console.log(`about to turn ${ACTION} ${JSON.stringify(list)}`);
        return list;
    } catch (err) {
        console.error("invalid WORKLOADS env. variable. must contain an array of strings");
        console.error(err);
        process.exit();
    }
}

function main() {
    let list = loadWorkloadList();
    list.forEach(element => {
        callWorkloadAPI(ORG, GVC, element, ACTION, KEY);
    });
}

main();

