export const filterTerrain = planets => {
    const terrains = planets.map(e => e.terrain.replaceAll(',','')).join(' ').split(' ')
    const terrainsList = new Set(terrains);
    return [...terrainsList]
}