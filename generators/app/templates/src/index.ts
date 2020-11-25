import greeting from './components/other';

function myplugins(params:string) : void {
    console.log(greeting() + params);
}
export default myplugins;