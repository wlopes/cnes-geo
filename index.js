express = require('express');
var bodyParser = require('body-parser'); 
var csv = require('fast-csv');
var geolib = require('geolib');

var port = (process.env.PORT || 5000);

var app = express()

app.get('/',function(req,res){
	console.log(req.query);

	var filename;
	var output_json = []
	
	uf = req.query.uf;
	if(uf === undefined){
		filename = "cnes_ativo_esp.csv";
	}else{
		filename = "cnes_ativo_esp_" + uf.toUpperCase() + ".csv";
	}	

	especialidade = req.query.especialidade;

	temp = req.query.position.split(",");
	position = {latitude:temp[0],longitude:temp[1]};

	csv.fromPath(filename,{"headers":true,"delimiter":","})
	.on("data",function(data){
		d = distFilter(data, position, req.query.distancia); 
		if(d != -1){			
			if(especialidade === undefined || eFilter(data,especialidade)){
				output_json.push({data:data,distance:d});	
			}			
		}	
	})
	.on("end",function(){
		console.log(output_json.length)
		output_json.sort(function(a,b){
			return a.distance - b.distance;
		})
		res.json(output_json);
	})

})

app.get('/mapa',function(req,res){		
	res.sendFile(__dirname + "/mapa.html");
})

app.get('/mapScript',function(req,res){		
	res.sendFile(__dirname + "/mapScript.js");
})

app.get('/sobre',function(req,res){
	res.sendFile(__dirname + "/sobre.txt");
})

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function distFilter(data, position,distancia){
	d = calcDistance(position,data);

	if(d < distancia){			
		return d;
	}else{
		return -1;
	}
}

function eFilter(data,especialidade){
	return data.ds_servico_especializado.indexOf(especialidade) != -1;
}

function calcDistance(position,data){
	return geolib.getDistance( position,{latitude:data.lat,longitude:data.long});
}
