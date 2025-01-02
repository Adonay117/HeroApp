import { heroes } from "../data/hereos"

export const getHeroesById = (id) => {

    return heroes.find( hero => hero.id === id)
}