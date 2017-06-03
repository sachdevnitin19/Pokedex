var app=angular.module('pokedex',['toaster']);

app.controller('mainController',function($http,$scope,toaster){

	appl=this;
	appl.name=false;
	appl.typ=false;
	appl.weak=false;
	appl.spawnchance=false;
	appl.spawnavg=false;
	appl.pokemonlist={};
	appl.pokemon=false;
	appl.activate=function(a)
	{
		if(a=='name')
		{	
			appl.pokemon=false;
			appl.parname="";
			appl.name=true;
			appl.typ=false;
			appl.weak=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='typ')
		{
			appl.typ=true;
			appl.parname="";
			appl.name=false;
			appl.weak=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='weak')
		{
			appl.weak=true;
			appl.parname="";
			appl.name=false;
			appl.typ=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='spawnchance')
		{
			appl.spawnchance=true;
			appl.parname="";
			appl.name=false;
			appl.typ=false;
			appl.weak=false;
			appl.spawnavg=false;
		}
		else if(a=='spawnavg')
		{
			appl.spawnavg=true;
			appl.name=false;
			appl.parname="";
			appl.typ=false;
			appl.weak=false;
			appl.spawnchance=false;
		}
	}
	appl.searchbyname=function(parname){

		if(this.parname===undefined)
		{
			toaster.pop('error','Please enter some input');
		}
		else
		{
			$http.get('/api/byname/'+this.parname).then(function(data){
			if(data.data.message==undefined)
			{

				appl.pokemonlist.byname=data.data;
				
			}
			else
			{
				toaster.pop('error',data.data.message);		
			}
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
			if(data.data.message==undefined)
			{	
				console.log(data.data);
				appl.pokemonlist=data.data;
				appl.pokemon=true;
			}
			else
			{
				toaster.pop('error',data.data.message);
			}
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
			if(data.data.message==undefined)
			{
				appl.pokemonlist=data.data;
				appl.pokemon=true;
			}
			else
			{
				toaster.pop('error',data.data.message);
			}
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
				if(data.data.message==undefined)
				{
					appl.pokemonlist=data.data;
					appl.pokemon=true;		
				}
				else
				{
					toaster.pop('error',data.data.message);
				}
			
		})	
		}
		else
		{
			$http.get('/api/byspawnchance_gte/'+this.parname).then(function(data){
				if(data.data.message==undefined)
				{
					appl.pokemonlist=data.data;
					appl.pokemon=true;
				}
				else
				{
					toaster.pop('error',data.data.message);
					
				}
			
			})	
		}
		
	}

	appl.searchbyavgspawn=function(parname,a){
		if(this.parname===undefined)
		{
			appl.pokemonlist="please enter some string";
			toaster.pop('error','Please enter some input');
		}
		else if(a=='gte') 
		{	
			console.log(this.parname);
			$http.get('/api/byavgspawn_gte/'+this.parname).then(function(data){
				if(data.data.message==undefined)
				{
					appl.pokemonlist=data.data;
					appl.pokemon=true;		
				}
				else
				{
					toaster.pop('error',data.data.message);	
				}
			})	
		}
		else
		{
			$http.get('/api/byavgspawn_lte/'+this.parname).then(function(data){
				if(data.data.message==undefined)
				{
					appl.pokemonlist=data.data;
					appl.pokemon=true;
				}
				else
				{
					toaster.pop('error',data.data.message);	
				}


			})	
		}
		
	}

	
})