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
	appl.searchbyname=function(parname){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('error','Please enter some input');
		}
		else
		{
			$http.get('/api/byname/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
		})	
		}
		
	}


	appl.searchbytype=function(parname){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('error','Please enter some input');
		}
		else
		{
			$http.get('/api/bytype/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
		})	
		}
		
	}
	appl.searchbyweak=function(parname){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('error','Please enter some input');
		}
		else
		{
			$http.get('/api/byweakness/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
		})	
		}
		
	}
	appl.searchbyspawnchance=function(parname,a){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('error','Please enter some input');
		}
		else if(a=='lte')
		{
			$http.get('/api/byspawnchance_lte/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
		})	
		}
		else
		{
			$http.get('/api/byspawnchance_gte/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
			})	
		}
		
	}

	appl.searchbyavgspawn=function(parname){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('error','Please enter some input');
		}
		else if(a=='gte') 
		{
			$http.get('/api/byavgspawn_gte/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
		})	
		}
		else
		{
			$http.get('/api/byavgspawn_lte/'+this.parname).then(function(data){
			appl.pokemonlist=data.data;
			})	
		}
		
	}

	
})