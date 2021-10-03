# Teste Técnico LinkApi

Neste projeto foi realizada a integração entre duas plataformas, Pipedrive e Bling, foi pedido para consultar as oportunidades igual a ganho no Pipedrive e inseri-las como pedidos no Bling, consolidar no banco de dados e retornar os dados salvos no Banco.

## Candidato

   Roberto Chaves Souza

## Banco de dados utilizado

Banco de dados adotado nesse projeto foi o Mongodb,foi utilizado o Mongodb Atlas.

### Informações Técnicas

node v14.17.0
npm  6.14.13

Também foi utilizado o nodemon,e o sucrase no ambiente de desenvolvimento


### Rotas

<ul>
 <li>GET  /   Sinaliza o funcionamento da API.</li>
 <li>Tipo: POST  Rota: /integration Controller: IntegrationController.store Descrição Responsável por integrar a api do Pipedrive juntamente com a api do Bling,e consolidar no Banco de dados as integrações feitas.</li>
 <ul/>



