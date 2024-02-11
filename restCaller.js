const axios = require('axios');

function getJson(action) {
    let suspend = true;
    if (action == 'ON') {
        suspend = false;
    }

    let data = {
        "spec": {
            "defaultOptions": {
                "suspend": suspend
            }
        }
    };

    return data;
}

function callWorkloadAPI(org, gvc, workload, action, key) {
    let config = {
        method: 'patch',

        url: `${process.env.CPLN_ENDPOINT}/org/${org}/gvc/${gvc}/workload/${workload}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        data: getJson(action)
    };

    axios(config)
        .then((response) => {
            console.log(`turned ${action} workload ${workload} in GVC ${gvc} in org ${org}`);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = callWorkloadAPI;