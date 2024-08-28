import { findHeroById } from "./services/hero.service";


const hero = findHeroById(5);

console.log(hero?.name ?? 'No he encontrado nada')