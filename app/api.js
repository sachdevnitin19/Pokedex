var request=require('request');


module.exports=function(router)
{
	var pokedex=[];

	//fetching all pokemon details using request npm package.
	request.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',function(error,res,body){
		if(error)
		{
			console.log(error);
		}
		else if(res.statusCode==200){
			pokedex=JSON.parse(body).pokemon;
		}
	});


	router.get('/poke',function(req,res){
		res.json(pokedex);
	});

	router.get('/byid/:id',function(req,res){
		res.json(pokedex[req.params.id-1]);
	});

	router.get('/byname/:name',function(req,res){
		var flag=false;
		for(let i=0;i<pokedex.length;i++)
		{
			if(pokedex[i].name.toLowerCase()===req.params.name.toLowerCase())
			{
				flag=true
				res.json(pokedex[i]);
			}
		}
		if(!flag)
		{
			res.json({"message":"pokemon not found"});	
		}
	})

	router.get('/bytype/:type',function(req,res){

		var pokemon=[];
		for(let i=0;i<pokedex.length;i++)
		{
			for(let j=0;j<pokedex[i].type.length;j++)
			{
				if(pokedex[i].type[j].toLowerCase()==req.params.type.toLowerCase())
				{
					pokemon.push(pokedex[i]);
				}
			}
		}
		if(pokemon.length!=0)
		{
			res.json(pokemon);
		}
		else
		{
			res.json({"message":"no pokemon found with type '"+req.params.type+"'."});
		}
		
	});

	router.get('/byweakness/:weakness',function(req,res){

		var pokemon=[];
		for(let i=0;i<pokedex.length;i++)
		{
			for(let j=0;j<pokedex[i].weaknesses.length;j++)
			{
				if(pokedex[i].weaknesses[j].toLowerCase()==req.params.weakness.toLowerCase())
				{
					pokemon.push(pokedex[i]);
				}
			}
		}
		if(pokemon.length!=0)
		{
			res.json(pokemon);
		}
		else
		{
			res.json({"message":"no pokemon found with weakness '"+req.params.weakness+"'."});
		}
		
	});

	router.get('/byspawnchance_lte/:spawnchance_lte',function(req,res){

		var pokemon=[];
		for(let i=0;i<pokedex.length;i++)
		{
			if(pokedex[i].spawn_chance<=req.params.spawnchance_lte)
			{
				pokemon.push(pokedex[i]);
			}
		}
		if(pokemon.length!=0)
		{
			res.json(pokemon);
		}
		else
		{
			res.json({"message":"no pokemon found with spawn chances <= '"+req.params.spawnchance_lte+"'."});
		}
		
	});

	router.get('/byspawnchance_gte/:spawnchance_gte',function(req,res){

		var pokemon=[];
		for(let i=0;i<pokedex.length;i++)
		{
			if(pokedex[i].spawn_chance>=req.params.spawnchance_gte)
			{
				pokemon.push(pokedex[i]);
			}
		}
		if(pokemon.length!=0)
		{
			res.json(pokemon);
		}
		else
		{
			res.json({"message":"no pokemon found with spawn chances >= '"+req.params.spawnchance_gte+"'."});
		}
		
	});

	router.get('/byavgspawn_gte/:avgspawn_gte',function(req,res){

		var pokemon=[];
		for(let i=0;i<pokedex.length;i++)
		{
			if(pokedex[i].avg_spawns>=req.params.avgspawn_gte)
			{
				pokemon.push(pokedex[i]);
			}
		}
		if(pokemon.length!=0)
		{
			res.json(pokemon);
		}
		else
		{
			res.json({"message":"no pokemon found with average spawn  >= '"+req.params.spawnchance_gte+"'."});
		}
		
	});

	router.get('/byavgspawn_lte/:avgspawn_lte',function(req,res){

		var pokemon=[];
		for(let i=0;i<pokedex.length;i++)
		{
			if(pokedex[i].avg_spawns<=req.params.avgspawn_lte)
			{
				pokemon.push(pokedex[i]);
			}
		}
		if(pokemon.length!=0)
		{
			res.json(pokemon);
		}
		else
		{
			res.json({"message":"no pokemon found with average spawn <= '"+req.params.avgspawn_lte+"'."});
		}
		
	});

	return router
}