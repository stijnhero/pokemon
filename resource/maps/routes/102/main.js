var map = [
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,9,9,9,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,9,9,9,9,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,9,9,9,9,1,0,0,1,1,1,1,1,1,1],
        [1,1,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,2,0,9,9,9,9,1,0,0,1,1,1,1,1,1,1],
        [1,1,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,0,9,9,9,1,0,0,0,0,1,1,1,1,1],
        [[7, function() { pokemonCore.maps.mapLastCoord[10] = pokemonCore.gameChar.getCoords(); pokemonCore.maps.getMap(13);}],0,0,9,9,9,9,9,9,9,0,0,0,0,1,1,2,2,0,0,2,2,2,2,2,2,0,0,0,0,1,1,0,6,2,0,0,0,9,9,1,1,1,1,1,1,1,1,1,1],
        [[7, function() { pokemonCore.maps.mapLastCoord[10] = pokemonCore.gameChar.getCoords(); pokemonCore.maps.getMap(13);}],0,0,0,9,9,9,9,0,0,0,0,0,0,1,1,0,0,0,0,9,9,9,9,9,0,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
        [[7, function() { pokemonCore.maps.mapLastCoord[10] = pokemonCore.gameChar.getCoords(); pokemonCore.maps.getMap(13);}],0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,9,9,9,9,9,9,9,0,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [[7, function() { pokemonCore.maps.mapLastCoord[10] = pokemonCore.gameChar.getCoords(); pokemonCore.maps.getMap(13);}],0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,9,9,9,9,9,9,9,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,9,9,9,9,9,9,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0],
        [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,9,9,9,9,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,9,9,0,0,1,1,1,1,1,1,9,9,9,0,0,0,0,0,0,0,1,1,1,1,9,9,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,9,9,2,2,2,2,1,1,1,1,9,9,0,0,0,1,1,0,0,0,0,0,9,9,9,9,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,9,9,9,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,9,9,9,0,0,0,1,1,1,1,1,1,0,0,9,9,9,1,1,0,0,0,0,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,9,9,9,9,1,1,1,1,1,1,1,1,0,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,9,9,9,9,1,1,1,1,1,1,1,1,0,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,9,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,9,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    "routes/102/main.png"
];
var npc = [

];

var pokemon = [
    {
        pokemon: new pokemonCore.pokemon.instantiate(261),
        rarity: 6.75,
        level: [2,3]
    },
    {
        pokemon: new pokemonCore.pokemon.instantiate(263),
        rarity: 8.5,
        level: [2,3]
    },
    {
        pokemon: new pokemonCore.pokemon.instantiate(265),
        rarity: 8.5,
        level: [2,3]
    }
];