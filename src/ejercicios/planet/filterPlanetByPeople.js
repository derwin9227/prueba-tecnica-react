export const filterPlanetByPeople = (planets, terrain) => {
    //console.log(planets.filter(e => e.terrain.includes(terrain)))
    return (planets.filter(e => e.terrain.includes(terrain)))
}
