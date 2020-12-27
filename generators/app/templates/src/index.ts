type Cms = { [k in 'name' | 'abbr' | 'desc']: string };

type CmdDesctions = {
    name: string,
    type: string,
    description: string,
    params: Cms[]
}

// write your cmd configrations here:
const CmdDesctions: CmdDesctions = {
    name: 'hello', // command name
    type: 'custoom', // plugins type default custom
    description: 'xxxxxx', // command description
    params: [{ // commander paramters
        "name": "--project", //commander name
        "abbr": "-p", // commander abbreviation
        "desc": "project name" // desction for cmd
    }], // params name
};


const happy = (register: any): void => {
    console.log('happy plugins loaded...');
    register(CmdDesctions, (log: Cms['name'][]) => {
        // write or import modules or logic here
        console.log(log);
    }, 'write your plugins descriptions or specification here');
};

module.exports = happy;