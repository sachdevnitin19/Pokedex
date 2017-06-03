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
		for(var i=0;i<pokedex.length;i++)
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

	return router
}