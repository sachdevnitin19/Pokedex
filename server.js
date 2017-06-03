var express =require('express');                        //instantiating all the dependencies.
var morgan=require('morgan');
var app=express();
var bodyParser=require('body-parser');
var router=express.Router();                            
var appRoutes=require('./app/api')(router);
var path=require('path');
var port=process.env.PORT||8000;
	
app.use(morgan('dev'));									//using morgan as a middleware for logging all the requests.
app.use(bodyParser.json());								
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));			//serve only public folder contents to client side
app.use('/api',appRoutes);								//using routes midleware.





//if user to go to any other undefined route this will redirect to home page.
app.get('*',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
});
//start the server
app.listen(port,function(){
	console.log("listening on port:"+port);
});
