
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
.option('n',{
    alias:'name',
    type:'string',
    default:'multiplication-table',
    describe:'File Name'
})
.option('d',{
    alias:'destination',
    type:'string',
    default:'outputs',
    describe:'File Destination'
})
.check((argv,options)=>{

    return true;
})
.parseSync()