import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
  await main();
})();

async function main() {
    const { b: base, l: limite, s: showTable, d:destinationFile,n:nameFile } = yarg;

  ServerApp.run({base, limite, showTable: showTable || false,destinationFile,nameFile});
}
