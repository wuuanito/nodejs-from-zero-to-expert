
import yargs from 'yargs';

export const yarg = yargs(process.argv)
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
.option('l',{
    alias:'limit',
    type: 'number',
    default:10,
    describe: 'Multiplication table limit'
})
.option('s',{
    alias:'show',
    type: 'boolean',
    demandOption: false,
    describe: 'Show Multiplication table '
})
.check((argv,options)=>{

    return true;
})
.parseSync()