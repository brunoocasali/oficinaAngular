angular.module('listaLivrosApp', [])

.factory('FACTORY_LIVROS', [function () {
	
	return {

		buscarListaLivros : function() {

	     return listaLivros = [{id:'1',nome:'Fortaleza Digital',status:'N',autor:'Dan Brown',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'2',nome:'Novembro de 1963',status:'N',autor:'Stephen King',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'3',nome:'Criança 44',status:'N',autor:'Tom Rob Smith',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'4',nome:'O Senhor dos Aneis',status:'N',autor:'J. R. R. Tolkien',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'5',nome:'Tudo o Que eu Deveria Saber Aprendi no Jardim de Infância',status:'N',autor:'Robert Fulghum',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'6',nome:'Agência de Investigações Holísticas Dirk Gently',status:'N',autor:' Douglas Adams',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'7',nome:'Guia Politicamente Incorreto da Filosofia',status:'N',autor:'Luiz Felipe Pondé',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'8',nome:'Eu, Robô',status:'N',autor:'Isaac Asimov',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'9',nome:'Social Killers: Amigos Virtuais, Assassinos Reais',status:'N',autor:'Jj Slate,Rj Parker',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'10',nome:'Sonho Febril',status:'N',autor:'George R.R. Martin',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'11',nome:'Prometo Falhar',status:'N',autor:'Pedro Chagas Freitas',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'12',nome:'Inferno',status:'N',autor:'Dan Brown',valorPago:'10',dataTermino:'10/11/2015'},
						 {id:'13',nome:'O Hobbit',status:'N',autor:'J. R. R. Tolkien',valorPago:'10',dataTermino:'10/11/2015'},];

		}
	};
}]);
	