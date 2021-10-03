# Teste Técnico LinkApi

Neste projeto foi realizada a integração entre duas plataformas, Pipedrive e Bling, foi pedido para consultar as oportunidades igual a ganho no Pipedrive e inseri-las como pedidos no Bling, consolidar no banco de dados e retornar os dados salvos no Banco.

## Candidato

   Roberto Chaves Souza

## Banco de dados utilizado

O  Mongodb foi o banco de dados adotado nesse projeto,foi utilizado o Mongodb Atlas.

### Informações Técnicas

node v14.17.0 <br/>
npm  6.14.13

Também foi utilizado o nodemon,e o sucrase no ambiente de desenvolvimento


## Rotas API


   
|  Tipo               |        Rota         |  Controller               |       Descrição         |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  GET |  / |   |  Sinaliza o funcionamento da API. |
| POST |  /integration |  IntegrationController.store |  Responsável por integrar a api do Pipedrive juntamente com a api do Bling,e consolidar no Banco de dados as integrações feitas. |  
|  GET |  /integration/filter?data=00/00/0000&value=000 |  IntegrationController.index |  retornar as integrações salvas no Banco de dados filtradas por data e ou valor |
|  GET |  /integration |  IntegrationController.show |  retorna todas as integrações salvas no Banco de dados.|  
|  GET |  /pipedrive/won/list |  PipeController.index |  busca  direto da API do Pipedrive as oportunidades iguais a (ganho). |
|  GET |  /bling/list |  BlingController.index | Busca direto da API do Bling os pedidos. |  


## Iniciando o projeto

o projeto está rodando na porta 3333 <br/>

para iniciar o projeto basta utilizar o comando: <br/>

### Yarn dev


