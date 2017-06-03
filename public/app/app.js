var app=angular.module('pokedex',['toaster']);//creating module

//main controller
app.controller('mainController',function($http,$scope,toaster){

	appl=this;
	appl.name=false;					//this to hide 			
	appl.typ=false;						//different 
	appl.weak=false;					//searchboxes
	appl.spawnchance=false;				//
	appl.spawnavg=false;
	appl.pokemonlist={};
	
	appl.pokemon=false;					//this to hide the body 
	appl.pokemonname=false;				//in which result is displayed when no input
	
	//function triggers the display of different search boxes.
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
			appl.pokemonname=false;
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
			appl.pokemonname=false;
			appl.parname="";
			appl.name=false;
			appl.typ=false;
			appl.spawnchance=false;
			appl.spawnavg=false;
		}
		else if(a=='spawnchance')
		{
			appl.spawnchance=true;
			appl.pokemonname=false;
			appl.parname="";
			appl.name=false;
			appl.typ=false;
			appl.weak=false;
			appl.spawnavg=false;
		}
		else if(a=='spawnavg')
		{
			appl.spawnavg=true;
			appl.pokemonname=false;
			appl.name=false;
			appl.parname="";
			appl.typ=false;
			appl.weak=false;
			appl.spawnchance=false;
		}
	}
	//this function makes http request to search pokemon by name
	appl.searchbyname=function(parname){
		console.log(this.parname);
		if(this.parname=="")
		{
			toaster.pop('error','Please enter some input');
		}
		else
		{
			$http.get('/api/byname/'+this.parname).then(function(data){
			if(data.data.message==undefined)
			{

				appl.pokemonlist.byname=data.data;
				appl.pokemonname=true;
				
			}
			else
			{
				toaster.pop('error',data.data.message);		
			}
		})	
		}
		
	}

	//this function makes http request to search pokemon by type
	appl.searchbytype=function(parname){
		if(this.parname=="")
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

	//this function makes http request to search pokemon by its weaknesses
	appl.searchbyweak=function(parname){
		if(this.parname=="")
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

	//this function makes http request to search pokemon by its spawnchances
	appl.searchbyspawnchance=function(parname,a){
		if(this.parname=="")
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
	//this function makes http request to search pokemon by avgspawn
	appl.searchbyavgspawn=function(parname,a){
		if(this.parname=="")
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