var app=angular.module('pokedex',['toaster']);

app.controller('mainController',function($http,$scope,toaster){

	appl=this;
	appl.name=false;
	appl.typ=false;
	appl.weak=false;
	appl.spawnchance=false;
	appl.spawnavg=false;

	appl.activate=function(a)
	{
		if(a=='name')
		{
			appl.name=true;
			appl.typ=false;
			appl.weak=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='typ')
		{
			appl.typ=true;
			appl.name=false;
			appl.weak=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='weak')
		{
			appl.weak=true;
			appl.name=false;
			appl.typ=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='spawnchance')
		{
			appl.spawnchance=true;
			appl.name=false;
			appl.typ=false;
			appl.weak=false;
			appl.spawnavg=false;
		}
		else if(a=='spawnavg')
		{
			appl.spawnavg=true;
			appl.name=false;
			appl.typ=false;
			appl.weak=false;
			appl.spawnchance=false;
		}
	}
	console.log("angular working");
	appl.listPokemon=function(parname){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('warning','Please enter some input');
		}
		else
		{
			$http.get('/api/byname/'+this.name).then(function(data){
			appl.pokemonlist=data.data;
		})	
		}
		
	}
})