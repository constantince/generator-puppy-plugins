type Cms = {
    [k in 'abbreviation' | 'params' | 'description']: string
}
type CmdDesctions = {
    name: string
} & Partial<Cms>;

//write your cmd configrations here:
const CmdDesctions:CmdDesctions = {
    name: '', //command name 
    abbreviation: '', //first params abbreviation
    params: '' // fisrt params name
}
const happy = (register: any) => {
    console.log("happy plugins loaded...");
    register(CmdDesctions, (log: string) => {
        //write or import modules here
        console.log(log);
    }, "log your logger");
}

module.exports = happy;