
angular.module('livrosApp', ['listaLivrosApp'])
.controller('ControllerLivros', ['$scope','FACTORY_LIVROS', function ($scope,FACTORY_LIVROS) {
	
		
		$scope.listaLivros = FACTORY_LIVROS.buscarListaLivros();
		$scope.esconderLista = false;

		$scope.initialize = function(){
			$scope.livro = new LivroVO();
			$scope.proximo = $scope.listaLivros.length + 1;
			$scope.livro.id = $scope.proximo;
		}

		$scope.initialize();

		//Buscar lista de Livros
		$scope.adicionarLivro = function(livro){

			$scope.listaLivros.push(livro);	
			$scope.initialize();
		}

		$scope.excluirLivro = function(livro){
				
			$scope.listaLivros = $scope.listaLivros.filter(function (lv){

				if(lv.id != livro.id){ return lv;}
			})

		}

		$scope.editarLivro = function(lv){
			
			$scope.livro = lv;
			$scope.esconderLista = true;
			
		}

		$scope.salvarEdicao = function(){
			$scope.initialize();
			$scope.esconderLista = false;
		}

}]);

function LivroVO(){

	this.id = 0;
	this.nome = "";
	this.autor = "";
	this.status = "";
	this.valorPago = 0;
	this.dataTermino = "";

};