# CNES-GEOSERVICE

Endpoint que retorna os estabelecimentos de saúde dentro de uma região. Os dados são do CADASTRO NACIONAL DE ESTABELECIMENTOS DE SAÚDE

### Prerequisites

Nodejs
Npm


### Installing

clone este repositório
faça download a base de dados na url abaixo

http://i3geo.saude.gov.br/i3geo/ogc.php?OUTPUTFORMAT=csv&bbox=-76.5125927,-39.3925675209,-29.5851853,9.49014852081&service=wfs&version=1.1.0&request=getfeature&layers=cnes_ativo&typeName=cnes_ativo&ows_geomtype=none

extraia o arquivo .csv na pasta

run

npm install

## Teste

run nodejs index.js

open on browser http://localhost:5000/?position=-23.96,-46.33&distancia=500&uf=sp

## Uso

### Parâmetros
	Position (double,double) - latitude e longitude, separados por vírgula, e com '.'(ponto) como separador de casa decimal 
	distancia (int) - raio da busca (em metros)
	uf (string) - limita a busca a um estado específico
	especialidade (string) - Retorna apenas unidades com determinada especialidade (opcional) 

### Retorno
	Um Array de objetos com:
		Data - os dados da unidade dispostos na tabela cnes
		Distance - a distância calculada e a posição da requisição.

	O array é ordenado de forma crescente pela distância 

## Authors

Willian Lopes (LABIC - UFES)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details