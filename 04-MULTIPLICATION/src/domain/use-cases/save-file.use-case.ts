import fs from 'fs'

export interface SaveFileUseCase{
    execute:(options:SaveFileOptions)=> boolean;
}

export interface SaveFileOptions{
    fileContent:string;
    destinationFile:string;
    nameFile? :string;
}


export class SaveFile implements SaveFileUseCase{
    constructor()
    {
    }


    execute({
        fileContent,
        destinationFile = 'outputs',
        nameFile ='table.txt '}: SaveFileOptions):boolean {


            try {
                fs.mkdirSync(destinationFile, { recursive: true });
                fs.writeFileSync(`${destinationFile}/${nameFile}`, fileContent);
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
      

    }
}