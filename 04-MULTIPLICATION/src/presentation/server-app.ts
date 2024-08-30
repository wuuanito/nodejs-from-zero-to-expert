import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limite: number;
  showTable: boolean;
  destinationFile:string;
  nameFile:string;
}

export class ServerApp {
  static run({base,limite,showTable,destinationFile,nameFile}: RunOptions) {
    console.log("Server running...");

    const table = new CreateTable().execute({base,limite});
    const wasCreated = new SaveFile()
    .execute({fileContent : table,
        destinationFile,
        nameFile
    });
    if (showTable) console.log(table);

    (wasCreated)
    ? console.log('File Created')
    : console.log('File not Created');
  }
}
