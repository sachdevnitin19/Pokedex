# Pokedex


Pokedex is a online portal for finding information about first generation pokemons.
Search can be done by pokemon's name,type, weaknesses,Spawn chances and Average Spawns.

On server side NodeJS and ExpressJS is used to build REST api and on front end AngularJS is used.
Bootstrap is used for styling on front end.

Rest api can be used to get pokemon data in JSON format.

following are the routes:-

1) '/api/byname/providenamehere' to search pokemon by name.
2) '/api/bytype/providetypehere' to get list of pokemon for given pokemon type.
3)'/api/bytype/provideweaknesshere' to get list of pokemon for given pokemon weakness.
4) '/api/byspawnchance_lte/providevaluehere' to get list of pokemons having spawn chances less than equal to provided value.
5) '/api/byspawnchance_gte/providevaluehere' to get list of pokemons having spawn chances greater than equal to provided value.
6) '/api/byavgspawn_lte/providevaluehere' to get list of pokemons having average spawn  less than equal to provided value.
7) '/api/byavgspawn_gte/providevaluehere' to get list of pokemons having spawn chances greater than equal to provided value.


eg:- perform GET request to route "forkpokedex.herokuapp.com/api/byname/pikachu"  to get information about pikachu pokemon.

