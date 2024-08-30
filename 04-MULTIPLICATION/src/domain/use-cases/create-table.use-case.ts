export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
  base: number;
  limite?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limite = 10 }: CreateTableOptions): string {
    let outputMessage = "";
    for (let i = 0; i <= limite; i++) {
      outputMessage += `${base} * ${i} = ${base * i} \n`;
    }
    return outputMessage;
  }
}
