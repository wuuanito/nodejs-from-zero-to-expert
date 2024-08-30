
import {yarg} from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


(async()=>{
    await main();
})();

async function main(){

    console.log(yarg);

    const {b:base,l:limit,s:showTable} = yarg;


    ServerApp.run({base:5,limit:10,showTable:true});

}


