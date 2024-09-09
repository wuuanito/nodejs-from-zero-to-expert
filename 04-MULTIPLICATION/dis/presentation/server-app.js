"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/use-cases/create-table.use-case");
const save_file_use_case_1 = require("../domain/use-cases/save-file.use-case");
class ServerApp {
    static run({ base, limite, showTable, destinationFile, nameFile }) {
        console.log("Server running...");
        const table = new create_table_use_case_1.CreateTable().execute({ base, limite });
        const wasCreated = new save_file_use_case_1.SaveFile()
            .execute({ fileContent: table,
            destinationFile,
            nameFile
        });
        if (showTable)
            console.log(table);
        (wasCreated)
            ? console.log('File Created')
            : console.log('File not Created');
    }
}
exports.ServerApp = ServerApp;
