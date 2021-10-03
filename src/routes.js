import { Router } from 'express';
import BlingController from '../controllers/BlingController';

import IntegrationController from '../controllers/IntegrationController';
import PipeController from '../controllers/PipeController';



const routes = new Router();



routes.get('/', (req, res)=>{
  
    return res.json({ ok:true});
});





routes.post('/integration', IntegrationController.store);
routes.get('/integration',IntegrationController.show);
routes.get('/integration/filter',IntegrationController.index);
//routes.delete('/integration/delete',IntegrationController.delete);


//rotas de consultas a API externa

routes.get('/pipedrive/won/list', PipeController.index);
routes.get('/bling/list', BlingController.index);








export default routes;