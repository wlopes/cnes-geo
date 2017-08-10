# CNES-GEOSERVICE

Endpoint que retorna os estabelecimentos de saúde dentro de uma região. Os dados são do CADASTRO NACIONAL DE ESTABELECIMENTOS DE SAÚDE

### Prerequisites
	Nodejs
	Npm


### Installing

clone este repositório

execute
	npm install

## Teste

execute nodejs index.js

abra em um browser http://localhost:5000/?position=-23.96,-46.33&distancia=500&uf=sp

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
